import {
  userProfileInitialData,
  type UserProfileFormData,
} from "@/types/authTypes";
import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

type StepsFormContextData = {
  formData: UserProfileFormData;
  setFormData: Dispatch<SetStateAction<UserProfileFormData>>;
  handleBack: () => void;
  handleNext: () => void;
  switchCurrentStep: (newStep: number) => void;
  currentStep: number;
  direction: number;
  imageUrl: string | null;
  handleProfileImageSet: (image: string | null) => void;
  maxSteps: number;
  isAnimationRunning: boolean;
  setIsAnimationRunning: Dispatch<SetStateAction<boolean>>;
};

const stepsFormInitialValue: StepsFormContextData = {
  formData: userProfileInitialData,
  setFormData: () => {},
  handleBack: () => {},
  handleNext: () => {},
  switchCurrentStep: () => {},
  currentStep: 1,
  direction: 1,
  imageUrl: null,
  handleProfileImageSet: () => {},
  maxSteps: 4,
  isAnimationRunning: false,
  setIsAnimationRunning: () => {},
};

const StepsFormContext = createContext<StepsFormContextData>(
  stepsFormInitialValue,
);

const StepsFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState(userProfileInitialData);
  const [currentStep, setCurrentStep] = useState<number>(
    stepsFormInitialValue.currentStep,
  );
  const [direction, setDirection] = useState<number>(
    stepsFormInitialValue.direction,
  ); // used for controlling animation if we are going back or forward
  const [isAnimationRunning, setIsAnimationRunning] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null); // for UI
  const maxSteps = stepsFormInitialValue.maxSteps;

  const handleNext = () => {
    if (currentStep >= maxSteps) return;

    if (isAnimationRunning) return;

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

  const handleProfileImageSet = (image: string | null) => {
    setImageUrl(image);
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
        imageUrl,
        handleProfileImageSet,
        maxSteps,
        isAnimationRunning,
        setIsAnimationRunning,
      }}
    >
      {children}
    </StepsFormContext>
  );
};

export { StepsFormProvider, StepsFormContext };
