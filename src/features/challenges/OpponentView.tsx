import { useCallback, useMemo, useState } from "react";
// components
import ButtonActionsMenu, {
  type ButtonActionsData,
} from "@/components/buttons/ButtonActionsMenu";
import ButtonIcon from "@/components/buttons/ButtonIcon";
import OpponentCard from "@/features/challenges/OpponentCard";
import OpponentSearch from "@/features/challenges/OpponentSearch";
import Typography from "@/components/text/Typography";
import FullPlayerDetails from "@/features/challenges/FullPlayerDetails";
// types
import { type UserProfileData } from "@/types/authTypes";
// icons
import { IoCloseCircle, IoTennisball } from "react-icons/io5";
import { FaHeart, FaPeopleArrows } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";

const OpponentView = ({ userProfile }: { userProfile: UserProfileData }) => {
  const [selectedOpponent, setSelectedOpponent] =
    useState<UserProfileData | null>(null);
  const [showPlayerDetails, setShowPlayerDetails] = useState<boolean>(true);

  const handlePlayerSelect = useCallback((player: UserProfileData) => {
    setSelectedOpponent(player);
  }, []);

  const toggleDetails = useCallback(() => {
    setShowPlayerDetails((prev) => !prev);
  }, []);

  const actionButtonsData: ButtonActionsData[] = useMemo(
    () => [
      {
        icon: <FaHeart className="h-5 w-5" />,
        action: () => console.log("Save as favorite"),
        tooltipId: "favorite-opponent",
        tooltipContent: "Save as favorite opponent",
      },
      {
        icon: <FaPeopleArrows className="h-5 w-5" />,
        action: () => console.log("View head2head"),
        tooltipId: "list-challenges",
        tooltipContent: "View your head-to-head score with selected opponent",
      },
      {
        icon: <CgDetailsMore className="h-5 w-5" />,
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

        <div
          className={`bg-tp-main-background absolute inset-0 z-100 flex flex-col transition-transform duration-500 ease-in-out ${!showPlayerDetails ? "translate-x-0" : "translate-x-full"} `}
        >
          <div className="relative">
            <FullPlayerDetails opponentData={selectedOpponent} />
            <ButtonIcon
              onClick={toggleDetails}
              icon={<IoCloseCircle className="h-6 w-6" />}
              variant="outlined"
              className="absolute top-3 left-4 p-2.5 shadow-sm"
              backgroundColor="bg-tp-card-back"
              borderColor="border-none"
              rounded
            />
            <Typography variant="paragraph" className="mt-5 ml-7">
              Last 5 matches
            </Typography>
          </div>
        </div>

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
              onClick={() => console.log("Start a match")}
              disabled={!selectedOpponent}
              icon={<IoTennisball className="h-5 w-5" />}
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
    </div>
  );
};

export default OpponentView;
