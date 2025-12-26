import ButtonIcon from "@/components/buttons/ButtonIcon";
import FinalProfileOverview from "@/features/onboarding/FinalProfileOverview";
import { useStepsForm } from "@/features/onboarding/useStepsForm";
import type { UserProfileData } from "@/types/authTypes";
import { MdInfo } from "react-icons/md";

type Keys = {
  [index: string | number]: string; // index signature
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
  //TODO: not all values are typed out if user enters weight or height less than 16 it will be some interesting errors, it will pick values from chips and concat them with KG
};

const valueLookupTable: Record<keyof Keys, string> = {
  left: "Left-handed",
  right: "Right-handed",
  "one-handed": "One-handed backhand",
  "two-handed": "Two-handed backhand",
  slice: "Slice master",
  flat: "Flat forehand",
  topspin: "Topspin forehand",
  moonball: "Proud moonballer",
  1: "Total beginner",
  1.5: "Net is scary",
  2: "It's a plane It's a bird It's a moonball",
  2.5: "Moonball maestro",
  3: "Can hit the net",
  3.5: "Struggling beginner",
  4: "Double faulting specialist",
  4.5: "Want to rally?",
  5: "Ball control maniac",
  5.5: "Power and spin, behold!",
  6: "All in footwork",
  6.5: "Consistent serve king",
  7: "Strong club player",
  7.5: "Strategy king",
  8: "Tactically dangerous",
  8.5: "Pressure point king",
  9: "Ace Ace Ace",
  9.5: "Enhanced footwork",
  10: "College ready",
  10.5: "Master of spin and power!",
  11: "Master of technique",
  11.5: "High level player",
  12: "All-court player",
  12.5: "Mind-game King",
  13: "Big game",
  13.5: "Anticipation king",
  14: "World class player",
  14.5: "Elite player",
  15: "Elite pro",
  15.5: "Legendary player",
  16: "I am Novak Djokovic!",
};

const FinalStepForm = () => {
  // context and hooks
  const { formData } = useStepsForm();

  // accept keys that only exist in UserProfileData type, without profile image
  const selectedKeys: (keyof Omit<
    UserProfileData,
    "userId" | "profileImage" | "created_at"
  >)[] = [
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
    <div className="mt-8 flex h-full flex-col -space-y-5">
      <FinalProfileOverview formData={formData} chips={chipsArray} />
      <div className="z-10 w-full">
        <ButtonIcon
          icon={<MdInfo className="text-tp-divider h-5 w-5 cursor-pointer" />}
          variant="blank"
          className="self-start pt-10"
          tooltipId="final-profile-card-preview"
          tooltipContent="This is your profile card preview. You can update or change any of this information later from your profile settings."
          tooltipPlacement="right"
        />
      </div>
    </div>
  );
};

export default FinalStepForm;
