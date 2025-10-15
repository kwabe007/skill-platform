export {};

declare global {
  interface Window {
    env: {
      CONTACT_EMAIL: string;
      PLAUSIBLE_DATA_DOMAIN?: string;
      PLAUSIBLE_SCRIPT_SRC?: string;
      SENTRY_DSN?: string;
    };
  }
}
