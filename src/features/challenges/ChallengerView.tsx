import ButtonIcon from "@/components/buttons/ButtonIcon";
import Typography from "@/components/text/Typography";
import Chip from "@/components/ui/Chip";
import type { UserProfileData } from "@/types/authTypes";
import { calculateAge } from "@/utils/common";
import { MdEdit } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
// import { FaUserEdit } from "react-icons/fa";
// import { FaLockOpen } from "react-icons/fa";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each child
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: -10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const itemVariantsX: Variants = {
  hidden: { x: 10, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const profilePopVariant: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1.0, // Overshoot slightly
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const revealVariant: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1], // Custom cubic-bezier for a "slick" feel
    },
  },
};

const ChallengerView = ({
  userProfile,
}: {
  userProfile: Partial<UserProfileData>;
}) => {
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-8 flex items-center justify-center"
      >
        <motion.div variants={itemVariants}>
          <Typography variant="title" className="font-bold">
            Challenger
          </Typography>
        </motion.div>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-8 flex h-full flex-col items-center justify-start gap-5 px-6"
      >
        <motion.div variants={profilePopVariant} className="group relative">
          <div className="animate-tilt absolute -inset-0.5 rounded-full bg-linear-to-r from-orange-600 to-yellow-200 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
          <div className="relative">
            {/* Profile image part */}
            {userProfile.profileImage ? (
              <img
                src={userProfile.profileImage}
                className="h-32 w-32 scale-110 rotate-6 transform rounded-full object-cover transition-all duration-500"
                alt="Profile"
              />
            ) : (
              <div className="h-32 w-32 transform rounded-full mask-b-from-100% object-cover transition-all duration-500 group-hover:scale-110">
                {""}
              </div>
            )}
          </div>
        </motion.div>

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

        <motion.div variants={itemVariantsX} className="space-x-2">
          <Chip
            label={userProfile.userName ? userProfile?.userName : ""}
            chipSize="medium"
            tooltipId="username"
            tooltipContent="Your username"
            tooltipPlacement="left"
          />
          <Chip
            label={userProfile.height ? `${userProfile?.height}cm` : ""}
            chipSize="medium"
          />
          <Chip
            label={userProfile.weight ? `${userProfile?.weight}kg` : ""}
            chipSize="medium"
          />
        </motion.div>

        {/* TODO: Make it map from array of objects */}
        <motion.div
          variants={revealVariant}
          className="mt-8 flex items-center gap-3"
        >
          <ButtonIcon
            icon={<MdEdit className="h-5 w-5" />}
            variant="outlined"
            className="shadow-tp-primary p-2.5 shadow-sm hover:border-none"
            backgroundColor="bg-tp-card-back"
            borderColor="border-none"
            hoverClass
            rounded
            tooltipId="edit-profile"
            tooltipContent="Edit your profile"
            tooltipPlacement="top"
          />
          <ButtonIcon
            icon={<FaLock className="h-5 w-5" />}
            variant="outlined"
            className="shadow-tp-primary p-2.5 shadow-sm"
            backgroundColor="bg-tp-card-back"
            borderColor="border-none"
            hoverClass
            rounded
            tooltipId="private-public"
            tooltipContent="Your profile is private, so it won't appear in challenges or matches searches"
            tooltipPlacement="top"
          />
          <ButtonIcon
            icon={<FaListAlt className="h-5 w-5" />}
            variant="outlined"
            className="shadow-tp-primary p-2.5 shadow-sm"
            backgroundColor="bg-tp-card-back"
            borderColor="border-none"
            hoverClass
            rounded
            tooltipId="list-challenges"
            tooltipContent="View your list of challenges"
            tooltipPlacement="top"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default ChallengerView;
