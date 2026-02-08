import { useEffect, useState } from "react";
// components
import ButtonActionsMenu, {
  type ButtonActionsData,
} from "@/components/buttons/ButtonActionsMenu";
import ButtonIcon from "@/components/buttons/ButtonIcon";
import Typography from "@/components/text/Typography";
import Chip from "@/components/ui/Chip";
import FemaleProfileIcon from "@/components/ui/FemaleProfileIcon";
import MaleProfileIcon from "@/components/ui/MaleProfileIcon";
import FullPlayerDetails from "@/features/challenges/FullPlayerDetails";
import SearchBar from "@/features/challenges/SearchBar";
import SearchResultList from "@/features/challenges/SearchResultList";
// types
import { type UserProfileData } from "@/types/authTypes";
// utils
import { calculateAge } from "@/utils/common";
import { searchProfiles } from "@/services/apiProfile";
import { toast } from "react-hot-toast";
// icons
import { IoTennisball } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import { FaHeart, FaPeopleArrows } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";

const OpponentView = ({ userProfile }: { userProfile: UserProfileData }) => {
  const [searchPlayerValue, setSearchPlayerValue] = useState<string>("");
  const [selectedOpponent, setSelectedOpponent] =
    useState<UserProfileData | null>(null);
  const [profiles, setProfiles] = useState<UserProfileData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPlayerDetails, setShowPlayerDetails] = useState<boolean>(true);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPlayerValue(e.target.value);
    setIsLoading(true); // to avoid blinking of empty state
  };

  useEffect(() => {
    if (!searchPlayerValue.trim()) {
      setProfiles([]);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      try {
        setIsLoading(true);
        const data = await searchProfiles(searchPlayerValue, userProfile.id);
        setProfiles(data || []);
      } catch (error) {
        if (error instanceof Error) {
          toast.error("Error while searhing profiles");
        }
      } finally {
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchPlayerValue, userProfile.id]);

  const genderIcon =
    selectedOpponent?.gender === "male" ? (
      <MaleProfileIcon />
    ) : (
      <FemaleProfileIcon />
    );

  const actioButtonsData: ButtonActionsData[] = [
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
      action: () => setShowPlayerDetails(!showPlayerDetails),
      tooltipId: "full-player-details",
      tooltipContent: "Show player full details",
    },
  ];

  return (
    <div className="hover:bg-tp-main-background/70 relative flex h-full w-1/2 cursor-pointer flex-col items-center justify-center transition-all duration-300">
      <div
        className={`bg-tp-main-background absolute inset-0 z-100 flex flex-col transition-transform duration-500 ease-in-out ${!showPlayerDetails ? "translate-x-0" : "translate-x-full"} `}
      >
        <div className="relative">
          <FullPlayerDetails opponentData={selectedOpponent} />
          <ButtonIcon
            onClick={() => setShowPlayerDetails(!showPlayerDetails)}
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
              tooltipPlacement="bottom"
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

        {/* Search bar with action to start challenge */}
        {/* TODO ml-10 will temporarily center search bar and other action buttons */}
        <div className="mt-8 ml-1 flex items-center gap-2">
          {selectedOpponent && (
            <ButtonActionsMenu
              actions={actioButtonsData}
              isMenuDisabled={!selectedOpponent}
            />
          )}
          <SearchBar
            placeholder="Search players"
            value={searchPlayerValue}
            setValue={setSearchPlayerValue}
            onChange={handleSearchChange}
          >
            <SearchResultList
              listData={profiles}
              isLoading={isLoading}
              onPlayerSelect={setSelectedOpponent}
            />
          </SearchBar>

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
