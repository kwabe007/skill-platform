import invariant from "tiny-invariant";

export function truthy(value: string | undefined, message?: string | (() => string)): string {
  invariant(value, message);
  return value;
}

export const PLATFORM_NAME = "Service Exchange";
