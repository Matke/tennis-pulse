export type LoaderProps = {
  size: number;
  borderSize: number;
  className?: string;
  backgroundLoaderColor?: string;
  loaderColor?: string;
  loaderText?: string;
  children?: React.ReactNode;
};

const Loader = ({
  size,
  borderSize,
  className,
  backgroundLoaderColor = "",
  loaderColor = "",
  children,
}: LoaderProps) => {
  return (
    <div className="flex items-center justify-center">
      <div
        style={{
          width: `${size}px`,
          aspectRatio: "1",
          borderRadius: "50%",
          border: `${borderSize}px solid`,
          borderColor: `var(${backgroundLoaderColor || "--color-tp-loader-transparent"}) var(${loaderColor || "--color-charcoal-950"})`,
          // animation: "spin 1s infinite linear", switch for regular css
        }}
        className={`${className} animate-spin`}
      />
      {/* Used for loader text if wanted */}
      {children}
    </div>
  );
};

export default Loader;
