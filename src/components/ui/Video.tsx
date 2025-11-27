import ReactPlayer from "react-player";

type VideoProps = {
  videoSrc: string | undefined;
  playing?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  onReady: () => void;
  width?: number; // percentage value
  height?: number; // percentage value
  className?: string;
};

const Video = ({
  videoSrc,
  playing = true,
  loop = true,
  muted = true,
  controls = false,
  onReady,
  width = 100,
  height = 100,
  className,
}: VideoProps) => {
  return (
    <ReactPlayer
      src={videoSrc}
      playing={playing}
      loop={loop}
      muted={muted}
      controls={controls}
      onReady={onReady}
      width={`${width}%`}
      height={`${height}%`}
      className={className}
      // className="object-cover blur-[0.3px]"
    />
  );
};

export default Video;
