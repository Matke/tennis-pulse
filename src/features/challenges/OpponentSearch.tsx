import SearchBar from "@/features/challenges/search-bar/SearchBar";
import SearchResultList from "@/features/challenges/search-bar/SearchResultList";
import { searchProfiles } from "@/services/apiProfile";
import type { UserProfileData } from "@/types/authTypes";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

type OpponentSearchProps = {
  currentUserId: string;
  onPlayerSelect: (player: UserProfileData) => void;
};

const OpponentSearch = ({
  currentUserId,
  onPlayerSelect,
}: OpponentSearchProps) => {
  const [searchPlayerValue, setSearchPlayerValue] = useState<string>("");
  const [profiles, setProfiles] = useState<UserProfileData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
        const data = await searchProfiles(searchPlayerValue, currentUserId);
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
  }, [searchPlayerValue, currentUserId]);

  const handleSelect = (player: UserProfileData) => {
    onPlayerSelect(player);
  };

  return (
    <SearchBar
      placeholder="Search players"
      value={searchPlayerValue}
      setValue={setSearchPlayerValue}
      onChange={handleSearchChange}
    >
      <SearchResultList
        listData={profiles}
        isLoading={isLoading}
        onPlayerSelect={handleSelect}
      />
    </SearchBar>
  );
};

export default OpponentSearch;
