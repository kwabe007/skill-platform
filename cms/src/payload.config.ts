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
import { CONNECTION_REQUESTS_SLUG, ConnectionRequests } from "@/collections/ConnectionRequests";
import { Settings } from "@/globals/Settings";
import { match } from "ts-pattern";
import { env } from "@/env";
import { brevoPreset, nodemailerPreset } from "@/email-adapters/config-presets";

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
    email: match(env.EMAIL_ADAPTER)
      .with("brevo", () => brevoPreset)
      .with("nodemailer", () => nodemailerPreset)
      .with("none", () => undefined)
      .exhaustive(),
    secret: env.PAYLOAD_SECRET,
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
        connectionString: env.DATABASE_URI,
      },
    }),
    sharp,
    plugins: [
      payloadCloudPlugin(),
      // storage-adapter-placeholder
    ],
  });
})();
