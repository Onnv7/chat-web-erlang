import { z } from "zod";

export const registerSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(6, { message: "Please fill in this field" }),
    password: z
      .string()
      .trim()
      .min(6, { message: "Password at least 6 characters" }),
    confirmPassword: z
      .string()
      .trim()
      .min(6, { message: "Password at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });
