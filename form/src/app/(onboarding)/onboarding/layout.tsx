import { OnboardingLayout } from "@/layouts/onboarding-layout";
import React from "react";

export default function OnboardingRootLayout ({ children }: { children: React.ReactNode }) {
    return <OnboardingLayout>{children}</OnboardingLayout>
}