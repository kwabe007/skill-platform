import type { Route } from "./+types/create-connection-request";
import { parseFormData, validationError } from "@rvf/react-router";
import { requestConnectionSchema } from "~/api/api-schemas";
import { createConnectionRequest } from "~/api/api.server";

export async function action({ request }: Route.ActionArgs) {
  const result = await parseFormData(request, requestConnectionSchema);
  if (result.error) {
    return validationError(result.error, result.submittedData);
  }
  await createConnectionRequest(request, result.data);
  return {};
}
