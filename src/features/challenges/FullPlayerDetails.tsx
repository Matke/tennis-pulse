import Chip from "@/components/ui/Chip";
import type { UserProfileData } from "@/types/authTypes";
import { calculateAge } from "@/utils/common";
import { FaCrown } from "react-icons/fa";
import { IoMdFemale, IoMdMale } from "react-icons/io";

const bgColors = [
  "bg-tp-primary",
  "bg-teal-500",
  "bg-tp-secondary",
  "bg-tp-tertiary",
  "bg-tp-primary",
  "bg-tp-warning",
  "bg-yellow-500",
];

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

const FullPlayerDetails = ({
  opponentData,
}: {
  opponentData: UserProfileData | null;
}) => {
  if (!opponentData) return null;

  const selectedKeys: (keyof Omit<
    UserProfileData,
    "id" | "profileImage" | "created_at"
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
    value: valueLookupTable[opponentData[key]] || opponentData[key],
  }));

  return (
    <div className="border-tp border-tp-divider/20 flex items-center justify-center border-b border-dashed opacity-100 shadow-black select-none">
      <div className="group relative">
        {/* with absolute inset-0 position container across the parent relative div */}
        {/* with flex center content inside div */}
        {/* Shadow for profile card, adds animation for image (tilt) */}
        <div className="animate-tilt absolute -inset-1 py-8 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>

        {/* Section - Profile image, username, flag, gender, bio */}
        <div className="relative grid grid-cols-2 justify-center rounded-r-xl px-1 py-8 leading-none backdrop-blur-xl">
          <div className="flex flex-col items-center justify-center">
            {/* Profile image  container */}
            <div className="group relative">
              <div className="animate-tilt absolute -inset-0.5 rounded-full bg-linear-to-r from-orange-600 to-yellow-200 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              <div className="relative">
                {/* Profile image part */}
                {opponentData?.profileImage ? (
                  <img
                    src={opponentData?.profileImage}
                    className="h-32 w-32 transform rounded-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    alt="Profile"
                  />
                ) : (
                  <div className="h-32 w-32 transform rounded-full mask-b-from-100% object-cover transition-all duration-500 group-hover:scale-110">
                    {""}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-x-2">
                <h2 className="bg-linear-to-r from-orange-500 to-yellow-500 bg-clip-text text-2xl font-bold whitespace-nowrap text-transparent">
                  {`${opponentData?.firstName || "-"} ${opponentData?.lastName}`}
                </h2>
                {/* Flag */}
                <span
                  className={`fi fi-${opponentData.nationality.toLocaleLowerCase()} mt-1`}
                ></span>
              </div>
              {/* Username and Gender */}
              <div className="flex justify-center gap-1">
                <span className="text-tp-secondary/50 mt-1 font-medium">
                  {opponentData?.userName || "Krokster237"}
                </span>
                {opponentData?.gender === "male" && (
                  <IoMdMale className="text-tp-typography h-6 w-6" />
                )}
                {opponentData?.gender === "female" && (
                  <IoMdFemale className="text-tp-typography h-6 w-6 rotate-45" />
                )}
              </div>
              <p className="text-tp-typography mt-2 text-sm">
                {opponentData?.bio
                  .trim()
                  .split(" ")
                  .slice(0, 15)
                  .join(" ")
                  .concat("...") || "-"}
              </p>
            </div>
          </div>

          {/* Section 2 - country, age, utr rating and chips */}
          <div>
            <div className="mt-6 flex w-full justify-center gap-x-7">
              <div className="transform text-center transition-all duration-300 hover:scale-110">
                <p className="bg-linear-to-l from-yellow-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent">
                  {opponentData?.nationality.toLocaleUpperCase()}
                </p>
                <p className="text-xs text-gray-400">COUNTRY</p>
              </div>
              <div className="transform text-center transition-all duration-300 hover:scale-110">
                <p className="bg-linear-to-r from-yellow-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent">
                  {calculateAge(opponentData?.dateOfBirth)}
                </p>
                <p className="text-xs text-gray-400">AGE</p>
              </div>
              <div className="transform text-center transition-all duration-300 hover:scale-110">
                <p className="bg-linear-to-l from-yellow-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent">
                  {opponentData?.skillLevel.toFixed(1)}
                </p>
                <p className="text-xs text-gray-400">UTR Rating</p>
              </div>
            </div>

            {/* Chips  */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {chipsArray.map((singleChip, index: number) => {
                if (singleChip.value === "" || Number(singleChip.value) === 0) {
                  return null;
                }

                const chipLabel = singleChip.value.toString();
                let icon = null;

                let newChipLabel = chipLabel;

                if (singleChip.label === "weight") {
                  newChipLabel = `${chipLabel}kg`;
                }

                if (singleChip.label === "height") {
                  newChipLabel = `${chipLabel}cm`;
                }

                // insert space before each uppercase letter, label is camelCase
                const result = singleChip.label.replace(/([A-Z])/g, " $1");
                // make first letter uppercase and concat the rest without first lowercase letter
                const tooltipContent =
                  result.charAt(0).toUpperCase() + result.slice(1);

                // special legendary player case with crown
                if (
                  singleChip.label === "skillLevel" &&
                  singleChip.value.toString().includes("Djokovic")
                ) {
                  icon = <FaCrown className="h-3 w-3" />;
                }

                return (
                  <Chip
                    key={singleChip.label}
                    label={newChipLabel}
                    chipSize="medium"
                    customBackgroundColor={bgColors[index]}
                    tooltipId={singleChip.label}
                    tooltipContent={tooltipContent}
                    icon={icon}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPlayerDetails;
