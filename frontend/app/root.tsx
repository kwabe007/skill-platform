import {
  data,
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { getCurrentUser } from "~/api/api.server";
import { Toaster } from "~/components/ui/sonner";
import { readToastSession } from "~/cookie-serializers.server";
import { useEffect } from "react";
import { toast } from "sonner";
import Container from "~/components/Container";
import { PLATFORM_NAME } from "~/utils";
import ButtonLink from "~/components/ButtonLink";
import { ArrowLeft } from "lucide-react";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Toaster />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getCurrentUser(request);
  const { message, headers: toastHeaders } = await readToastSession(request);
  const toastKey = message ? Math.random().toString(36) : undefined;
  const clientEnv = {
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    PLAUSIBLE_DATA_DOMAIN: process.env.PLAUSIBLE_DATA_DOMAIN,
    PLAUSIBLE_SCRIPT_SRC: process.env.PLAUSIBLE_SCRIPT_SRC,
  };
  return data(
    { user, message, toastKey, env: clientEnv },
    { headers: toastHeaders },
  );
}

export default function App() {
  const { message, toastKey, env } = useLoaderData<typeof loader>();

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        toast.success(message);
      });
    }
  }, [`${message}-${toastKey}`]);

  return (
    <>
      <Outlet />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.env = ${JSON.stringify(env)}`,
        }}
      />
      {env.PLAUSIBLE_DATA_DOMAIN && env.PLAUSIBLE_SCRIPT_SRC && (
        <script
          defer
          data-domain={env.PLAUSIBLE_DATA_DOMAIN}
          src={env.PLAUSIBLE_SCRIPT_SRC}
        ></script>
      )}
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="h-screen flex flex-col">
      <header className="py-6">
        <Container className="flex-center">
          <Link className="text-h4" to="/">
            {PLATFORM_NAME}
          </Link>
        </Container>
      </header>
      <main className="grow mb-[15vh]">
        <Container className="h-full flex-col-center">
          <h1 className="text-giant">{message}</h1>
          <p className="text-muted-foreground mt-3">{details}</p>
          {stack && (
            <pre className="w-full p-4 overflow-x-auto">
              <code>{stack}</code>
            </pre>
          )}
          <ButtonLink variant="default" className="text-base mt-6" to="/">
            <ArrowLeft /> Back to home
          </ButtonLink>
        </Container>
      </main>
    </div>
  );
}
