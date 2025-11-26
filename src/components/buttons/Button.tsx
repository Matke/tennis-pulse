import Loader from "@/components/loaders/Loader";

// helper function to merge tailwind classes
import { classNames } from "@/utils/common";

export type ButtonThemeColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "warning"
  | "blank";

export type ButtonTypeAction = "button" | "submit" | "reset" | undefined;

export type ButtonSize =
  | "x-small"
  | "small"
  | "medium"
  | "base"
  | "large"
  | "huge";

export type ButtonIconPosition = "left" | "right";

export type ButtonProps = {
  label: string | React.ReactElement;

  type?: ButtonTypeAction;
  className?: string;
  themeColor?: ButtonThemeColor;
  buttonSize?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: ButtonIconPosition;
  fullWidth?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  loaderColor?: string;
  loaderWithLabel?: boolean;
  backgroundLoaderColor?: string;
  loaderText?: string;
  uppercaseLabel?: boolean;
  labelClass?: string;
  position?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({
  label,
  type = "button",
  className,
  themeColor = "primary",
  buttonSize = "base",
  icon,
  iconPosition = "left",
  fullWidth = false,
  isLoading = false,
  disabled = false,
  loaderWithLabel = false,
  loaderColor = "",
  loaderText,
  backgroundLoaderColor = "",
  uppercaseLabel = false,
  labelClass = "",
  position = "relative",
  ...rest
}: ButtonProps) => {
  // active scale and brightness classes simulate button click effect
  // select-none prevent user from selecting text inside button when double or triple clicking
  const defaultClass = ` whitespace-nowrap  text-sm rounded-full font-semibold tracking-wide outline-none focus:outline-none transition-colors duration-300 shadow-xs flex justify-center items-center transition-all not-disabled:active:scale-99 not-disabled:active:brightness-99 select-none ${position}`;

  const setThemeButtons = (themeColor: ButtonThemeColor) => {
    switch (themeColor) {
      case "primary":
        return " bg-tp-primary hover:not-disabled:bg-sunbeam-yellow-300 text-charcoal-950 shadow-tp-primary hover:not-disabled:shadow-sunbeam-yellow-300";
      case "secondary":
        return ` border-2 border-tp-primary ${!isLoading && "hover:not-disabled:bg-tp-primary hover:not-disabled:text-charcoal-950"} text-charcoal-200 transition-colors  `;
      case "warning":
        return " bg-tp-warning not-disabled:opacity-90 transiton-opacity duration-300 hover:not-disabled:opacity-100 text-pacific-blue-50 shadow-tp-warning ";
      case "tertiary":
        return " bg-tp-tertiary hover:bg-radiocative-grass-500 text-pacific-blue-50 shadow-tp-tertiary opacity-90 hover:opacity-100 ";
    }
  };

  // set custom colors for every button color combination
  const setLoaderColor = (themeColor: ButtonThemeColor) => {
    switch (themeColor) {
      case "primary":
        return;
      case "secondary":
        return "--color-charcoal-100";
      case "warning":
        return "--color-charcoal-100";
      case "tertiary":
        return "--color-charcoal-100";
    }
  };

  const setButtonSize = (buttonSize: ButtonSize) => {
    switch (buttonSize) {
      case "x-small":
        return "px-1 py-1 md:px-2 md:py-1";
      case "small":
        return " px-2 py-1 md:px-4 md:py-1 ";
      case "medium":
        return " px-2 py-1 md:px-6 md:py-1 ";
      case "base":
        return " px-4 py-3 md:px-8 md:py-2 ";
      case "large":
        return " px-4 py-3 md:px-8 md:py-4 ";
      case "huge":
        return " px-4 py-3 md:px-8 md:py-6 ";
    }
  };

  // TODO: Refactor so that variants of buttons can be created for example: a warning button with outline (secondary) button design
  // make handelVariants() function and create "flat" | "outline" and "filled" buttons with color variations
  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames(
        defaultClass,
        setThemeButtons(themeColor),
        setButtonSize(buttonSize),
        className || "",
        fullWidth ? "w-full text-center" : "",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
      )}
      {...rest}
    >
      <div className="flex items-center justify-center space-x-2">
        {/* left icon position */}
        {!isLoading && icon && iconPosition === "left" && <span>{icon}</span>}

        {/* absolute will center the loader if we are in loading state without label, button is by default relative */}
        {isLoading && (
          <div
            className={`${!loaderWithLabel || iconPosition === "right" ? "absolute" : ""} flex items-center justify-center`}
          >
            <Loader
              size={20}
              borderSize={2}
              loaderColor={loaderColor || setLoaderColor(themeColor)}
              className="loading-container"
            >
              {/* without loaderText only simple loader will be displayed */}
              {loaderText && (
                <span>
                  <span className={`loading-text pl-3 grayscale filter`}>
                    {loaderText}
                  </span>
                  <span className="dot-animation"></span>
                </span>
              )}
            </Loader>
          </div>
        )}

        {/* label will not be shown if button is in loading state and iconPosition is on the right */}
        <span
          className={`${(isLoading && !loaderWithLabel) || (isLoading && loaderWithLabel && iconPosition === "right") ? "invisible" : ""} ${uppercaseLabel && "uppercase"} ${labelClass}`}
        >
          {label}
        </span>

        {/* right icon position */}
        {!isLoading && icon && iconPosition === "right" && <span>{icon}</span>}
      </div>
    </button>
  );
};

export default Button;
