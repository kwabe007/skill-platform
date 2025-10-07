import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const nonEmptyString = z.string("Required, can not be empty").min(1, "Required, can not be empty");
const trueOrFalse = z.enum(["true", "false"]);
const url = z.url({
  error: (ctx) => {
    if (!ctx.input) {
      return "Required, can not be empty";
    }
  },
});

function checkString(val: string | undefined, path: string, ctx: z.core.$RefinementCtx) {
  if (!val) {
    ctx.addIssue({
      path: [path],
      code: "custom",
      message: "Required, can not be empty",
    });
  }
}

const envSchema = z
  .object({
    DATABASE_URI: nonEmptyString,
    PAYLOAD_SECRET: nonEmptyString,
    EMAIL_ADAPTER: z.enum(["brevo", "nodemailer", "none"]),
    BREVO_API_KEY: z.string().optional(),
    BREVO_SENDER: z.string().optional(),
    SMTP_HOST: z.string().optional(),
    SMTP_PORT: z.string().optional(),
    SMTP_USER: z.string().optional(),
    SMTP_PASS: z.string().optional(),
    SMTP_SECURE: trueOrFalse.default("false"),
    FRONTEND_BASE_URL: url,
  })
  .superRefine((data, ctx) => {
    if (data.EMAIL_ADAPTER === "brevo") {
      checkString(data.BREVO_API_KEY, "BREVO_API_KEY", ctx);
      checkString(data.BREVO_SENDER, "BREVO_SENDER_EMAIL", ctx);
    } else if (data.EMAIL_ADAPTER === "nodemailer") {
      checkString(data.SMTP_HOST, "SMTP_HOST", ctx);
      checkString(data.SMTP_PORT, "SMTP_PORT", ctx);
      checkString(data.SMTP_USER, "SMTP_USER", ctx);
    }
  });

const result = envSchema.safeParse(process.env);
if (result.error) {
  const issueMessages = result.error.issues
    .map((issue) => `${issue.path.join(".")} • ${issue.message}`)
    .join("\n");
  console.log("Error when reading environment variables");
  console.log(issueMessages);
  process.exit(1);
}
const env = result.data;

export { env };
