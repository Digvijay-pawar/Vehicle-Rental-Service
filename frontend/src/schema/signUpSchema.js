import { z } from "zod";

const signUpSchema = z
  .object({
    fullName: z
      .string()
      .min(1, "Full Name is required")
      .max(50, "Full Name must not exceed 50 characters"),
    email: z
      .string()
      .email("Invalid email format")
      .min(1, "Email is required"),
    phoneNumber: z
      .string()
      .regex(/^\d{10}$/, "Mobile Number must be exactly 10 digits"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .max(20, "Password must not exceed 20 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
  });

export default signUpSchema;
