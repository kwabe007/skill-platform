import { z } from "zod";
import type { GetConnectionRequestsQuery } from "~/graphql/graphql";

const nonEmptyStringSchema = z.string().min(1, "This field is required.");

export const signupSchema = z.object({
  fullName: nonEmptyStringSchema,
  email: nonEmptyStringSchema,
  password: z.string().min(6, "Password should be at least 6 characters."),
});
export type SignupData = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
  email: nonEmptyStringSchema,
  password: nonEmptyStringSchema,
});
export type LoginData = z.infer<typeof loginSchema>;

export const editUserSchema = z.object({
  fullName: z.string(),
  company: z
    .object({
      name: z.string().optional(),
      description: z
        .string()
        .max(500, "Company description needs to be max 500 characters")
        .optional(),
    })
    .optional(),
  offeredSkills: nonEmptyStringSchema.array(),
  neededSkills: nonEmptyStringSchema.array(),
});
export type EditUserData = z.infer<typeof editUserSchema>;

export const requestConnectionSchema = z.object({
  message: z.string().min(1),
  receiver: z.coerce.number(),
});
export type RequestConnectionData = z.infer<typeof requestConnectionSchema>;

export const getConnectionRequestSchema = z.object({
  sender: z.coerce.number(),
  receiver: z.coerce.number(),
});
export type GetConnectionRequestData = z.infer<
  typeof getConnectionRequestSchema
>;

export type GetConnectionRequestsQueryData = NonNullable<
  GetConnectionRequestsQuery["ConnectionRequests"]
>["docs"][number];
