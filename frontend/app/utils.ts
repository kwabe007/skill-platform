import { useRouteLoaderData } from "react-router";
import type { User } from "@payload-types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

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

export function useSuccessToast(show: boolean, message: string) {
  const [toastShown, setToastShown] = useState(false);
  useEffect(() => {
    if (show && !toastShown) {
      setTimeout(() => {
        toast.success(message);
        setToastShown(true);
      });
    }
  }, [show]);
}

/**
 * Converts a string key (e.g., "company.name", "fullName", "full-name")
 * into a human-readable label.
 *
 * Rules:
 * - Dots (`.`) and dashes (`-`) are converted into spaces.
 * - camelCase and PascalCase are split into separate words.
 * - First word is capitalized, subsequent words are lowercased.
 *
 * @param str - The input string key to format.
 * @returns The formatted, human-readable label.
 *
 * @example
 * keyToLabel("company.name");   // "Company name"
 * keyToLabel("fullName");       // "Full name"
 * keyToLabel("name");           // "Name"
 * keyToLabel("UserProfileID");  // "User profile id"
 * keyToLabel("full-name");      // "Full name"
 */
export function keyToLabel(str: string): string {
  return (
    str
      // Replace dots and dashes with spaces
      .replace(/[.\-]/g, " ")
      // Insert spaces before capital letters (camelCase → camel Case)
      .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
      // Normalize spacing
      .replace(/\s+/g, " ")
      .trim()
      // Capitalize the first word, lowercase the rest
      .replace(/^\w/, (c) => c.toUpperCase())
      .replace(/\b\w/g, (c, i) => (i === 0 ? c : c.toLowerCase()))
  );
}

export function pluralize(
  count: number,
  singular: string,
  plural = singular + "s",
) {
  return `${count} ${count === 1 ? singular : plural}`;
}
