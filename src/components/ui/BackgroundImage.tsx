const BackgroundImage = () => {
  return (
    <>
      {/* spans the whole page, image loaded with tailwind and it removes delay completely */}
      <div
        className="absolute inset-0 bg-black bg-(image:--bg-onboard) bg-cover bg-center"
        // style={{
        //   backgroundImage: `url(${onboardUser})`,
        // }}
      />
      {/* adds a dark blurred mask for the whole image and page */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-black/60" />
      </div>
    </>
  );
};

export default BackgroundImage;
