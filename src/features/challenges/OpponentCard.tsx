import { memo } from "react";
// components
import Typography from "@/components/text/Typography";
import Chip from "@/components/ui/Chip";
// types
import type { UserProfileData } from "@/types/authTypes";
// utils
import { calculateAge } from "@/utils/common";
import ProfileAvatar from "@/components/ui/ProfileAvatar";

type OpponentCardProps = {
  selectedOpponent: UserProfileData | null;
};

const OpponentCard = memo(({ selectedOpponent }: OpponentCardProps) => {
  return (
    <div className="mt-0.5">
      <div
        className={`flex h-full flex-col items-center justify-center gap-5 px-6`}
      >
        {/* Profile image container */}
        <div className="group relative">
          <ProfileAvatar
            imageUrl={selectedOpponent?.profileImage}
            gender={selectedOpponent?.gender}
          />
        </div>

        {/* First name and last name container */}
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

        {/* Basic stats container */}
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

        {/* Opponent chips info */}
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
