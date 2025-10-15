import {
  type ActionFunctionArgs,
  isRouteErrorResponse,
  type LoaderFunctionArgs,
  ServerRouter,
} from "react-router";
import { createReadableStreamFromReadable } from "@react-router/node";
import { renderToPipeableStream } from "react-dom/server";
import * as Sentry from "@sentry/react-router";

export const streamTimeout = 5_000;

const handleRequest = Sentry.createSentryHandleRequest({
  ServerRouter,
  renderToPipeableStream,
  createReadableStreamFromReadable,
});

export default handleRequest;

export function handleError(
  error: unknown,
  { request, params, context }: LoaderFunctionArgs | ActionFunctionArgs,
) {
  if (request.signal.aborted) return;
  // Don't report 404 errors due to bots cluttering up the logs
  if (isRouteErrorResponse(error) && error.status === 404) return;

  Sentry.captureException(error);
  console.error(error);
}
