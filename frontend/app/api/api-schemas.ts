import { z } from "zod";

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
      description: z.string().optional(),
    })
    .optional(),
  offeredSkills: nonEmptyStringSchema.array().optional(),
  neededSkills: nonEmptyStringSchema.array().optional(),
});
export type EditUserData = z.infer<typeof editUserSchema>;
