import type { EmailAdapter, SendEmailOptions } from "payload";
import { APIError } from "payload";
import * as Brevo from "@getbrevo/brevo";
import { AccountApi, GetAccountAllOfPlan } from "@getbrevo/brevo";
import { z } from "zod";
import { htmlToText } from "html-to-text";

export type BrevoAdapterArgs = {
  apiKey: string;
  defaultFromAddress: string;
  defaultFromName: string;
};

export const brevoAdapter = (args: BrevoAdapterArgs): EmailAdapter<any> => {
  const { apiKey, defaultFromAddress, defaultFromName } = args;

  const emailAPI = new Brevo.TransactionalEmailsApi();
  const accountAPI = new AccountApi();
  emailAPI.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);
  accountAPI.setApiKey(Brevo.AccountApiApiKeys.apiKey, apiKey);

  return () => ({
    name: "brevo-sdk",
    defaultFromAddress,
    defaultFromName,

    sendEmail: async (message) => {
      const account = await accountAPI.getAccount();
      const plan = account.body.plan.find(
        (plan) => plan.type === GetAccountAllOfPlan.TypeEnum.Free,
      );

      // TODO Send log to error monitoring (e.g. Sentry)
      if (!plan) {
        const plansFoundText = account.body.plan.map((plan) => JSON.stringify(plan)).join("\n");
        console.error(`Brevo free plan not found. Plans found:\n${plansFoundText}`);
      } else if (plan.credits === 0) {
        console.error(`No credits left on current Brevo plan.`);
      } else if (plan.credits < 50) {
        console.error(`Only ${plan.credits} credits left on current Brevo plan.`);
      }

      const brevoPayload = mapPayloadEmailToBrevoEmail(
        message,
        defaultFromAddress,
        defaultFromName,
      );

      try {
        const response = await emailAPI.sendTransacEmail(brevoPayload);
        return response.body;
      } catch (err) {
        const axiosErrorSchema = z.object({ isAxiosError: z.literal(true) });
        const result = axiosErrorSchema.safeParse(err);
        if (result.success) {
          const axiosError: any = err;
          throw new Error(
            "Axios error while sending email via Brevo API\n\n" +
              `Status: ${axiosError.response?.status}\n` +
              `Data: ${JSON.stringify(axiosError.response?.data)}\n` +
              `Message: ${axiosError.message}`,
          );
        } else {
          throw new Error(`Unexpected error while sending email via Brevo API: ${err}`);
        }
      }
    },
  });
};

/**
 * Map Payload SendEmailOptions → Brevo SDK sendTransacEmail input
 */
function mapPayloadEmailToBrevoEmail(
  message: SendEmailOptions,
  defaultFromAddress: string,
  defaultFromName: string,
): Brevo.SendSmtpEmail {
  const email = new Brevo.SendSmtpEmail();

  email.sender = mapFromAddress(message.from, defaultFromName, defaultFromAddress);
  email.to = mapRecipients(message.to);
  email.cc = mapRecipients(message.cc);
  email.bcc = mapRecipients(message.bcc);
  email.replyTo = mapReplyTo(message.replyTo);
  email.subject = message.subject ?? "";
  email.htmlContent = message.html?.toString() || "";
  email.textContent = message.text ? message.text.toString() : htmlToText(email.htmlContent!);
  email.attachment = mapAttachments(message.attachments);

  return email;
}

/**
 * Map Payload “from” → Brevo sender object
 */
function mapFromAddress(
  address: SendEmailOptions["from"],
  defaultFromName: string,
  defaultFromAddress: string,
): Brevo.SendSmtpEmail["sender"] {
  if (!address) {
    return { name: defaultFromName, email: defaultFromAddress };
  }

  if (typeof address === "string") {
    const match = address.match(/(.*)<(.*)>/);
    return match ? { name: match[1].trim(), email: match[2].trim() } : { email: address.trim() };
  }

  return { name: address.name, email: address.address };
}

/**
 * Map to/cc/bcc → array of recipient objects
 */
function mapRecipients(addresses: SendEmailOptions["to"]): Brevo.SendSmtpEmail["to"] | undefined {
  if (!addresses) return undefined;

  if (typeof addresses === "string") {
    return [{ email: addresses }];
  }

  if (Array.isArray(addresses)) {
    return addresses.map((addr) =>
      typeof addr === "string" ? { email: addr } : { email: addr.address, name: addr.name },
    );
  }

  return [{ email: addresses.address, name: addresses.name }];
}

/**
 * Map replyTo
 */
function mapReplyTo(
  addresses: SendEmailOptions["replyTo"],
): Brevo.SendSmtpEmail["replyTo"] | undefined {
  if (!addresses) return undefined;

  if (typeof addresses === "string") {
    return { email: addresses };
  }

  if (Array.isArray(addresses)) {
    const first = addresses[0];
    return typeof first === "string"
      ? { email: first }
      : { email: first.address, name: first.name };
  }

  return { email: addresses.address, name: addresses.name };
}

/**
 * Convert attachments → base64 format for Brevo
 */
function mapAttachments(
  attachments: SendEmailOptions["attachments"],
): Brevo.SendSmtpEmail["attachment"] | undefined {
  if (!attachments?.length) return undefined;

  return attachments.map((a: any) => {
    if (!a.filename || !a.content) {
      throw new APIError("Attachment is missing filename or content", 400);
    }

    const content =
      typeof a.content === "string"
        ? Buffer.from(a.content).toString("base64")
        : a.content.toString("base64");

    return {
      name: a.filename,
      content,
    };
  });
}
