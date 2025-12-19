import { useStepsForm } from "@/features/onboarding/useStepsForm";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export type StepsBarItemData = {
  stepTitle: string;
  icon: React.ReactNode;
  lastStep?: boolean;
  position: number;
};

const ProgressStepsBarItem = ({
  stepTitle,
  icon,
  lastStep,
  position,
}: StepsBarItemData) => {
  const { currentStep } = useStepsForm();

  const backgroundCondition = position < currentStep;
  const iconConditon = currentStep - 1 > position;

  if (lastStep)
    return (
      <li className="relative flex text-gray-900">
        <div className="z-10">
          <span
            className={`${backgroundCondition ? "bg-tp-primary border-tp-primary" : "bg-charcoal-800 border-charcoal-800"} mb-3 flex items-center justify-center rounded-full border-2 text-sm lg:h-10 lg:w-10`}
          >
            {icon}
          </span>
          <span className="text-tp-typography/50">{stepTitle}</span>
        </div>
      </li>
    );

  return (
    <li
      className={`${
        backgroundCondition ? "after:bg-tp-primary" : "after:bg-charcoal-800"
      } text-tp-typography-secondary relative flex w-full after:absolute after:top-3 after:left-4 after:inline-block after:h-0.5 after:w-full after:content-[''] lg:after:top-5`}
    >
      <div className="z-10">
        <span
          className={`${
            position < currentStep ? "bg-tp-primary" : "bg-charcoal-800"
          } mb-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-transparent text-sm lg:h-10 lg:w-10`}
        >
          {iconConditon ? (
            <IoIosCheckmarkCircleOutline className="text-tp-card-back h-5 w-5" />
          ) : (
            icon
          )}
        </span>
        <span className="text-tp-typography">{stepTitle}</span>
      </div>
    </li>
  );
};

export default ProgressStepsBarItem;
