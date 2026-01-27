import SearchResult from "@/features/challenges/SearchResult";

const SearchResultList = () => {
  return (
    <div className="bg-tp-card-back shadow-tp-primary/20 absolute bottom-12 left-0 z-100 flex h-50 w-full flex-col rounded-lg p-3 shadow-xs">
      <SearchResult />
      <SearchResult />
    </div>
  );
};

export default SearchResultList;
