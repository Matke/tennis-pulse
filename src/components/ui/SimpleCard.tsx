const SimpleCard = ({
  children,
  parentContainerClass = "",
  disableHover = false,
  disablePadding = false,
  className = "",
  contentClassName = "",
}: {
  children: React.ReactNode;
  disableHover?: boolean;
  className?: string;
  contentClassName?: string;
  disablePadding?: boolean;
  parentContainerClass?: string;
}) => {
  return (
    <div className={`relative ${parentContainerClass}`}>
      <div
        className={`group bg-tp-card-back hover:shadow-3xl flex h-full flex-col overflow-y-hidden rounded-none border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-in-out ${!disableHover && "hover:border-white/40"} md:rounded-3xl ${className}`}
      >
        <div
          className={`flex min-h-0 flex-1 items-center justify-center overflow-x-hidden overflow-y-auto scroll-smooth ${!disablePadding && "p-6"} ${contentClassName}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
