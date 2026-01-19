const SidebarSkeletonLoader = ({ open }: { open: boolean }) => {
  return (
    <aside
      className={`${open ? "w-72" : "w-20"} bg-tp-main-background relative flex h-screen flex-col overflow-hidden p-3 pt-5 duration-300`}
    >
      {/* Logo section */}
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 animate-pulse rounded-full bg-zinc-800/50" />
        {open && (
          <div className="h-6 w-32 animate-pulse rounded bg-zinc-800/50" />
        )}
      </div>

      {/* Nav items */}
      <div className="mt-6 flex-1 space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center gap-6 rounded-md px-4 py-3">
            <div className="h-6 w-6 animate-pulse rounded bg-zinc-800/50" />
            {open && (
              <div className="h-4 w-24 animate-pulse rounded bg-zinc-800/50" />
            )}
          </div>
        ))}
      </div>

      {/* Profile section */}
      <div className="flex items-center gap-5 p-1">
        <div className="h-12 w-12 animate-pulse rounded-full bg-zinc-700/50" />
        {open && (
          <>
            <div className="h-4 w-24 animate-pulse rounded bg-zinc-800/50" />
            <div className="ml-auto h-6 w-6 animate-pulse rounded bg-zinc-800/50" />
          </>
        )}
      </div>
    </aside>
  );
};

export default SidebarSkeletonLoader;
