// components
import FillingLoader from "@/components/loaders/FillingLoader";
import Typography from "@/components/text/Typography";
import SearchResult from "@/features/challenges/SearchResult";
// types
import type { UserProfileData } from "@/types/authTypes";
import type { Dispatch, SetStateAction } from "react";

type SearchResultListData = {
  listData: Partial<UserProfileData>[];
  isLoading: boolean;
  onPlayerSelect: Dispatch<SetStateAction<Partial<UserProfileData> | null>>;
};

const SearchResultList = ({
  listData,
  isLoading,
  onPlayerSelect,
}: SearchResultListData) => {
  return (
    <div className="bg-tp-card-back shadow-tp-primary/20 scrollbar-hide absolute bottom-12 left-0 z-100 flex h-50 w-full flex-col overflow-y-auto rounded-lg p-3 shadow-xs">
      {/* <div className="max-h-60 overflow-y-auto"> inside div scroll */}
      {isLoading ? (
        // loader will be inside box if displayed here
        <div className="flex h-full min-h-[200px] place-content-center place-items-center">
          <FillingLoader classic />
        </div>
      ) : listData.length === 0 ? (
        <div className="flex h-full min-h-[200px] flex-col place-content-center place-items-center">
          <Typography variant="label">No players match your search.</Typography>
          <Typography variant="label-small" color="text-tp-typography/50">
            Try adjusting your search.
          </Typography>
        </div>
      ) : (
        listData.map((item: Partial<UserProfileData>) => {
          return (
            <SearchResult
              key={item.id}
              data={item}
              onPlayerSelect={onPlayerSelect}
            />
          );
        })
      )}
      {/* </div> */}
    </div>
  );
};

export default SearchResultList;
