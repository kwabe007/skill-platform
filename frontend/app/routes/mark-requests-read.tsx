import type { Route } from "./+types/mark-requests-read";
import {
  getUserOrThrow401,
  markConnectionRequestsRead,
} from "~/api/api.server";

export async function action({ request }: Route.ActionArgs) {
  const user = await getUserOrThrow401(request);
  await markConnectionRequestsRead(request, user.id);
}
