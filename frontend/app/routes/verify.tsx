import type { Route } from "./+types/verify";
import { verify } from "~/api/api.server";
import { redirect } from "react-router";
import { toastCookieSerializer } from "~/cookie-serializers.server";

export async function loader({ params }: Route.LoaderArgs) {
  await verify(params.token);
  return redirect("/", {
    headers: {
      "Set-Cookie": await toastCookieSerializer.serialize("true"),
    },
  });
}
