import * as yup from "yup";

export const userSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long"),
  email: yup
    .string()
    .trim()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

export const verifySchema = yup.object({
  code: yup
    .string()
    .required("Code is required")
    .matches(/^\d{6}$/, "Code must be exactly 6 digits"),
});

export const loginSchema = userSchema.pick(["email", "password"]);

export const forgotPasswordSchema = userSchema.pick(["email"]);

export const resetPasswordSchema = userSchema.pick(["password"]);
