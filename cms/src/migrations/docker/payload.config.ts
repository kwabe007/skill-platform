// Minimal payload config used when running migrate commands in docker container.

import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";

export default (() => {
  return buildConfig({
    secret: process.env.PAYLOAD_SECRET!,
    db: postgresAdapter({
      pool: {
        connectionString: process.env.DATABASE_URI,
      },
    }),
  });
})();
