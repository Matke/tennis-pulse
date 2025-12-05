// types
import type { ButtonThemeColor } from "@/components/buttons/Button";
import Loader from "@/components/loaders/Loader";
import Typography from "@/components/text/Typography";

// helpers
import { classNames } from "@/utils/common";

export type ButtonVariant = "filled" | "outlined" | "flat";

export type ButtonIconSize = "small" | "big";

export type ButtonIconProps = {
  icon: React.ReactNode;

  disabled?: boolean;
  isLoading?: boolean;
  themeColor?: ButtonThemeColor;
  variant?: ButtonVariant;
  rounded?: boolean;
  backgroundColor?: string;
  iconColor?: string;
  borderColor?: string;
  hoverClass?: boolean;
  smallLabel?: string;
  smallLabelColor?: string;
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const ButtonIcon = ({
  icon,
  disabled = false,
  isLoading = false,
  themeColor = "primary",
  variant = "filled",
  rounded = false,
  backgroundColor = "",
  iconColor = "",
  borderColor = "",
  hoverClass = false,
  smallLabel,
  smallLabelColor = "",
  className,
  onClick,
}: ButtonIconProps) => {
  const defaultClass = ` flex items-center justify-center rounded-${rounded ? "full" : "md"} border p-2 ${variant !== "flat" && "shadow-sm"} focus:outline-none not-disabled:active:scale-96 not-disabled:active:brightness-98 duration-100`;

  const hoverState = ` hover:not-disabled:opacity-90 transition-all duration-200 `;

  const setBorder = () => {
    switch (themeColor) {
      case "primary":
        return " border-tp-primary ";
      case "secondary":
        return " border-tp-secondary ";
      case "tertiary":
        return " border-tp-tertiary ";
      case "warning":
        return " border-tp-warning ";
    }
  };

  const setBackgroundColor = () => {
    switch (themeColor) {
      case "primary":
        return " bg-tp-primary ";
      case "secondary":
        return " bg-tp-secondary ";
      case "tertiary":
        return " bg-tp-tertiary ";
      case "warning":
        return " bg-tp-warning ";
    }
  };

  const setTextColor = () => {
    switch (themeColor) {
      case "primary":
        return " text-tp-typography-secondary ";
      case "secondary":
        return " text-tp-typography-secondary ";
      case "tertiary":
        return " text-tp-typography-secondary ";
      case "warning":
        return " text-tp-typography ";
    }
  };

  const handleVariant = () => {
    switch (variant) {
      case "flat":
        return ["shadow-none border-none", setTextColor()];
      case "outlined":
        return [
          "bg-transparent",
          "text-tp-typography",
          setBorder(),
          hoverClass
            ? "hover:bg-tp-primary hover:text-tp-typography-secondary"
            : "",
        ];
      case "filled":
        return [setBackgroundColor(), setTextColor(), setBorder()];
      default:
        return [];
    }
  };

  const classesVariants: (string | undefined)[] | string = handleVariant();

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={classNames(
          defaultClass,
          ...(classesVariants || ""),
          disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer",
          className || "",
          backgroundColor,
          borderColor,
          hoverClass ? hoverState : "",
        )}
      >
        {!isLoading ? (
          <div className={`${iconColor || ""} `}>{icon}</div>
        ) : (
          <Loader size={20} borderSize={2} />
        )}
      </button>
      {smallLabel && (
        <Typography
          variant="label"
          as="span"
          color={smallLabelColor}
          className={`${disabled ? "opacity-40" : ""} select-none`}
        >
          {smallLabel}
        </Typography>
      )}
    </div>
  );
};

export default ButtonIcon;
