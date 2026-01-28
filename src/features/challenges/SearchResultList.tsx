// components
import FillingLoader from "@/components/loaders/FillingLoader";
import SearchResult from "@/features/challenges/SearchResult";
// types
import type { UserProfileData } from "@/types/authTypes";

type SearchResultListData = {
  listData: Partial<UserProfileData>[];
  isLoading: boolean;
};

const SearchResultList = ({ listData, isLoading }: SearchResultListData) => {
  return (
    <div className="bg-tp-card-back shadow-tp-primary/20 scrollbar-hide absolute bottom-12 left-0 z-100 flex h-50 w-full flex-col overflow-y-auto rounded-lg p-3 shadow-xs">
      {/* <div className="max-h-60 overflow-y-auto"> inside div scroll */}
      {isLoading ? (
        // loader will be inside box if displayed here
        <div className="flex h-full min-h-[200px] place-content-center place-items-center">
          <FillingLoader classic />
        </div>
      ) : (
        listData.map((item: Partial<UserProfileData>) => {
          return <SearchResult key={item.id} data={item} />;
        })
      )}
      {/* </div> */}
    </div>
  );
};

export default SearchResultList;
