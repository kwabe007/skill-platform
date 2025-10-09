import { useRouteLoaderData } from "react-router";
import type { User } from "@payload-types";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import invariant from "tiny-invariant";

export const PLATFORM_NAME = "Startup Trade";

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

export function useRequiredUser(): User {
  const user = useOptionalUser();
  invariant(
    user,
    "Tried getting required user but no user found in root loader.",
  );
  return user;
}

export function useSuccessToast(show: boolean, message: string, key = "") {
  const [toastShown, setToastShown] = useState(false);
  useEffect(() => {
    if (show && !toastShown) {
      setTimeout(() => {
        toast.success(message);
        setToastShown(true);
      });
    }
  }, [show, `${message}-${key}`]);
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

/**
 * Formats a Date object into a relative time string (e.g., "3 days ago").
 * If the difference is less than 60 seconds, it returns "a moment ago".
 *
 * @param {Date | number} targetDate The date to format (Date object or timestamp).
 * @returns {string} The relative time string.
 */
export function formatRelativeTime(targetDate: Date | number): string {
  const date = targetDate instanceof Date ? targetDate : new Date(targetDate);
  const now = new Date();
  const locale = "en"; // Hardcoded locale

  // 1. Calculate the time difference in seconds
  const diffInSeconds = (date.getTime() - now.getTime()) / 1000;

  // 2. Implement the "a moment ago" logic for differences < 60 seconds
  const absDiff = Math.abs(diffInSeconds);

  if (absDiff < 60) {
    // Check if the target is in the future or the past
    return diffInSeconds > 0 ? "in a moment" : "a moment ago";
  }

  // 3. Define and iterate through standard relative time units
  const UNITS = [
    { name: "year", seconds: 60 * 60 * 24 * 365 },
    { name: "month", seconds: 60 * 60 * 24 * 30 },
    { name: "week", seconds: 60 * 60 * 24 * 7 },
    { name: "day", seconds: 60 * 60 * 24 },
    { name: "hour", seconds: 60 * 60 },
    { name: "minute", seconds: 60 },
  ] as const;

  type Unit = (typeof UNITS)[number]["name"];

  for (const unit of UNITS) {
    // Calculate the difference in terms of the current unit
    const unitValue = Math.round(diffInSeconds / unit.seconds);

    // Check if the absolute value of the difference is >= 1 unit
    if (Math.abs(unitValue) >= 1) {
      // Use the hardcoded 'en' locale
      const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "always" });
      return rtf.format(unitValue, unit.name as Unit);
    }
  }

  // Fallback for unexpected cases
  return diffInSeconds > 0 ? "in a moment" : "a moment ago";
}

const DEFAULT_REDIRECT = "/";

/**
 * This should be used any time the redirect path is user-provided
 * (Like the query string on our login/signup pages). This avoids
 * open-redirect vulnerabilities.
 * @param {string} to The redirect destination
 * @param {string} defaultRedirect The redirect to use if the to is unsafe.
 * @license MIT
 * @author https://github.com/jacob-ebey
 */
export function safeRedirect(
  to: FormDataEntryValue | string | null | undefined,
  defaultRedirect: string = DEFAULT_REDIRECT,
) {
  if (!to || typeof to !== "string") return defaultRedirect;

  let trimmedTo = to.trim();

  if (
    !trimmedTo.startsWith("/") ||
    trimmedTo.startsWith("//") ||
    trimmedTo.startsWith("/\\") ||
    trimmedTo.includes("..")
  ) {
    return defaultRedirect;
  }

  return trimmedTo;
}

/**
 * Determines whether a given date or timestamp occurred
 * less than a specified duration ago from the current time.
 *
 * @param date - The date or timestamp (in milliseconds) to check.
 * @param minElapsedMs - The minimum amount of time that must have passed (in milliseconds).
 * @returns `true` if less than `minElapsedMs` milliseconds have passed since `date`, otherwise `false`.
 */
export function isWithinMinimumTime(
  date: Date | number | string,
  minElapsedMs: number,
): boolean {
  const timestamp = new Date(date).getTime();
  const now = Date.now();
  const elapsed = now - timestamp;
  return elapsed < minElapsedMs;
}

export function useEnv() {
  const data = useRouteLoaderData("root");
  if (data && "env" in data && typeof data.env === "object") {
    return data.env as Record<string, string>;
  }
  throw new Error(
    "Tried getting env from useEnv but no env found in root loader.",
  );
}
