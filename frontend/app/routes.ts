import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("routes/transparent-header-layout.tsx", [
    index("routes/home/home.tsx"),
  ]),
  layout("routes/default-layout.tsx", [
    route(
      "startup-offerings/:skillSlug",
      "routes/startup-offerings/startup-offerings.tsx",
    ),
    route("edit-profile", "routes/edit-profile/edit-profile.tsx"),
    route("requests", "routes/requests/requests.tsx"),
  ]),
  layout("routes/footer-only-layout.tsx", [
    route("login", "routes/login.tsx"),
    route("signup", "routes/signup.tsx"),
    route("forgot-password", "routes/forgot-password.tsx"),
    route("reset-password", "routes/reset-password.tsx"),
  ]),
  route("logout", "routes/logout.tsx"),
  route("verify/:token", "routes/verify.tsx"),
  route("create-connection-request", "routes/create-connection-request.tsx"),
  route("get-connection-request", "routes/get-connection-request.tsx"),
  route("mark-requests-read", "routes/mark-requests-read.tsx"),
] satisfies RouteConfig;
