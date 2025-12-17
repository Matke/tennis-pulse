// framer motion
import { motion } from "framer-motion";
//icons
import { TbAnalyze } from "react-icons/tb";
import { SiFireship } from "react-icons/si";
import { GiThreeFriends } from "react-icons/gi";
import type { FeatureItemProps } from "@/features/onboarding/FeatureItem";
import FeatureItem from "@/features/onboarding/FeatureItem";

const features: FeatureItemProps[] = [
  {
    icon: <TbAnalyze className="text-tp-primary h-9 w-9" />,
    title: "Performance & Progress",
    description:
      "This app is built to help you analyze your game, stay consistent, and reach your next level—on and off the court.",
  },
  {
    icon: <SiFireship className="text-tp-warning h-9 w-9" />,
    title: "Motivational",
    description:
      "Train with purpose, track your performance, and connect with players who love the game as much as you do.",
  },
  {
    icon: <GiThreeFriends className="text-tp-secondary h-9 w-9" />,
    title: "Community-Focused",
    description:
      "Join a growing community of tennis lovers—improve your skills, organize matches, and share the passion that brings us all to the court.",
  },
];

const FeatureList = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex h-full flex-col items-center gap-3 px-6"
    >
      {features.map((singleFeature: FeatureItemProps, index: number) => (
        <FeatureItem
          key={index}
          icon={singleFeature.icon}
          title={singleFeature.title}
          description={singleFeature.description}
        />
      ))}
    </motion.div>
  );
};

export default FeatureList;
