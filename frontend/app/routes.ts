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
    route("edit-profile", "routes/edit-profile.tsx"),
  ]),
  layout("routes/footer-only-layout.tsx", [
    route("login", "routes/login.tsx"),
    route("signup", "routes/signup.tsx"),
  ]),
  route("logout", "routes/logout.tsx"),
  route("verify/:token", "routes/verify.tsx"),
  route("create-connection-request", "routes/create-connection-request.tsx"),
  route("get-connection-request", "routes/get-connection-request.tsx"),
] satisfies RouteConfig;
