import { useState } from "react";
// types
import type { TooltipPlacement } from "@/components/tooltip/Tooltip";
// icons
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Tooltip from "@/components/tooltip/Tooltip";

export type SwithcerProps = {
  tooltipId?: string;
  tooltipContent?: string;
  tooltipPlacement?: TooltipPlacement;
};

const Switcher = ({
  tooltipId = "",
  tooltipContent = "",
  tooltipPlacement = "left",
}: SwithcerProps) => {
  const [isLocation, setIsLocation] = useState(false);

  const toggleSwitch = () => {
    setIsLocation(!isLocation);
  };

  const hasTooltip = Boolean(tooltipId && tooltipContent);

  const commonSwitcher = (
    <div
      className="flex items-center justify-center"
      data-tooltip-id={tooltipId}
    >
      {/* Container for the toggle */}
      <div className="flex items-center">
        {/* The hidden checkbox input for accessibility/form submission */}
        <input
          type="checkbox"
          id="toggleSwitch"
          className="hidden"
          checked={isLocation}
          onChange={toggleSwitch}
        />

        {/* The Toggle Track (Label) */}
        <label
          htmlFor="toggleSwitch"
          className={`relative inline-flex h-8 w-32 cursor-pointer items-center rounded-full transition-colors duration-300 ease-in-out select-none ${isLocation ? "bg-tp-main-background" : "bg-tp-main-background"} shadow-tp-primary/50 shadow-xs`}
        >
          {/* The Text Labels
            We render both and adjust opacity/position based on state 
          */}

          {/* Text: Profiles (Visible when OFF/Left) */}
          <span
            className={`absolute right-6 text-xs font-bold transition-opacity duration-300 ${isLocation ? "opacity-0" : "text-tp-typography opacity-100"} `}
          >
            PROFILES
          </span>

          {/* Text: Location (Visible when ON/Right) */}
          <span
            className={`absolute left-5.5 text-xs font-bold transition-opacity duration-300 ${isLocation ? "text-tp-typography opacity-100" : "opacity-0"} `}
          >
            LOCATION
          </span>

          {/* The Sliding Ball */}
          <span
            className={`bg-tp-primary h-6 w-6 transform rounded-full shadow-md transition-transform duration-300 ease-in-out ${isLocation ? "translate-x-24" : "translate-x-1"} flex items-center justify-center`}
          >
            {isLocation ? (
              <FaMapMarkerAlt className="h-4.5 w-4.5" />
            ) : (
              <FaUser className="h-4 w-4" />
            )}
          </span>
        </label>
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
      {commonSwitcher}
    </Tooltip>
  ) : (
    commonSwitcher
  );
};

export default Switcher;
