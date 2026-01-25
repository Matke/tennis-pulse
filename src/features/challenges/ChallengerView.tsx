import Button from "@/components/buttons/Button";
import Typography from "@/components/text/Typography";
import Chip from "@/components/ui/Chip";
import type { UserProfileData } from "@/types/authTypes";
import { calculateAge } from "@/utils/common";
import { motion } from "framer-motion";

const ChallengerView = ({
  userProfile,
}: {
  userProfile: Partial<UserProfileData>;
}) => {
  return (
    <>
      <div className="mt-8 flex items-center justify-center">
        <Typography variant="title" className="font-bold">
          Challenger
        </Typography>
        {/* <div className="w-full">
          <ButtonIcon
            icon={<MdInfo className="text-tp-divider h-5 w-5 cursor-pointer" />}
            variant="blank"
            tooltipId="challenger"
            tooltipContent="Edit your profile in profile section of the app to ensure the latest data is presented here."
            tooltipPlacement="left"
          />
        </div> */}
      </div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-8 flex h-full flex-col items-center justify-start gap-5 px-6"
      >
        <div className="group relative">
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
        </div>

        <div className="flex flex-row items-center justify-center gap-2">
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
        </div>

        <div className="flex w-full justify-center gap-x-7">
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
        </div>

        <div className="space-x-2">
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
        </div>

        <Button
          label="Edit profile"
          className="mt-8 border-none hover:border-none"
          themeColor="secondary"
          buttonSize="base"
          fullWidth
        />
      </motion.div>
    </>
  );
};

export default ChallengerView;
