import FinalStepForm from "@/features/onboarding/steps/FinalStepForm";
import PersonalDetailsForm from "@/features/onboarding/steps/PersonalDetailsForm";
import PlayerBackgroundForm from "@/features/onboarding/steps/PlayerBackgroundForm";
import PlayStyleForm from "@/features/onboarding/steps/PlayStyleForm";
import { useStepsForm } from "@/features/onboarding/useStepsForm";
import { AnimatePresence, motion } from "framer-motion";

const ActiveForm = () => {
  // direction for animation whether it should slide from left or right
  const { currentStep, direction, setIsAnimationRunning } = useStepsForm();

  const renderCurrentForm = () => {
    switch (currentStep) {
      case 1:
        return <PersonalDetailsForm />;
      case 2:
        return <PlayerBackgroundForm />;
      case 3:
        return <PlayStyleForm />;
      case 4:
        return <FinalStepForm />;
      default:
        return null; //TODO: should be replaced with error style form
    }
  };

  return (
    // upper div will remove overflow-scroll which may appear when animation is running
    <div className="relative">
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={currentStep} // triggers animation on step change
          initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
          onAnimationStart={() => setIsAnimationRunning(true)}
          onAnimationComplete={() => setIsAnimationRunning(false)}
          transition={{
            type: "tween",
            duration: 0.3,
            // stiffness: 10,
            // damping: 150,
          }}
          className="w-full"
        >
          {renderCurrentForm()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ActiveForm;
