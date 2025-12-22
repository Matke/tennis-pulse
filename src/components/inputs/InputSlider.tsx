import Slider from "rc-slider";
import "rc-slider/assets/index.css";
// components
import ButtonIcon from "@/components/buttons/ButtonIcon";
import Typography from "@/components/text/Typography";
// icons
import { MdInfo } from "react-icons/md";

type InputSliderProps = {
  value?: number | number[];
  onChange: (value: number | number[]) => void;
  label?: string;
  helperIcon?: React.ReactNode;
  helperIconTooltipId?: string;
  helperIconTooltipText?: string;
};

const marks: Record<number, number> = Object.fromEntries(
  Array.from({ length: 16 }, (_, i) => {
    const value = i + 1;
    return [value, value];
  }),
);

const InputSlider = ({
  value,
  onChange,
  label,
  helperIcon = <MdInfo className="text-tp-divider h-5 w-5 cursor-pointer" />,
  helperIconTooltipId,
  helperIconTooltipText = "",
}: InputSliderProps) => {
  const hasHelperIcon = Boolean(helperIcon && helperIconTooltipId);
  return (
    <div className="col-span-3 -mt-6 mb-5 flex flex-col gap-2">
      <div className="flex items-center justify-start">
        {/* label */}
        <Typography variant="label">{label}</Typography>
        {/* helper icon */}
        {hasHelperIcon && (
          <ButtonIcon
            icon={helperIcon}
            variant="blank"
            className="z-100"
            tooltipId={helperIconTooltipId}
            tooltipContent={helperIconTooltipText}
            tooltipPlacement="top"
          />
        )}
      </div>
      <Slider
        value={value}
        onChange={onChange}
        min={1.0}
        max={16}
        step={0.5}
        marks={marks}
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
