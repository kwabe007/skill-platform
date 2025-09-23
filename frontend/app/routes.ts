import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/home.tsx"),
  route(
    "startup-offerings/:skillId",
    "routes/startup-offerings/startup-offerings-route.tsx",
  ),
  route("login", "routes/login.tsx"),
  route("signup", "routes/signup.tsx"),
] satisfies RouteConfig;
