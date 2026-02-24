const SearchProfileSkeletonLoader = () => {
  return (
    // mt-1 controls bounce of search bar when loader is running
    <div className="-mt-1 animate-pulse">
      <div className="flex h-full flex-col items-center justify-center gap-5 px-6">
        {/* Avatar Skeleton */}
        <div className="bg-tp-main-background h-32 w-32 rounded-full" />

        {/* Name/Flag Skeleton */}
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="bg-tp-main-background h-10 w-10 rounded" />
          <div className="bg-tp-main-background h-6 w-32 rounded" />
        </div>

        {/* Stats Skeleton */}
        <div className="flex w-full justify-center gap-x-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="bg-tp-main-background h-8 w-12 rounded" />
              <div className="bg-tp-main-background h-3 w-10 rounded" />
            </div>
          ))}
        </div>

        {/* Chips Skeleton */}
        <div className="flex space-x-2">
          <div className="bg-tp-main-background h-7 w-20 rounded-full" />
          <div className="bg-tp-main-background h-7 w-14 rounded-full" />
          <div className="bg-tp-main-background h-7 w-14 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default SearchProfileSkeletonLoader;
