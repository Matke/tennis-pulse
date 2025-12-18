import PersonalDetailsForm from "@/features/onboarding/steps/PersonalDetailsForm";
import PlayerBackgroundForm from "@/features/onboarding/steps/PlayerBackgroundForm";
import PlayStyleForm from "@/features/onboarding/steps/PlayStyleForm";
import { useStepsForm } from "@/features/onboarding/useStepsForm";
import { AnimatePresence, motion } from "framer-motion";

const ActiveForm = () => {
  const { currentStep } = useStepsForm();

  const renderCurrentForm = () => {
    switch (currentStep) {
      case 1:
        return <PersonalDetailsForm />;
      case 2:
        return <PlayerBackgroundForm />;
      case 3:
        return <PlayStyleForm />;
      default:
        return null; // should be replaced with error style form
    }
  };

  // animation on exit and enter
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={currentStep} // Important: triggers animation on step change
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 40,
        }}
        className="w-full"
      >
        {renderCurrentForm()}
      </motion.div>
    </AnimatePresence>
  );
};

export default ActiveForm;
