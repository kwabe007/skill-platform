import type { Route } from "./+types/create-connection-request";
import { data } from "react-router";
import { setToastSession } from "~/cookie-serializers.server";
import { createConnectionRequest } from "~/api/api.server";
import { parseFormData, validationError } from "@rvf/react-router";
import { requestConnectionSchema } from "~/api/api-schemas";

export async function action({ request }: Route.ActionArgs) {
  const result = await parseFormData(request, requestConnectionSchema);
  if (result.error) {
    return validationError(result.error, result.submittedData);
  }
  await createConnectionRequest(request, result.data);

  return data(
    { status: "success" },
    { headers: await setToastSession("Your request has been sent!") },
  );
}
