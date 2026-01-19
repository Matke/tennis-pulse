import newLogo from "@/assets/newLogo.png";

const PulseLogo = ({
  isInSidebar = false,
  className,
}: {
  isInSidebar?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`${isInSidebar ? "mb-0" : "mb-6"} flex items-center justify-center ${className}`}
    >
      <div className={`relative ${isInSidebar ? "h-14 w-14" : "h-24 w-24"}`}>
        {/* big animation for pulse around logo */}
        <div
          className={`absolute ${isInSidebar ? "inset-2" : "inset-0"} animate-ping rounded-full border-2 border-white/20`}
        ></div>

        {/* smaller animation around logo  */}
        <div
          className={`absolute ${isInSidebar ? "inset-2" : "inset-0"} animate-pulse rounded-full border border-white/10`}
        ></div>

        {/* image container  */}
        <div
          className={`rounded-full ${isInSidebar ? "" : "border border-white/20 bg-linear-to-br from-black/80 to-black/60"} p-6 shadow-2xl backdrop-blur-lg transition-all duration-500`}
        >
          <div className="transition-transform duration-700">
            <img
              src={newLogo}
              alt=""
              className={`${isInSidebar ? "scale-[8]" : "scale-[3] hover:scale-[3] md:scale-[2]"} animate-pulse transition-all duration-300`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PulseLogo;
