// components
import Button from "@/components/buttons/Button";
import PulseLogo from "@/components/ui/PulseLogo";
import ActiveForm from "@/features/onboarding/ActiveForm";
import ProgressStepsBar from "@/features/onboarding/ProgressStepsBar";
// context
import { useStepsForm } from "@/features/onboarding/useStepsForm";
// icons
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const Welcome = () => {
  const { currentStep, handleBack, handleNext } = useStepsForm();

  return (
    <div className="flex h-full w-full flex-col items-center justify-between">
      {/* for mobile view */}
      <PulseLogo className="block py-4 sm:hidden md:hidden" />

      {/* Form current progress */}
      <header className="text-tp-typography flex w-full flex-1 items-start justify-center">
        <ProgressStepsBar />
      </header>

      {/* Form section */}
      <section className="flex-1">
        <ActiveForm />
      </section>

      {/* Form control */}
      <footer className="flex w-full flex-1 items-end justify-between">
        <Button
          label="Skip"
          buttonSize="base"
          themeColor="blank"
          className="bg-charcoal-800 hover:bg-charcoal-500 mt-3 scale-100 rounded-full transition-all duration-500 hover:scale-103 md:mt-0"
        />
        <div className="flex gap-2">
          {currentStep !== 1 && (
            <Button
              onClick={handleBack}
              label="Back"
              buttonSize="base"
              themeColor="secondary"
              fullWidth
              disabled={currentStep === 1}
              icon={<FaCircleArrowLeft className="h-5 w-5" />}
            />
          )}
          <Button
            onClick={handleNext}
            label="Next"
            buttonSize="base"
            fullWidth
            icon={<FaCircleArrowRight className="h-5 w-5" />}
            iconPosition="right"
          />
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
