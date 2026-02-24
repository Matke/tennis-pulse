import { useMemo } from "react";
import { useAuth } from "@/store/useAuth";
// components
import ButtonIcon from "@/components/buttons/ButtonIcon";
import Typography from "@/components/text/Typography";
import Chip from "@/components/ui/Chip";
import ProfileAvatar from "@/components/ui/ProfileAvatar";
import type { TooltipPlacement } from "@/components/tooltip/Tooltip";
// icons
import { MdEdit } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { PiListHeartFill } from "react-icons/pi";
// utils
import { motion } from "framer-motion";
import { calculateAge } from "@/utils/common";
// animation variants
import {
  containerVariants,
  itemVariantsX,
  profilePopVariant,
  revealVariant,
} from "@/utils/animationVariants";

type ChallengerActionsData = {
  icon: React.ReactNode;
  tooltipId: string;
  tooltipContent: string;
};

type BasicPlayerInfoChips = {
  label: string;
  tooltipId?: string;
  tooltipContent?: string;
  tooltipPlacement?: TooltipPlacement;
};

// icons
const EDIT_ICON = <MdEdit className="h-5 w-5" />;
const LOCK_ICON = <FaLock className="h-5 w-5" />;
const LIST_HEART_ICON = <PiListHeartFill className="h-5 w-5" />;

const ChallengerView = () => {
  const { userProfile } = useAuth();

  const challengerActions: ChallengerActionsData[] = useMemo(
    () => [
      {
        icon: EDIT_ICON,
        tooltipId: "edit-profile",
        tooltipContent: "Edit your profile",
      },
      {
        icon: LOCK_ICON,
        tooltipId: "private-public",
        tooltipContent:
          "Your profile is private, so it won't appear in challenges or matches searches",
      },
      {
        icon: LIST_HEART_ICON,
        tooltipId: "list-favorite-opponents",
        tooltipContent: "View list of your favorite opponents",
      },
    ],
    [],
  );

  const chipsPlayerInfo: BasicPlayerInfoChips[] = [
    {
      label: userProfile.userName,
      tooltipId: "username",
      tooltipContent: "Your username",
      tooltipPlacement: "left",
    },
    {
      label: `${userProfile?.height}cm`,
    },
    {
      label: `${userProfile?.weight}kg`,
    },
  ];

  return (
    // pseudo element to display VS text in the middle of the border (right side of element)
    <div className="border-tp-divider/20 hover:bg-tp-main-background/70 after:text-tp-typography/50 relative flex h-full w-1/2 cursor-pointer flex-col items-center justify-center border-r border-dashed transition-all duration-300 after:absolute after:-right-2.5 after:z-100 after:bg-transparent after:text-lg after:font-bold after:content-['VS']">
      <div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex h-full flex-col items-center justify-center gap-5 px-6"
        >
          {/* Profile image container */}
          <motion.div variants={profilePopVariant} className="group relative">
            <ProfileAvatar
              imageUrl={userProfile?.profileImage}
              gender={userProfile?.gender}
            />
          </motion.div>

          {/* First name and last name container */}
          <motion.div
            variants={revealVariant}
            className="flex flex-row items-center justify-center gap-2"
          >
            <span
              className={`fi fi-${userProfile?.nationality?.toLocaleLowerCase()}`}
              style={{
                backgroundSize: "contain",
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                width: "40px",
                height: "40px",
              }}
            ></span>
            <Typography variant="subtitle">
              {userProfile.firstName} {userProfile.lastName}
            </Typography>
          </motion.div>

          {/* Basic stats container */}
          <motion.div
            variants={revealVariant}
            className="flex w-full justify-center gap-x-7"
          >
            <div className="transform text-center transition-all duration-300 hover:scale-110">
              <p className="bg-linear-to-l from-yellow-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent">
                {userProfile?.nationality?.toLocaleUpperCase()}
              </p>
              <p className="text-xs text-gray-400">COUNTRY</p>
            </div>
            <div className="transform text-center transition-all duration-300 hover:scale-110">
              <p className="bg-linear-to-r from-yellow-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent">
                {userProfile.dateOfBirth &&
                  calculateAge(userProfile?.dateOfBirth)}
              </p>
              <p className="text-xs text-gray-400">AGE</p>
            </div>
            <div className="transform text-center transition-all duration-300 hover:scale-110">
              <p className="bg-linear-to-l from-yellow-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent">
                {userProfile?.skillLevel?.toFixed(1)}
              </p>
              <p className="text-xs text-gray-400">UTR Rating</p>
            </div>
          </motion.div>

          {/* Challenger info chips */}
          <motion.div variants={itemVariantsX} className="space-x-2">
            {chipsPlayerInfo.map(
              (item: BasicPlayerInfoChips, index: number) => (
                <Chip
                  key={index}
                  label={item.label}
                  chipSize="medium"
                  tooltipId={item.tooltipId}
                  tooltipContent={item.tooltipContent}
                  tooltipPlacement={item.tooltipPlacement}
                />
              ),
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Challenger actions */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-8"
      >
        <motion.div
          variants={containerVariants}
          className="flex items-center gap-3"
        >
          {challengerActions.map((action) => (
            <ButtonIcon
              key={action.tooltipId}
              icon={action.icon}
              variant="outlined"
              className="shadow-tp-primary p-2.5 shadow-sm hover:border-none"
              backgroundColor="bg-tp-card-back"
              borderColor="border-none"
              hoverClass
              rounded
              tooltipId={action.tooltipId}
              tooltipContent={action.tooltipContent}
              tooltipPlacement="top"
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ChallengerView;
