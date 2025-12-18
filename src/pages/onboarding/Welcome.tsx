// components
import Button from "@/components/buttons/Button";
import Loader from "@/components/loaders/Loader";
import PersonalDetailsForm from "@/features/onboarding/steps/PersonalDetailsForm";
// hooks
import { useAuth } from "@/store/useAuth";
// framer
import { motion } from "framer-motion";
// icons
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const Welcome = () => {
  const { user, userProfile, isLoading } = useAuth();

  if (isLoading) return <Loader size={190} borderSize={190} />;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        scale: { type: "spring", visualDuration: 0.1, bounce: 0.02 },
      }}
      className="flex h-full w-full flex-col items-center justify-between"
    >
      {/* Form current progress */}
      <header className="text-tp-typography flex w-full flex-1 items-center justify-center">
        Progress steps bar
      </header>

      {/* Form section */}
      <section className="flex-1">
        <PersonalDetailsForm />
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
          <Button
            label="Back"
            buttonSize="large"
            themeColor="secondary"
            fullWidth
            icon={<FaCircleArrowLeft className="h-5 w-5" />}
          />
          <Button
            label="Next"
            buttonSize="large"
            fullWidth
            icon={<FaCircleArrowRight className="h-5 w-5" />}
            iconPosition="right"
          />
        </div>
      </footer>
    </motion.div>
  );
};

export default Welcome;
