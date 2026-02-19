import { useCallback, useMemo, useState } from "react";
// components
import ButtonActionsMenu, {
  type ButtonActionsData,
} from "@/components/buttons/ButtonActionsMenu";
import ButtonIcon from "@/components/buttons/ButtonIcon";
import OpponentCard from "@/features/challenges/OpponentCard";
import OpponentSearch from "@/features/challenges/OpponentSearch";
// types
import { type UserProfileData } from "@/types/authTypes";
// icons
import { IoCloseCircle, IoTennisball } from "react-icons/io5";
import { FaHeart, FaPeopleArrows } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import CropModal from "@/components/modals/CropModal";
import CreateChallengeForm from "@/features/challenges/CreateChallengeForm";
import FullPlayerDetails from "@/features/challenges/FullPlayerDetails";
// import Typography from "@/components/text/Typography";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "@/store/useAuth";

// ICONS
const CLOSE_ICON = <IoCloseCircle className="h-6 w-6" />;
const TENNIS_BALL_ICON = <IoTennisball className="h-5 w-5" />;
const HEART_ICON = <FaHeart className="h-5 w-5" />;
const PEOPLE_ARROWS = <FaPeopleArrows className="h-5 w-5" />;
const DETAILS_ICON = <CgDetailsMore className="h-5 w-5" />;

const OpponentView = () => {
  const { userProfile } = useAuth();
  const [selectedOpponent, setSelectedOpponent] =
    useState<UserProfileData | null>(null);
  const [showPlayerDetails, setShowPlayerDetails] = useState<boolean>(false);
  const [isChallengeModalOpen, setIsChallengeModalOpen] =
    useState<boolean>(false);

  const handlePlayerSelect = useCallback((player: UserProfileData) => {
    setSelectedOpponent(player);
  }, []);

  const toggleDetails = useCallback(() => {
    setShowPlayerDetails((prev) => !prev);
  }, []);

  const actionButtonsData: ButtonActionsData[] = useMemo(
    () => [
      {
        icon: HEART_ICON,
        action: () => console.log("Save as favorite"),
        tooltipId: "favorite-opponent",
        tooltipContent: "Save as favorite opponent",
      },
      {
        icon: PEOPLE_ARROWS,
        action: () => console.log("View head2head"),
        tooltipId: "list-challenges",
        tooltipContent: "View your head-to-head score with selected opponent",
      },
      {
        icon: DETAILS_ICON,
        action: toggleDetails,
        tooltipId: "full-player-details",
        tooltipContent: "Show player full details",
      },
    ],
    [toggleDetails],
  );

  return (
    <div className="hover:bg-tp-main-background/70 relative flex h-full w-1/2 cursor-pointer flex-col items-center justify-center transition-all duration-300">
      <div>
        {/* Shows basic opponent info */}
        <OpponentCard selectedOpponent={selectedOpponent} />

        <AnimatePresence mode="wait">
          {showPlayerDetails && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              style={{ willChange: "transform" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="bg-tp-main-background/80 absolute inset-0 z-100 flex h-full flex-col"
            >
              <div className="relative h-full backdrop-blur-lg">
                <FullPlayerDetails opponentData={selectedOpponent} />
                <ButtonIcon
                  onClick={() => setShowPlayerDetails(false)}
                  icon={CLOSE_ICON}
                  variant="outlined"
                  className="absolute top-3 left-4 p-2.5 shadow-sm"
                  backgroundColor="bg-tp-card-back"
                  borderColor="border-none"
                  rounded
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-9 ml-1 flex items-center gap-2">
          {selectedOpponent && (
            <ButtonActionsMenu
              actions={actionButtonsData}
              isMenuDisabled={!selectedOpponent}
            />
          )}

          {/* Search bar with results */}
          <OpponentSearch
            currentUserId={userProfile.id}
            onPlayerSelect={handlePlayerSelect}
          />

          {selectedOpponent && (
            <ButtonIcon
              onClick={() => setIsChallengeModalOpen(!isChallengeModalOpen)}
              disabled={!selectedOpponent}
              icon={TENNIS_BALL_ICON}
              variant="outlined"
              className="shadow-tp-primary p-2.5 shadow-sm"
              backgroundColor="bg-tp-card-back"
              borderColor="border-none"
              hoverClass
              rounded
              tooltipId="challenge-play"
              tooltipContent={`${selectedOpponent ? `Create a challenge with ${selectedOpponent?.firstName + " " + selectedOpponent?.lastName + " (" + selectedOpponent?.userName + ")"}` : "Search and select your opponent to procced with challenge creation"}`}
              tooltipPlacement="top"
            />
          )}
        </div>
      </div>
      {/* modals */}
      <CropModal
        title="Create challenge"
        open={isChallengeModalOpen}
        onClose={() => setIsChallengeModalOpen(!isChallengeModalOpen)}
        modalBoxClassName="max-w-3xl"
        buttonsLayoutClassName="justify-end"
        buttons={[
          {
            label: "Cancel",
            themeColor: "warning",
            onClick: () => setIsChallengeModalOpen(false),
          },
          {
            type: "submit",
            formId: "create-challenge-form",
            label: "Confirm",
            themeColor: "tertiary",
          },
        ]}
      >
        <CreateChallengeForm />
      </CropModal>
    </div>
  );
};

export default OpponentView;
