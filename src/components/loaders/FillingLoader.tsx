const FillingLoader = ({
  text,
  classic = false,
}: {
  text?: string;
  classic?: boolean;
}) => {
  if (classic) {
    return <div className="loaderClassic"></div>;
  }

  return (
    <div className="loaderFill">
      <span>{text}</span>
    </div>
  );
};

export default FillingLoader;
