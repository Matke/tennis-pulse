import Typography from "@/components/text/Typography";
import Tooltip, { type TooltipPlacement } from "@/components/tooltip/Tooltip";
import { classNames } from "@/utils/common";

export type ChipThemeColor = "error" | "warning" | "success" | "success-strong";

export type ChipSize = "standard" | "medium" | "large" | "huge"; // medium best for icon + text

export type ChipVariant = "filled" | "outline";

export type ChipProps = {
  label: string;
  themeColor?: ChipThemeColor;
  chipSize?: ChipSize;
  variant?: ChipVariant;
  containerClass?: string;
  labelClass?: string;
  tooltipId?: string;
  tooltipContent?: string;
  tooltipPlacement?: TooltipPlacement;
  icon?: React.ReactNode;
  customBackgroundColor?: string;
  customTextColor?: string;
};

const Chip = ({
  label,
  themeColor = "success",
  chipSize = "standard",
  variant = "filled",
  icon,
  containerClass,
  labelClass,
  tooltipId = "",
  tooltipContent = "",
  tooltipPlacement = "top",
  customBackgroundColor = "",
  customTextColor = "",
  ...rest
}: ChipProps) => {
  const defaultChipClass =
    "inline-flex items-center justify-center gap-1 rounded-full ";

  const setBackgroundColor = () => {
    switch (themeColor) {
      case "error":
        return " bg-tp-warning";
      case "warning":
        return " bg-crimson-carrot-400";
      case "success":
        return " bg-olive-leaf-400";
      case "success-strong":
        return " bg-tp-tertiary";
    }
  };

  const setBorderColor = () => {
    switch (themeColor) {
      case "error":
        return " border-tp-warning";
      case "warning":
        return " border-crimson-carrot-400";
      case "success":
        return " border-olive-leaf-400";
      case "success-strong":
        return " border-tp-tertiary";
    }
  };

  // Tooltip wrapper
  const handleVariants = (variant: ChipVariant) => {
    switch (variant) {
      case "filled":
        return [setBackgroundColor(), "border-none", "shadow-sm"];
      case "outline":
        return [setBorderColor(), "border", "bg-none", "shadow-md "];
      default:
        return [];
    }
  };

  const setChipSize = () => {
    switch (chipSize) {
      case "standard":
        return " px-2";
      case "medium":
        return " px-2 py-1";
      case "large":
        return " px-2 py-2";
      case "huge":
        return " px-3 py-2";
    }
  };

  const classesVariants = handleVariants(variant);

  const hasTooltip = Boolean(tooltipId && tooltipContent);

  const commonChip = (
    <div
      className={classNames(
        defaultChipClass,
        ...(classesVariants || ""),
        containerClass,
        setChipSize() || "",
        customBackgroundColor,
        customTextColor,
      )}
      data-tooltip-id={tooltipId}
      {...rest}
    >
      <div className="flex items-center justify-center gap-1">
        {icon && <span>{icon}</span>}
        <Typography
          variant="label-small"
          as={"span"}
          color={`${variant === "filled" ? "text-tp-typography-secondary" : "text-tp-typography"}`}
          className={`font-medium ${labelClass}`}
        >
          {label}
        </Typography>
      </div>
    </div>
  );

  return hasTooltip ? (
    <Tooltip
      id={tooltipId}
      content={tooltipContent}
      place={tooltipPlacement}
      variant="dark"
    >
      {commonChip}
    </Tooltip>
  ) : (
    commonChip
  );
};

export default Chip;
