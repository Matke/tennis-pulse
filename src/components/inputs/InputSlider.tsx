import Slider from "rc-slider";
import "rc-slider/assets/index.css";
// components
import ButtonIcon from "@/components/buttons/ButtonIcon";
import Typography from "@/components/text/Typography";
// icons
import { MdInfo } from "react-icons/md";
import { useMemo } from "react";

type InputSliderProps = {
  value?: number;
  min?: number;
  max?: number;
  steps?: number;
  showMarks?: boolean;
  onChange: (value: number | number[]) => void;
  mainContainerClassName?: string;
  sliderClassName?: string;
  labelIconContainer?: string;
  label?: string;
  helperIcon?: React.ReactNode;
  helperIconTooltipId?: string;
  helperIconTooltipText?: string;
};

const INFO_ICON = <MdInfo className="text-tp-divider h-5 w-5 cursor-pointer" />;

const InputSlider = ({
  value,
  onChange,
  min = 1.0,
  max = 16,
  steps = 0.5,
  showMarks,
  label,
  mainContainerClassName = "",
  sliderClassName = "",
  labelIconContainer = "",
  helperIcon = INFO_ICON,
  helperIconTooltipId,
  helperIconTooltipText = "",
}: InputSliderProps) => {
  const hasHelperIcon = Boolean(helperIcon && helperIconTooltipId);

  const marks: Record<number, number> = useMemo(() => {
    return Object.fromEntries(
      Array.from({ length: max }, (_, i) => {
        const value = i + 1;
        return [value, value];
      }),
    );
  }, [max]);

  return (
    <div
      className={`-mt-6 mb-5 flex w-full flex-col gap-2 ${mainContainerClassName}`}
    >
      <div className={`flex items-center justify-start ${labelIconContainer}`}>
        {/* label */}
        <div className="flex flex-col">
          <Typography variant="label" as={"span"} className="">
            {label}
          </Typography>
        </div>
        {/* helper icon */}
        {hasHelperIcon && (
          <ButtonIcon
            icon={helperIcon}
            variant="blank"
            className="z-100 border-none"
            tooltipId={helperIconTooltipId}
            tooltipContent={helperIconTooltipText}
            tooltipPlacement="top"
          />
        )}
      </div>
      <Slider
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={steps}
        marks={showMarks ? marks : undefined}
        className={sliderClassName}
        dotStyle={{
          width: 7,
          height: 7,
          backgroundColor: "#8994a9",
          border: "none",
          opacity: 0,
          top: -1,
        }}
        activeDotStyle={{
          backgroundColor: "#ffee33",
        }}
        styles={{
          rail: {
            backgroundColor: "#2b2c2c",
            height: 8,
            opacity: 1,
          },
          track: {
            backgroundColor: "#e5e5e6",
            height: 8,
            opacity: 0.6,
          },
          handle: {
            borderColor: "#ffeb33",
            backgroundColor: "#ffeb33",
            height: 18,
            width: 18,
            marginTop: -6,
            opacity: 1,
            boxShadow: "0 0 0 4px rgba(249, 115, 22, 0.2)",
            // touchAction: "none", // potentially wont work on touch screen
          },
        }}
      />
    </div>
  );
};

export default InputSlider;
