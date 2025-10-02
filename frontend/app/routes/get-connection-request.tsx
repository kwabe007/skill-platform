import type { Route } from "../../.react-router/types/app/routes/+types/get-connection-request";
import { getLatestConnectionRequest } from "~/api/api.server";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const sender = Number(url.searchParams.get("sender"));
  const receiver = Number(url.searchParams.get("receiver"));
  return await getLatestConnectionRequest(request, { sender, receiver });
}
