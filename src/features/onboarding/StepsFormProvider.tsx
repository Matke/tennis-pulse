import {
  checkUsernameAvailability,
  editUserProfile,
} from "@/services/apiProfile";
import { useAuth } from "@/store/useAuth";
import {
  userProfileInitialData,
  type UserProfileData,
  type UserProfileFormData,
} from "@/types/authTypes";
import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { toast } from "react-hot-toast";

type StepsFormContextData = {
  formData: UserProfileFormData;
  setFormData: Dispatch<SetStateAction<UserProfileFormData>>;
  handleBack: () => void;
  handleNext: () => void;
  processStepFormData: (currentStepData: Partial<UserProfileFormData>) => void;
  switchCurrentStep: (newStep: number) => void;
  currentStep: number;
  direction: number;
  imageUrl: string | null;
  handleProfileImageSet: (image: string | null) => void;
  maxSteps: number;
  isAnimationRunning: boolean;
  isEditingProfile: boolean;
  editProfile: () => Promise<UserProfileData | null>;
  checkUsernameUniqueness: (username: string | undefined) => Promise<boolean>;
  setIsAnimationRunning: Dispatch<SetStateAction<boolean>>;
};

const stepsFormInitialValue: StepsFormContextData = {
  formData: userProfileInitialData,
  setFormData: () => {},
  handleBack: () => {},
  handleNext: () => {},
  processStepFormData: () => {},
  switchCurrentStep: () => {},
  currentStep: 1,
  direction: 1,
  imageUrl: null,
  handleProfileImageSet: () => {},
  maxSteps: 4,
  isAnimationRunning: false,
  isEditingProfile: false,
  editProfile: async () => null,
  checkUsernameUniqueness: async () => true,
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
  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(
    stepsFormInitialValue.isEditingProfile,
  );
  const [imageUrl, setImageUrl] = useState<string | null>(null); // for UI
  const maxSteps = stepsFormInitialValue.maxSteps;

  // user data
  const { user, setUserProfile } = useAuth();
  const userId = user?.id;

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

  const processStepFormData = (
    currentStepData: Partial<UserProfileFormData>,
  ) => {
    setFormData((prevStepFormData: UserProfileFormData) => ({
      ...prevStepFormData,
      ...currentStepData,
    }));
  };

  const editProfile = async () => {
    // cannot submit if form change animation is still runing
    if (isAnimationRunning) return null;

    setIsEditingProfile(true);
    try {
      const updatedProfileData: UserProfileData = await editUserProfile(
        formData,
        userId,
      );
      console.log(updatedProfileData);

      setUserProfile(updatedProfileData);

      toast.success("Profile successfully created!");
      return updatedProfileData;
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
      return null;
    } finally {
      setIsEditingProfile(false);
    }
  };

  const checkUsernameUniqueness = async (username: string | undefined) => {
    if (!username || username.length < 5) return true; // skip check if empty
    setIsEditingProfile(true);
    try {
      const isUsernameAvailable = await checkUsernameAvailability(username);

      return isUsernameAvailable;
    } catch (error) {
      console.error("Username check error", error);
      return false;
    } finally {
      setIsEditingProfile(false);
    }
  };

  const handleProfileImageSet = (image: string | null) => {
    setImageUrl(image);
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
        processStepFormData,
        currentStep,
        direction,
        switchCurrentStep,
        imageUrl,
        handleProfileImageSet,
        maxSteps,
        isAnimationRunning,
        isEditingProfile,
        editProfile,
        checkUsernameUniqueness,
        setIsAnimationRunning,
      }}
    >
      {children}
    </StepsFormContext>
  );
};

export { StepsFormProvider, StepsFormContext };
