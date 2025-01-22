import React from "react";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../schemas/signUpSchema";
import Input from "../../components/Input";
import { AtSign, CircleUserRound, KeyRound } from "lucide-react";
import PasswordStrengthMeter from "../../components/PasswordStrengthMeter";
import Button from "../../components/Button";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const passwordValue = watch("password", "");

  const onSubmitHandler = (data) => {
    reset();
  };
  return (
    <AuthLayout
      headText="Create Account"
      message="Already have an account?"
      linkText="Login"
      link="/login"
    >
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Input
          icon={CircleUserRound}
          type="text"
          placeholder="Full Name"
          error={errors.name?.message}
          {...register("name")}
        />
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
          messageHide
          {...register("password")}
        />
        <PasswordStrengthMeter password={passwordValue} />
        <Button type="submit" text="Sign Up" />
      </form>
    </AuthLayout>
  );
};

export default Signup;
