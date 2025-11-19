import Loader from "@/components/loaders/Loader";

// helper function to merge tailwind classes
import { classNames } from "@/utils/common";

export type ButtonThemeColor = "primary" | "secondary" | "tertiary" | "warning";

export type ButtonTypeAction = "button" | "submit" | "reset" | undefined;

export type ButtonProps = {
  label: string | React.ReactElement;

  type?: ButtonTypeAction;
  className?: string;
  themeColor?: ButtonThemeColor;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  loaderColor?: string;
  loaderWithLabel?: boolean;
  backgroundLoaderColor?: string;
  position?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({
  label,
  type = "button",
  className,
  themeColor = "primary",
  icon,
  fullWidth = false,
  isLoading = false,
  disabled = false,
  position = "relative",
  loaderWithLabel = false,
  loaderColor = "",
  backgroundLoaderColor = "",
  ...rest
}: ButtonProps) => {
  // active scale and brightness classes simulate button click effect
  // select-none prevent user from selecting text inside button when double or triple clicking
  const defaultClass = ` whitespace-nowrap inline-block text-sm rounded-full font-semibold tracking-wide outline-none focus:outline-none transition-colors duration-300 shadow-xs px-4 py-3 md:px-8 md:py-2 flex justify-center items-center transition-all not-disabled:active:scale-99 not-disabled:active:brightness-99 select-none ${position}`;

  const setThemeButtons = (themeColor: ButtonThemeColor) => {
    switch (themeColor) {
      case "primary":
        return " bg-tp-primary hover:not-disabled:bg-sunbeam-yellow-300 text-charcoal-950 shadow-tp-primary";
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

  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames(
        defaultClass,
        setThemeButtons(themeColor),
        className || "",
        fullWidth ? "w-full text-center" : "w-auto",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
      )}
      {...rest}
    >
      <div className="flex items-center justify-center space-x-2">
        {!isLoading && icon && <span>{icon}</span>}
        {isLoading && !loaderWithLabel && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader
              size={20}
              borderSize={2}
              loaderColor={loaderColor || setLoaderColor(themeColor)}
              className="animate-spin"
            />
          </div>
        )}
        {isLoading && loaderWithLabel && (
          <Loader
            size={20}
            borderSize={2}
            loaderColor={loaderColor || setLoaderColor(themeColor)}
          />
        )}
        <span className={isLoading && !loaderWithLabel ? "invisible" : ""}>
          {label}
        </span>
      </div>
    </button>
  );
};

export default Button;
