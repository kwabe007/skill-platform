import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/home.tsx"),
  route("skills/:skillId", "routes/skill-detail/skill-detail-route.tsx"),
] satisfies RouteConfig;
