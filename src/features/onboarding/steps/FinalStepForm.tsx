import ButtonIcon from "@/components/buttons/ButtonIcon";
import FinalProfileOverview from "@/features/onboarding/FinalProfileOverview";
import { useStepsForm } from "@/features/onboarding/useStepsForm";
import type { UserProfileData } from "@/types/authTypes";
import { MdInfo } from "react-icons/md";

type Keys = {
  [index: string]: string; // index signature
  "one-handed": string;
  "two-handed": string;
  slice: string;
  flat: string;
  topspin: string;
  moonball: string;
  wilson: string;
  width: string;
  height: string;
  left: string;
  right: string;
  4: string;
};

const valueLookupTable: Record<keyof Keys, string> = {
  left: "Left-handed",
  right: "Right-handed",
  "one-handed": "One-handed backhand",
  "two-handed": "Two-handed backhands",
  slice: "Slice master",
  flat: "Flat forehand",
  topspin: "Topspin forehand",
  moonball: "Proud moonballer",
  4: "Strong club player",
};

const FinalStepForm = () => {
  // context and hooks
  const { formData } = useStepsForm();

  // accept keys that only exist in UserProfileData type
  const selectedKeys: (keyof UserProfileData)[] = [
    "dominantHand",
    "backhandType",
    "forehandType",
    "racket",
    "height",
    "weight",
    "skillLevel",
  ];

  // chips with custom content based on what user has selected in previous forms
  const chipsArray = selectedKeys.map((key) => ({
    label: key,
    value: valueLookupTable[formData[key]] || formData[key],
  }));

  return (
    <div className="flex h-full flex-col gap-y-2">
      <div className="z-10 w-fit">
        <ButtonIcon
          icon={<MdInfo className="text-tp-divider h-5 w-5 cursor-pointer" />}
          variant="blank"
          className="w-fit self-start"
          tooltipId="final-profile-card-preview"
          tooltipContent="This is your profile card preview. You can update or change any of this information later from your profile settings."
          tooltipPlacement="right"
        />
      </div>
      <FinalProfileOverview chips={chipsArray} />
    </div>
  );
};

export default FinalStepForm;
