import { use } from "react"; // new react 19
// context
import { StepsFormContext } from "@/features/onboarding/StepsFormProvider";

const useStepsForm = () => {
  const context = use(StepsFormContext);

  if (context === undefined) {
    throw new Error("AuthContext was used outside of context!");
  }

  return context;
};

export { useStepsForm };
