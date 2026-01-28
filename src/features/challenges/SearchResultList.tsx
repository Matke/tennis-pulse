// import Loader from "@/components/loaders/Loader";
import FillingLoader from "@/components/loaders/FillingLoader";
import SearchResult from "@/features/challenges/SearchResult";
import type { UserProfileData } from "@/types/authTypes";

const SearchResultList = ({
  listData,
  loading,
}: {
  listData: UserProfileData[];
  loading: boolean;
}) => {
  return (
    <div className="bg-tp-card-back shadow-tp-primary/20 scrollbar-hide absolute bottom-12 left-0 z-100 flex h-50 w-full flex-col overflow-y-auto rounded-lg p-3 shadow-xs">
      {/* <div className="max-h-60 overflow-y-auto"> inside div scroll */}
      {loading ? (
        <div className="flex h-full min-h-[200px] place-content-center place-items-center">
          <FillingLoader classic />
        </div>
      ) : (
        listData.map((data: UserProfileData, index: number) => {
          return <SearchResult key={index} data={data} />;
        })
      )}
      {/* {!loading &&
        listData.map((data: UserProfileData, index: number) => {
          return <SearchResult key={index} data={data} />;
        })} */}
      {/* <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />

      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult /> */}
      {/* </div> */}
    </div>
  );
};

export default SearchResultList;
