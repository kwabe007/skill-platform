import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/home.tsx"),
  route("skill/:skillId", "routes/skill/skill.tsx"),
] satisfies RouteConfig;
