type LoaderProps = {
  size: number;
  borderSize: number;
  className?: string;
  backgroundLoaderColor?: string;
  loaderColor?: string;
};

const Loader = ({
  size,
  borderSize,
  className,
  backgroundLoaderColor = "",
  loaderColor = "",
}: LoaderProps) => {
  return (
    <div
      style={{
        width: `${size}px`,
        aspectRatio: "1",
        borderRadius: "50%",
        border: `${borderSize}px solid`,
        borderColor: `var(${backgroundLoaderColor || "--color-tp-loader-transparent"}) var(${loaderColor || "--color-charcoal-950"})`,
        animation: "spin 1s infinite linear",
      }}
      className={className}
    />
  );
};

export default Loader;
