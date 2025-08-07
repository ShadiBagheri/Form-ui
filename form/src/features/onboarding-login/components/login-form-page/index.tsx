"use client";

import { useRouter } from "next/navigation";
import { Button, PasswordInput, TextInput } from "@/components/ui";
import React, { useCallback } from "react";
import classes from "./styles.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { OnboardingLoginSchema, onboardingLoginSchema } from "../../validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOnboardingStore } from "../../store";
import { FormContainer } from "@/features/form-container";

const loginSchema = onboardingLoginSchema.pick({
  email: true,
  password: true,
});

const fieldProps = {
  size: "md",
  radius: "md",
  variant: "default",
} as const;

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OnboardingLoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const getError = useCallback(
    (name: keyof OnboardingLoginSchema) => {
      const error = errors[name]?.message;
      return error ? error.toLowerCase() : undefined;
    },
    [errors ]
  );
  
  const setData = useOnboardingStore((state) => state.setData);
  const router = useRouter();

  const submitHandler: SubmitHandler<OnboardingLoginSchema> = async (
    data: OnboardingLoginSchema
  ) => {
    setData(data)
    router.push("/onboarding/checkemail")
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
        <TextInput
          label="Email"
          placeholder="Email Address"
          type="email"
          {...fieldProps}
          {...register("email")}
          error={getError("email")}
        />

        <PasswordInput
          label="Password"
          type="password"
          placeholder="Password"
          {...fieldProps}
          {...register("password")}
          error={getError("password")}
        />

        <Button
          type="submit"
          color="primary.2"
          size="lg"
          radius="md"
          className={classes.button}
        >
          Next
        </Button>
      </form>
    </>
  );
};

export const LoginFormPage: React.FC = () => {
  return (
    <FormContainer title="title">
      <LoginForm />
    </FormContainer>
  )
};