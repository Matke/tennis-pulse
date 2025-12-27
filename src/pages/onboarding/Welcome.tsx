import { useState } from "react";
// components
import Button from "@/components/buttons/Button";
import PulseLogo from "@/components/ui/PulseLogo";
import ActiveForm from "@/features/onboarding/ActiveForm";
import ProgressStepsBar from "@/features/onboarding/ProgressStepsBar";
import CropModal from "@/components/modals/CropModal";
import ConfirmationModal from "@/components/modals/ConfirmationModal";
// hooks
import { useStepsForm } from "@/features/onboarding/useStepsForm";
import { useNavigate } from "react-router";
// icons
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const Welcome = () => {
  const { currentStep, handleBack, maxSteps, isAnimationRunning } =
    useStepsForm();

  // control modal
  const [skipModal, setSkipModal] = useState<boolean>(false);
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState<boolean>(true);

  const navigate = useNavigate();

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
          onClick={() => setSkipModal(true)}
          disabled={isAnimationRunning}
          label="Skip"
          buttonSize="base"
          themeColor="blank"
          className="bg-charcoal-600 hover:bg-charcoal-500 mt-3 scale-100 rounded-full transition-all duration-500 hover:scale-103 md:mt-0"
        />
        <div className="flex gap-2">
          {currentStep !== 1 && (
            <Button
              onClick={handleBack}
              label="Back"
              buttonSize="base"
              themeColor="secondary"
              fullWidth
              disabled={isAnimationRunning}
              icon={<FaCircleArrowLeft className="h-5 w-5" />}
            />
          )}

          <Button
            type="submit"
            // onClick={handleNext}
            label={currentStep === maxSteps ? "Finish" : "Next"}
            disabled={isAnimationRunning}
            buttonSize="base"
            fullWidth
            icon={<FaCircleArrowRight className="h-5 w-5" />}
            iconPosition="right"
            formId="onboarding-form"
          />
        </div>
      </footer>
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

      {/* modals, rendered with createPortal */}
      {skipModal && (
        <ConfirmationModal
          title="Confirm skip"
          description="Your profile helps us tailor things just for you. Skipping is okay - but completing it means a better experience from the start."
          openModal={skipModal}
          onClose={() => setSkipModal(false)}
          onConfirm={() => navigate("/home")}
        />
      )}
    </div>
  );
};

export default Welcome;
