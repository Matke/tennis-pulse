import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      {/* Main div */}
      <div className="hover:shadow-3xl via-tp-input-back from-tp-card-back to-tp-card-back relative z-10 min-h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br text-white shadow-2xl backdrop-blur-xl duration-700 hover:border-white/20 hover:shadow-white/5">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-white/10 opacity-40 transition-opacity duration-500 group-hover:opacity-10"></div>

          {/* top right blurred pulsed animation */}
          <div className="absolute top-10 right-10 h-16 w-16 animate-pulse rounded-full bg-white/5 blur-md" />

          {/* top left blurred pulse animation */}
          <div className="absolute top-10 left-10 h-16 w-16 animate-pulse rounded-full bg-white/3 blur-md" />

          {/* bottom right blurred animation */}
          <div className="absolute right-16 bottom-16 h-12 w-12 animate-ping rounded-full bg-white/4 blur-md"></div>

          {/* bottom left blurred pulse animation */}
          <div className="absolute bottom-16 left-16 h-12 w-12 animate-ping rounded-full bg-white/4 blur-md" />

          {/* top right corner */}
          <div className="absolute top-0 right-0 h-12 w-12 animate-ping rounded-full bg-white/4 blur-md" />

          {/* fill entire parent with subtle pulse animation */}
          {/* <div className="absolute inset-0 animate-pulse rounded-full bg-white/1 blur-xl" /> */}
        </div>

        {/* children container - main content of the card */}
        <div className="p-10">
          <div className="flex h-full flex-col items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
