import { memo, useMemo } from "react";
// components
import Typography from "@/components/text/Typography";
import Chip from "@/components/ui/Chip";
import FemaleProfileIcon from "@/components/ui/FemaleProfileIcon";
import MaleProfileIcon from "@/components/ui/MaleProfileIcon";
// types
import type { UserProfileData } from "@/types/authTypes";
// utils
import { calculateAge } from "@/utils/common";

type OpponentCardProps = {
  selectedOpponent: UserProfileData | null;
};

const OpponentCard = memo(({ selectedOpponent }: OpponentCardProps) => {
  const genderIcon = useMemo(() => {
    return selectedOpponent?.gender === "male" ? (
      <MaleProfileIcon />
    ) : (
      <FemaleProfileIcon />
    );
  }, [selectedOpponent?.gender]);

  return (
    <div className="mt-0.5">
      <div
        className={`flex h-full flex-col items-center justify-center gap-5 px-6`}
      >
        <div className="group relative">
          <div className="animate-tilt absolute -inset-0.5 rounded-full bg-linear-to-r from-orange-600 to-yellow-200 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
          <div className="relative">
            {selectedOpponent?.profileImage ? (
              <img
                src={selectedOpponent.profileImage}
                className="h-32 w-32 scale-110 rotate-6 transform rounded-full object-cover transition-all duration-500"
                alt="Profile"
              />
            ) : (
              <div className="h-32 w-32 scale-110 transform rounded-full mask-b-from-100% object-cover transition-all duration-500">
                {genderIcon}
              </div>
            )}
          </div>
        </div>

        {selectedOpponent && (
          <div className="flex flex-row items-center justify-center gap-2">
            <span
              className={`fi fi-${selectedOpponent.nationality.toLocaleLowerCase()}`}
              style={{
                backgroundSize: "contain",
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                width: "40px",
                height: "40px",
              }}
            ></span>
            <Typography variant="subtitle">
              {selectedOpponent?.firstName} {selectedOpponent?.lastName}
            </Typography>
          </div>
        )}

        {selectedOpponent && (
          <div className={`flex w-full justify-center gap-x-7`}>
            <div className="transform text-center transition-all duration-300 hover:scale-110">
              <p className="bg-linear-to-l from-yellow-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent">
                {selectedOpponent.nationality.toLocaleUpperCase() || "?"}
              </p>
              <p className="text-xs text-gray-400">COUNTRY</p>
            </div>
            <div className="transform text-center transition-all duration-300 hover:scale-110">
              <p className="bg-linear-to-r from-yellow-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent">
                {selectedOpponent?.dateOfBirth
                  ? calculateAge(selectedOpponent?.dateOfBirth)
                  : "?"}
              </p>
              <p className="text-xs text-gray-400">AGE</p>
            </div>
            <div className="transform text-center transition-all duration-300 hover:scale-110">
              <p className="bg-linear-to-l from-yellow-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent">
                {selectedOpponent?.skillLevel?.toFixed(1) || "?"}
              </p>
              <p className="text-xs text-gray-400">UTR Rating</p>
            </div>
          </div>
        )}

        {selectedOpponent && (
          <div className="space-x-2">
            <Chip
              label={selectedOpponent.userName}
              chipSize="medium"
              tooltipId="username_opponent"
              tooltipContent="Opponent username"
              tooltipPlacement="left"
              themeColor="warning"
            />
            <Chip
              label={`${selectedOpponent?.height}cm`}
              chipSize="medium"
              themeColor="warning"
            />
            <Chip
              label={`${selectedOpponent?.weight}kg`}
              chipSize="medium"
              themeColor="warning"
            />
          </div>
        )}
      </div>
    </div>
  );
});
export default OpponentCard;
