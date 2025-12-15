const SimpleCard = ({
  children,
  parentContainerClass = "",
}: {
  children: React.ReactNode;
  parentContainerClass?: string;
}) => {
  return (
    <div className={`relative ${parentContainerClass}`}>
      <div className="group bg-tp-card-back hover:shadow-3xl flex h-full flex-col overflow-y-hidden rounded-none border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-in-out hover:border-white/40 md:rounded-3xl">
        <div className="flex min-h-0 flex-1 items-center justify-center overflow-x-hidden overflow-y-auto scroll-smooth p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
