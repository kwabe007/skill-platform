import { useRouteLoaderData } from "react-router";
import type { User } from "@payload-types";

export const PLATFORM_NAME = "Skill Platform";

/**
 * Joins a base URL with one or more path segments.
 *
 * @param base - The base URL (e.g., "https://api.example.com/")
 * @param paths - One or more path segments (e.g., "users", "123")
 * @returns The combined URL (e.g., "https://api.example.com/users/123")
 */
export function buildUrl(base: string, ...paths: string[]): string {
  // Remove trailing slash from base
  const normalizedBase = base.replace(/\/+$/, "");

  // Clean up each path segment
  const normalizedPaths = paths.map((path) => path.replace(/^\/+|\/+$/g, ""));

  return [normalizedBase, ...normalizedPaths].join("/");
}

export function useOptionalUser() {
  const data = useRouteLoaderData("root");
  if (data && "user" in data && typeof data.user === "object") {
    return data.user as User;
  }
  return null;
}
