import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { OnboardingLoginSchema } from "../validation/schema";

type OnboardingState = Partial<OnboardingLoginSchema> & {
  setData: (data: Partial<OnboardingLoginSchema>) => void;
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      setData: (data) => set(data),
    }),
    {
      name: "onboarding-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
