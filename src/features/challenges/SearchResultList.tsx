import SearchResult from "@/features/challenges/SearchResult";

const SearchResultList = () => {
  return (
    <div className="bg-tp-card-back shadow-tp-primary/20 scrollbar-hide absolute bottom-12 left-0 z-100 flex h-50 w-full flex-col overflow-y-auto rounded-lg p-3 shadow-xs">
      {/* <div className="max-h-60 overflow-y-auto"> inside div scroll */}
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />

      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
      {/* </div> */}
    </div>
  );
};

export default SearchResultList;
