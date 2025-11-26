import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full transform transition-all duration-500">
      <div className="hover:shadow-3xl relative z-10 min-h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[#010101] via-[#090909] to-[#010101] text-white shadow-2xl backdrop-blur-xl duration-700 hover:border-white/10 hover:shadow-white/5">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-white/10 opacity-40 transition-opacity duration-500 group-hover:opacity-10"></div>

          <div className="absolute -bottom-20 -left-20 h-48 w-48 transform animate-bounce rounded-full bg-linear-to-tr from-white/10 to-transparent opacity-30 blur-3xl transition-all duration-700 group-hover:scale-100 group-hover:opacity-10"></div>

          <div className="absolute top-10 left-10 h-16 w-16 animate-ping rounded-full bg-white/5 blur-xl"></div>
          <div className="absolute right-16 bottom-16 h-12 w-12 animate-ping rounded-full bg-white/5 blur-lg"></div>
        </div>

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
