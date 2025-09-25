import { z } from "zod";
import { data } from "react-router";
import type { User } from "@payload-types";

const nonEmptyStringSchema = z.string().min(1, "This field is required.");

export const signupSchema = z.object({
  fullName: nonEmptyStringSchema,
  email: nonEmptyStringSchema,
  password: z.string().min(6, "Password should be at least 6 characters."),
});

type SignupData = z.infer<typeof signupSchema>;

export async function signUp(signupData: SignupData) {
  const response = await fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
  });
  const jsonData = await response.json();
  if ("errors" in jsonData) {
    throw data(jsonData, response.status);
  }
  return jsonData.doc as User;
}
