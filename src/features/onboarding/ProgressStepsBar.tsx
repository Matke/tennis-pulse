// icons
import { TbListDetails } from "react-icons/tb";
import { MdSportsTennis } from "react-icons/md";
import { FaFlagCheckered } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
// types
import type { StepsBarItemData } from "@/features/onboarding/ProgressStepsBarItem";
import ProgressStepsBarItem from "@/features/onboarding/ProgressStepsBarItem";

const stepsData: Omit<StepsBarItemData, "position">[] = [
  {
    stepTitle: "About me",
    icon: <TbListDetails className="text-tp-card-back h-5 w-5" />,
  },
  {
    stepTitle: "Bio",
    icon: <FaPerson className="text-tp-card-back h-5 w-5" />,
  },
  {
    stepTitle: "Playstyle",
    icon: <MdSportsTennis className="text-tp-card-back h-5 w-5" />,
  },
  {
    stepTitle: "Finish",
    icon: <FaFlagCheckered className="text-tp-card-back h-5 w-5" />,
    lastStep: true,
  },
];

const ProgressStepsBar = () => {
  return (
    <ol className="flex w-full items-center text-xs font-medium text-gray-900 sm:text-base">
      {stepsData.map(
        (step: Omit<StepsBarItemData, "position">, index: number) => (
          <ProgressStepsBarItem
            key={index}
            stepTitle={step.stepTitle}
            icon={step.icon}
            lastStep={step.lastStep}
            position={index}
          />
        ),
      )}
    </ol>
  );
};

export default ProgressStepsBar;
