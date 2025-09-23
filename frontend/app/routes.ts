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
      "startup-offerings/:skillId",
      "routes/startup-offerings/startup-offerings-route.tsx",
    ),
  ]),
  layout("routes/footer-only-layout.tsx", [
    route("login", "routes/login.tsx"),
    route("signup", "routes/signup.tsx"),
  ]),
] satisfies RouteConfig;
