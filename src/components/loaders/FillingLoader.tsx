const FillingLoader = ({ text }: { text: string }) => {
  return (
    <div className="loaderFill">
      <span>{text}</span>
    </div>
  );
};

export default FillingLoader;
