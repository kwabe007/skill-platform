import type { DefaultContext } from "@apollo/client";

/**
 * Helper function for retrieving a context object adding app-level authorization
 * for use with `apollo.query`.
 */
export function getAppContext(): DefaultContext {
  return {
    headers: {
      Authorization: `users API-Key ${process.env.PAYLOAD_API_KEY}`,
    },
  };
}
