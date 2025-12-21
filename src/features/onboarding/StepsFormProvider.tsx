import {
  userProfileInitialData,
  type UserProfileData,
} from "@/types/authTypes";
import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

type StepsFormContextData = {
  formData: UserProfileData;
  setFormData: Dispatch<SetStateAction<UserProfileData>>;
  handleBack: () => void;
  handleNext: () => void;
  switchCurrentStep: (newStep: number) => void;
  currentStep: number;
  direction: number;
  // setCurrentStep: Dispatch<SetStateAction<number>>;
};

const stepsFormInitialValue = {
  formData: userProfileInitialData,
  setFormData: () => {},
  handleBack: () => {},
  handleNext: () => {},
  switchCurrentStep: () => {},
  currentStep: 1,
  direction: 1, // used for controlling animation if we are going back or forward
  // setCurrentStep: () => {},
};

const StepsFormContext = createContext<StepsFormContextData>(
  stepsFormInitialValue,
);

const StepsFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState(userProfileInitialData);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [direction, setDirection] = useState<number>(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setDirection(-1);
    setCurrentStep((prev) => prev - 1);
  };

  const switchCurrentStep = (newStep: number) => {
    setCurrentStep(newStep);
  };

  return (
    <StepsFormContext
      value={{
        formData,
        setFormData,
        handleBack,
        handleNext,
        currentStep,
        direction,
        switchCurrentStep,
      }}
    >
      {children}
    </StepsFormContext>
  );
};

export { StepsFormProvider, StepsFormContext };
