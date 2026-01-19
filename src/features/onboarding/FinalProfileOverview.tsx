// components
import Chip from "@/components/ui/Chip";
import type { UserProfileData, UserProfileFormData } from "@/types/authTypes";
// icons
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { FaCrown } from "react-icons/fa";
import { calculateAge } from "@/utils/common";
import { useStepsForm } from "@/features/onboarding/useStepsForm";
import MaleProfileIcon from "@/components/ui/MaleProfileIcon";
import FemaleProfileIcon from "@/components/ui/FemaleProfileIcon";
import FillingLoader from "@/components/loaders/FillingLoader";

const bgColors = [
  "bg-tp-primary",
  "bg-teal-500",
  "bg-tp-secondary",
  "bg-tp-tertiary",
  "bg-tp-primary",
  "bg-tp-warning",
  "bg-yellow-500",
];

type FinalProfileOverviewProps = {
  chips: { label: keyof UserProfileData; value: string | number }[];
  formData: UserProfileFormData;
};

const FinalProfileOverview = ({
  chips,
  formData,
}: FinalProfileOverviewProps) => {
  const { imageUrl, isEditingProfile } = useStepsForm();

  const {
    userName,
    firstName,
    lastName,
    bio,
    gender,
    skillLevel,
    nationality,
    dateOfBirth,
  } = formData;

  // if there is no profile image,svg icon will be selected based on gender
  const genderProfileIcon =
    gender === "male" ? <MaleProfileIcon /> : <FemaleProfileIcon />;

  return (
    <div className="flex items-center justify-center opacity-100 select-none">
      <div className="group relative">
        {/* with absolute inset-0 position container across the parent relative div */}
        {/* with flex center content inside div */}
        {isEditingProfile && (
          <div className="absolute inset-0 z-100 flex items-center justify-center opacity-100 backdrop-blur-xs">
            <FillingLoader text="Creating your profile" />
          </div>
        )}
        {/* Shadow for profile card, adds animation for image (tilt) */}
        <div className="animate-tilt absolute -inset-1 rounded-2xl bg-linear-to-r from-orange-600/25 to-yellow-200/50 py-8 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>

        {/* Section - Profile image, username, flag, gender, bio */}
        <div className="bg-tp-card-back relative grid grid-cols-2 justify-center rounded-xl px-1 py-8 leading-none backdrop-blur-xl">
          <div className="flex flex-col items-center justify-center">
            {/* Profile image  container */}
            <div className="group relative">
              <div className="animate-tilt absolute -inset-0.5 rounded-full bg-linear-to-r from-orange-600 to-yellow-200 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              <div className="relative">
                {/* Profile image part */}
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    className="h-32 w-32 transform rounded-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    alt="Profile"
                  />
                ) : (
                  <div className="h-32 w-32 transform rounded-full mask-b-from-100% object-cover transition-all duration-500 group-hover:scale-110">
                    {genderProfileIcon}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-x-2">
                <h2 className="bg-linear-to-r from-orange-500 to-yellow-500 bg-clip-text text-2xl font-bold whitespace-nowrap text-transparent">
                  {`${firstName || "-"} ${lastName}`}
                </h2>
                {/* Flag */}
                <span
                  className={`fi fi-${nationality.toLocaleLowerCase()} mt-1`}
                ></span>
              </div>
              {/* Username and Gender */}
              <div className="flex justify-center gap-1">
                <span className="text-tp-secondary/50 mt-1 font-medium">
                  {userName || "Krokster237"}
                </span>
                {gender === "male" && (
                  <IoMdMale className="text-tp-typography h-6 w-6" />
                )}
                {gender === "female" && (
                  <IoMdFemale className="text-tp-typography h-6 w-6 rotate-45" />
                )}
              </div>
              <p className="text-tp-typography mt-2 text-sm">
                {bio.trim().split(" ").slice(0, 15).join(" ").concat("...") ||
                  "-"}
              </p>
            </div>
          </div>

          {/* Section 2 - country, age, utr rating and chips */}
          <div>
            <div className="mt-6 flex w-full justify-center gap-x-7">
              <div className="transform text-center transition-all duration-300 hover:scale-110">
                <p className="bg-linear-to-l from-yellow-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent">
                  {nationality.toLocaleUpperCase()}
                </p>
                <p className="text-xs text-gray-400">COUNTRY</p>
              </div>
              <div className="transform text-center transition-all duration-300 hover:scale-110">
                <p className="bg-linear-to-r from-yellow-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent">
                  {calculateAge(dateOfBirth)}
                </p>
                <p className="text-xs text-gray-400">AGE</p>
              </div>
              <div className="transform text-center transition-all duration-300 hover:scale-110">
                <p className="bg-linear-to-l from-yellow-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent">
                  {skillLevel.toFixed(1)}
                </p>
                <p className="text-xs text-gray-400">UTR Rating</p>
              </div>
            </div>

            {/* Chips  */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {chips.map((singleChip, index: number) => {
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

export default FinalProfileOverview;
