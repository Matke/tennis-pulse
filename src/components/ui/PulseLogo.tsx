import newLogo from "../../assets/newLogo.png";

const PulseLogo = () => {
  return (
    <div className="mb-6 flex items-center justify-center">
      <div className="relative h-24 w-24">
        {/* big animation for pulse around logo */}
        <div className="absolute inset-0 animate-ping rounded-full border-2 border-white/20"></div>

        {/* smaller animation around logo  */}
        <div className="absolute inset-0 animate-pulse rounded-full border border-white/10"></div>

        {/* image container  */}
        <div className="rounded-full border border-white/20 bg-linear-to-br from-black/80 to-black/60 p-6 shadow-2xl backdrop-blur-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
          <div className="transition-transform duration-700">
            <img
              src={newLogo}
              alt=""
              className="scale-[3] animate-pulse transition-all duration-300 hover:scale-[3] md:scale-[2]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PulseLogo;
