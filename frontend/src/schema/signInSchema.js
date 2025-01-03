import { z } from "zod";

const signInSchema = z
  .object({
    email: z
      .string()
      .email("Invalid email format")
      .min(1, "Email is required"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .max(20, "Password must not exceed 20 characters"),
  })

export default signInSchema;
