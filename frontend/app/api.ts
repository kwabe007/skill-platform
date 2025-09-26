import { z } from "zod";
import { data } from "react-router";
import type { User } from "@payload-types";
import { buildUrl } from "~/utils";

const BASE_URL = "http://localhost:3000";

const nonEmptyStringSchema = z.string().min(1, "This field is required.");

export const signupSchema = z.object({
  fullName: nonEmptyStringSchema,
  email: nonEmptyStringSchema,
  password: z.string().min(6, "Password should be at least 6 characters."),
});
type SignupData = z.infer<typeof signupSchema>;

type ValidationFieldError = {
  message: string;
  path: string;
};

type ValidationError = {
  name: "ValidationError";
  data: {
    collection?: string;
    errors: ValidationFieldError[];
    global?: string;
    id?: number | string;
  };
  message: string;
};

export async function signUp(signupData: SignupData) {
  const url = buildUrl(BASE_URL, "api/users");
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
  });
  const jsonData = await response.json();
  if ("errors" in jsonData) {
    const error = jsonData.errors[0];
    if (error.name === "ValidationError") {
      const vError = error as ValidationError;
      return {
        error: true as const,
        path: vError.data.errors[0].path,
        message: vError.data.errors[0].message,
      };
    }
    throw data(jsonData, response.status);
  }
  return {
    error: false as const,
    user: jsonData.doc as User,
  };
}

export const loginSchema = z.object({
  email: nonEmptyStringSchema,
  password: nonEmptyStringSchema,
});
type LoginData = z.infer<typeof loginSchema>;

export async function logIn(loginData: LoginData) {
  const url = buildUrl(BASE_URL, "api/users/login");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });
  const jsonData = await response.json();
  if ("errors" in jsonData) {
    throw data({ jsonData }, { status: response.status });
  }
  return jsonData as { user: User; token: string; exp: number };
}

export async function logOut(req: Request) {
  //TODO: Only get the payload-token cookie
  const requestCookie = req.headers.get("Cookie");
  const url = buildUrl(BASE_URL, "api/users/logout?allSessions=false");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(requestCookie ? { Cookie: requestCookie } : {}),
    },
  });

  const jsonData = await response.json();
  if ("errors" in jsonData) {
    throw data({ jsonData }, { status: response.status });
  }
}

export async function getUser(req: Request) {
  //TODO: Only get the payload-token cookie
  const requestCookie = req.headers.get("Cookie");

  const url = buildUrl(BASE_URL, "api/users/me");
  const response = await fetch(url, {
    method: "GET",
    headers: requestCookie ? { Cookie: requestCookie } : undefined,
  });
  const jsonData = await response.json();

  if ("errors" in jsonData) {
    throw data({ jsonData }, { status: response.status });
  }

  return jsonData.user as User | null;
}
