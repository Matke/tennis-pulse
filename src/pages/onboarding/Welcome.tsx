import { useState } from "react";
// components
import Button from "@/components/buttons/Button";
import PulseLogo from "@/components/ui/PulseLogo";
import ActiveForm from "@/features/onboarding/ActiveForm";
import ProgressStepsBar from "@/features/onboarding/ProgressStepsBar";
import CropModal from "@/components/modals/CropModal";
// hooks
import { useStepsForm } from "@/features/onboarding/useStepsForm";
// icons
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const Welcome = () => {
  const {
    currentStep,
    handleBack,
    maxSteps,
    isAnimationRunning,
    isEditingProfile,
  } = useStepsForm();

  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState<boolean>(true);

  return (
    <div className="flex h-full w-full flex-col items-center justify-between">
      {/* for mobile view */}
      <PulseLogo className="block py-4 sm:hidden md:hidden" />

      {/* Form current progress */}
      <header className="text-tp-typography flex w-full flex-1 items-start justify-center">
        <ProgressStepsBar />
      </header>

      {/* Form section */}
      <section className="h-full w-full flex-1">
        <ActiveForm />
      </section>

      {/* Form control */}
      <footer className="flex w-full flex-1 items-end justify-between">
        <Button
          onClick={handleBack}
          label="Back"
          buttonSize="base"
          themeColor="secondary"
          disabled={isAnimationRunning || currentStep === 1 || isEditingProfile}
          icon={<FaCircleArrowLeft className="h-5 w-5" />}
        />

        <Button
          type="submit"
          formId="onboarding-form" // this will trigger form submission
          label={currentStep === maxSteps ? "Finish" : "Next"}
          disabled={isAnimationRunning || isEditingProfile}
          isLoading={isEditingProfile}
          buttonSize="base"
          icon={<FaCircleArrowRight className="h-5 w-5" />}
          iconPosition="right"
        />
      </footer>

      {/* modal on page render */}
      {isWelcomeModalOpen && (
        <CropModal
          title="Welcome to Tennis Pulse!"
          description="We're pleased to have you onboard! Your tennis journey begins here. Whether you are total beginner or experienced player this app is designed to level up your game. "
          open={isWelcomeModalOpen}
          onClose={() => setIsWelcomeModalOpen(false)} // when clicked outside of modal
          buttons={[
            {
              label: "Procced",
              themeColor: "tertiary",
              buttonSize: "large",
              className: "w-full",
              icon: <FaCircleArrowRight className="h-5 w-5" />,
              iconPosition: "right",
              onClick: () => setIsWelcomeModalOpen(false),
              uppercaseLabel: true,
            },
          ]}
        ></CropModal>
      )}
    </div>
  );
};

export default Welcome;
