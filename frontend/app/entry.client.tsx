import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: window.env.SENTRY_DSN,
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  integrations: [
    //  Measure performance of page loads. Results are shown under the Performance tab.
    Sentry.reactRouterTracingIntegration(),
  ],
  // How much of the performance traces to sample. 0-1 where 1 is 100% of traces.
  tracesSampleRate: 0.1,
});

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>,
  );
});
