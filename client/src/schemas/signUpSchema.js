import * as yup from "yup";

const passwordCriteria = [
  {
    label: "At least 6 characters",
    test: (value) => value?.length >= 6,
  },
  {
    label: "Contains uppercase letter",
    test: (value) => /[A-Z]/.test(value),
  },
  {
    label: "Contains lowercase letter",
    test: (value) => /[a-z]/.test(value),
  },
  { label: "Contains a number", test: (value) => /\d/.test(value) },
  {
    label: "Contains special character",
    test: (value) => /[^A-Za-z0-9]/.test(value),
  },
];

const passwordValidation = passwordCriteria.reduce(
  (schema, criterion) =>
    schema.test(
      criterion.label,
      `Password must meet the following criteria: ${criterion.label}`,
      criterion.test
    ),
  yup.string().required("Password is required")
);

export const signUpSchema = yup.object({
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
  password: passwordValidation,
});

export const loginSchema = signUpSchema.pick(["email", "password"]);
