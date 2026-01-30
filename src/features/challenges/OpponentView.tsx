import ButtonIcon from "@/components/buttons/ButtonIcon";
import Typography from "@/components/text/Typography";
import Chip from "@/components/ui/Chip";
import FemaleProfileIcon from "@/components/ui/FemaleProfileIcon";
import MaleProfileIcon from "@/components/ui/MaleProfileIcon";
import SearchBar from "@/features/challenges/SearchBar";
import SearchResultList from "@/features/challenges/SearchResultList";
import { searchProfiles } from "@/services/apiProfile";
import { type UserProfileData } from "@/types/authTypes";
import { calculateAge } from "@/utils/common";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
// import { toast } from "react-hot-toast";
import { IoTennisball } from "react-icons/io5";

const OpponentView = ({ userProfile }: { userProfile: UserProfileData }) => {
  const [searchPlayerValue, setSearchPlayerValue] = useState<string>("");
  const [selectedOpponent, setSelectedOpponent] =
    useState<Partial<UserProfileData> | null>(null);
  const [profiles, setProfiles] = useState<Partial<UserProfileData>[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPlayerValue(e.target.value);
    setIsLoading(true);
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

  return (
    <>
      <div className="mt-8 flex items-center justify-center">
        <Typography variant="title" className="font-bold">
          Opponent
        </Typography>
      </div>
      <div className="mt-8 flex h-full flex-col items-center justify-start gap-5 px-6">
        <div className="group relative">
          <div className="animate-tilt absolute -inset-0.5 rounded-full bg-linear-to-r from-orange-600 to-yellow-200 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
          <div className="relative">
            {/* Profile image part */}
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

        <div className="flex flex-row items-center justify-center gap-2">
          <span
            className={`fi fi-${selectedOpponent?.nationality?.toLocaleLowerCase()}`}
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

        <div
          className={`flex w-full justify-center gap-x-7 ${selectedOpponent ? "visible" : "invisible"}`}
        >
          <div className="transform text-center transition-all duration-300 hover:scale-110">
            <p className="bg-linear-to-l from-yellow-500 to-orange-500 bg-clip-text text-2xl font-bold text-transparent">
              {selectedOpponent?.nationality?.toLocaleUpperCase() || "?"}
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

        <div className="space-x-2">
          <Chip
            label={selectedOpponent?.userName ?? ""}
            chipSize="medium"
            tooltipId="username_opponent"
            tooltipContent="Opponent username"
            tooltipPlacement="bottom"
            themeColor="warning"
            containerClass={`${selectedOpponent?.userName ? "visible" : "invisible"}`}
          />
          <Chip
            label={
              selectedOpponent?.height ? `${selectedOpponent?.height}cm` : ""
            }
            chipSize="medium"
            themeColor="warning"
            containerClass={`${selectedOpponent?.height ? "visible" : "invisible"}`}
          />
          <Chip
            label={
              selectedOpponent?.weight ? `${selectedOpponent?.weight}kg` : ""
            }
            chipSize="medium"
            themeColor="warning"
            containerClass={`${selectedOpponent?.weight ? "visible" : "invisible"}`}
          />
        </div>

        {/* Search bar with action to start challenge */}
        <div className="mt-8 flex items-center justify-center gap-2">
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

          {/* TODO will open a modal */}
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
            tooltipPlacement="right"
          />
        </div>
      </div>
    </>
  );
};

export default OpponentView;
