import {
  data,
  isRouteErrorResponse,
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
  const env = { CONTACT_EMAIL: process.env.CONTACT_EMAIL };
  return data({ user, message, toastKey, env }, { headers: toastHeaders });
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
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
