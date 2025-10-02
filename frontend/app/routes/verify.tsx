import type { Route } from "./+types/verify";
import { verify } from "~/api/api.server";
import { redirect } from "react-router";
import { setToastSession } from "~/cookie-serializers.server";

export async function loader({ params }: Route.LoaderArgs) {
  await verify(params.token);
  return redirect("/", {
    headers: await setToastSession(
      "Your email address is verified and you can now log in!",
    ),
  });
}
