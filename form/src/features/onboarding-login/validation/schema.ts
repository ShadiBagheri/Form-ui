import z from "zod";

export const onboardingLoginSchema = z.object({
  email: z
    .string()
    .nonempty("required")
    .email({ message: "Email required" })
    .refine(
      (value) =>
        /^([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)/.test(value),
      { message: "Email invalid" }
    ),
     password: z
    .string()
    .min(8, { message: 'Password required' })
    .refine((value) => /[A-Z]/.test(value), {
      message: 'Password uppercase',
    })
    .refine((value) => /[a-z]/.test(value), {
      message: 'Password lowercase',
    })
    .refine((value) => /[0-9]/.test(value), {
      message: 'Password number',
    })
    .refine((value) => /[^A-Za-z0-9]/.test(value), {
      message: 'Password symbol',
    }),
});

export type OnboardingLoginSchema = z.infer<typeof onboardingLoginSchema>;

