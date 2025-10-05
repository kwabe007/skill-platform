// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Skills } from "@/collections/skills/Skills";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import { CONNECTION_REQUESTS_SLUG, ConnectionRequests } from "@/collections/ConnectionRequests";
import { truthy } from "@/utils";
import { Settings } from "@/globals/Settings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default (() => {
  return buildConfig({
    admin: {
      user: Users.slug,
      importMap: {
        baseDir: path.resolve(dirname),
      },
    },
    collections: [Users, Media, Skills, ConnectionRequests],
    globals: [Settings],
    editor: lexicalEditor(),
    defaultDepth: 1,
    email: !process.env.BREVO_API_KEY
      ? nodemailerAdapter({
          defaultFromAddress: truthy(process.env.SMTP_USER, "SMTP_USER is required"),
          defaultFromName: "Service Exchange",
          // Nodemailer transportOptions
          transportOptions: {
            host: truthy(process.env.SMTP_HOST, "SMTP_HOST is required"),
            port: Number(truthy(process.env.SMTP_PORT, "SMTP_PORT is required")),
            secure: process.env.SMTP_SECURE === "true",
            auth: {
              user: truthy(process.env.SMTP_USER, "SMTP_USER is required"),
              pass: process.env.SMTP_PASS,
            },
          },
        })
      : undefined,
    secret: process.env.PAYLOAD_SECRET || "",
    typescript: {
      outputFile: path.resolve(dirname, "payload-types.ts"),
      schema: [
        ({ jsonSchema }) => {
          // Remove sendEmail field from connection request type generation
          const connectionRequestSchema = jsonSchema.definitions?.[CONNECTION_REQUESTS_SLUG];
          if (connectionRequestSchema) {
            delete connectionRequestSchema.properties?.sendEmail;
          }
          return jsonSchema;
        },
      ],
    },
    db: postgresAdapter({
      pool: {
        connectionString: process.env.DATABASE_URI || "",
      },
    }),
    sharp,
    plugins: [
      payloadCloudPlugin(),
      // storage-adapter-placeholder
    ],
  });
})();
