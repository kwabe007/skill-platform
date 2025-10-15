import { getCurrentUser } from "~/api/api.server";
import { data } from "react-router";

export async function adminOrDevModeOr404(request: Request) {
  const user = await getCurrentUser(request);
  if (process.env.NODE_ENV === "production" && user?.role !== "admin") {
    throw data(null, { status: 404 });
  }
}
