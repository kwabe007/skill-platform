import {
  AccountApi,
  AccountApiApiKeys,
  GetAccountAllOfPlan,
  SendSmtpEmail,
  TransactionalEmailsApi,
  TransactionalEmailsApiApiKeys,
} from "@getbrevo/brevo";
import { getPayload } from "payload";
import config from "@payload-config";

type EmailMessage = {
  to: string[];
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

export async function sendEmail(message: EmailMessage) {
  if (process.env.BREVO_API_KEY) {
    await sendBrevoEmail(process.env.BREVO_API_KEY, message);
  } else {
    await sendSMTPEmail(message);
  }
}

async function sendBrevoEmail(apiKey: string, { to, subject, text, html, replyTo }: EmailMessage) {
  const emailAPI = new TransactionalEmailsApi();
  const accountAPI = new AccountApi();
  emailAPI.setApiKey(TransactionalEmailsApiApiKeys.apiKey, apiKey);
  accountAPI.setApiKey(AccountApiApiKeys.apiKey, apiKey);

  const account = await accountAPI.getAccount();
  const plan = account.body.plan.find((plan) => plan.type === GetAccountAllOfPlan.TypeEnum.Free);

  if (!plan) {
    // TODO: Send sentry error message if no free plan is found. This is in case we upgrade the brevo plan
    //   to remind us that the logic here also needs to be updated.
  }

  const message = new SendSmtpEmail();
  message.to = to.map((recipient) => ({ email: recipient }));
  message.subject = subject;
  message.textContent = text;
  message.htmlContent = html;
  message.sender = { name: "Service Exchange", email: process.env.BREVO_SENDER_EMAIL };
  if (replyTo) {
    message.replyTo = { email: replyTo };
  }

  const response = await emailAPI.sendTransacEmail(message);
  return {
    messageId: response.body.messageId,
    messageIds: response.body.messageIds,
  };
}

async function sendSMTPEmail(message: EmailMessage) {
  const payload = await getPayload({ config });
  await payload.sendEmail(message);
}
