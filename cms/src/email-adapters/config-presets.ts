import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import { env } from "@/env";
import { PLATFORM_NAME } from "@/utils";
import { brevoAdapter } from "@/email-adapters/brevo-adapter";

export const brevoPreset = brevoAdapter({
  defaultFromAddress: env.BREVO_SENDER!,
  defaultFromName: PLATFORM_NAME,
  apiKey: env.BREVO_API_KEY!,
});

export const nodemailerPreset = nodemailerAdapter({
  defaultFromAddress: env.SMTP_USER!,
  defaultFromName: PLATFORM_NAME,

  transportOptions: {
    host: env.SMTP_HOST!,
    port: Number(env.SMTP_PORT!),
    secure: env.SMTP_SECURE === "true",
    auth: {
      user: env.SMTP_USER!,
      pass: env.SMTP_PASS,
    },
  },
});
