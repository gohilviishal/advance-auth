import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const useCommonFormHandler = (schema) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (callback) =>
    handleSubmit((data) => {
      callback(data);
      reset();
    });

  return { register, errors, onSubmit };
};
