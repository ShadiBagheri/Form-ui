import { useOnboardingStore } from "../store";

export const useLoginForm = () => {
  const email = useOnboardingStore((state) => state.email);
  const password = useOnboardingStore((state) => state.password);

  return {
    email: email || "",
    password: password || "",
  };
};
