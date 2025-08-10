"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button, PinInput } from "@/components/ui";
import { PinInputProps } from "@mantine/core";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  checkEmailSchema,
  CheckEmailSchema,
} from "@/features/onboarding-login/validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import classes from "./styles.module.css";


const pinInputSchema = checkEmailSchema.pick({
  pinInput: true,
});

const fieldProps = {
  size: "lg",
  variant: "filled",
  radius: "md",
  name: "pinInput"
} as const;

export const CheckEmailInput: React.FC<PinInputProps> = () => {
  const {
    handleSubmit,
    register,
    // formState: { errors }
  } = useForm<CheckEmailSchema>({
    resolver: zodResolver(pinInputSchema),
    mode: "onChange",
    defaultValues: {
      pinInput: ""
    }
  });

  const router = useRouter();

  const submitHandler: SubmitHandler<CheckEmailSchema> = (data: CheckEmailSchema) => {
    console.log(data)
    router.push("/");
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
        <PinInput
          placeholder="-"
          {...register("pinInput")}
          {...fieldProps}
          // error={errors.pinInput?.message}
        />

        <Button 
        type="submit"
        color="primary.5"
        {...fieldProps}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export const CheckEmail = () => {
  return <CheckEmailInput />;
};
