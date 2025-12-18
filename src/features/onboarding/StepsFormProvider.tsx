import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

type StepsFormContextData = {
  formData: any; // any will be replaced with fully typed out form data
  setFormData: Dispatch<SetStateAction<any>>;
  handleBack: () => void;
  handleNext: () => void;
  currentStep: number;
};

const stepsFormInitialValue = {
  formData: {},
  setFormData: () => {},
  handleBack: () => {},
  handleNext: () => {},
  currentStep: 1,
};

const StepsFormContext = createContext<StepsFormContextData>(
  stepsFormInitialValue,
);

const StepsFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState();
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <StepsFormContext
      value={{ formData, setFormData, handleBack, handleNext, currentStep }}
    >
      {children}
    </StepsFormContext>
  );
};

export { StepsFormProvider, StepsFormContext };
