import type { Route } from "./+types/signup";
import { logOut } from "~/api";
import { redirect } from "react-router";

export async function action({ request }: Route.ActionArgs) {
  await logOut(request);

  return redirect("/", {
    headers: {
      "Set-Cookie": `payload-token=; HttpOnly; Path=/; Max-Age=0; Secure; SameSite=Lax`,
    },
  });
}
