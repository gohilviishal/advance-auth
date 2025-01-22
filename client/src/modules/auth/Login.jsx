import React from "react";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import { loginSchema } from "../../schemas/signUpSchema";
import Input from "../../components/Input";
import { AtSign, KeyRound } from "lucide-react";
import Button from "../../components/Button";
import { useCommonFormHandler } from "../../hooks/useCommonFormHandler";

const Login = () => {
  const { register, errors, onSubmit } = useCommonFormHandler(loginSchema);

  const handleLogin = (data) => {
    console.log("Login data submitted:", data);
    // Add your login logic here
  };

  return (
    <AuthLayout
      headText="Welcome Back"
      message="Don't have an account?"
      link="/signup"
      linkText="Sign up"
    >
      <form onSubmit={onSubmit(handleLogin)}>
        <Input
          icon={AtSign}
          type="email"
          placeholder="Email Address"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          icon={KeyRound}
          type="password"
          placeholder="Password"
          error={errors.password?.message}
          {...register("password")}
        />
        <Button type="submit" text="Login" />
      </form>
    </AuthLayout>
  );
};

export default Login;
