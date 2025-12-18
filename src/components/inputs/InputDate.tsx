// Components
import Typography from "@/components/text/Typography";

import type React from "react";

// Icons
import { GoCalendar } from "react-icons/go";

export type DateInputProps = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  name?: string;
  type?: string;
  error?: string;
  errorPlaceholderClass?: string;
  className?: string;
  labelClass?: string;
  fullWidth?: boolean;
  inputClass?: string;
  backgroundInputColor?: string;
  calendarIconColor?: string;
  required?: boolean;
  min?: string;
  max?: string;
  ref?: React.Ref<HTMLInputElement>;
};

const InputDate = ({
  value,
  onChange,
  placeholder,
  type = "date",
  name = "",
  error = "",
  errorPlaceholderClass = "",
  className = "",
  labelClass = "",
  fullWidth = false,
  inputClass = "",
  backgroundInputColor = "bg-tp-background",
  calendarIconColor = "text-tp-divider",
  required = false,
  min,
  max,
  ref,
  ...rest
}: DateInputProps) => {
  const nameId = name || placeholder.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={`relative ${backgroundInputColor} rounded-sm ${className}`}>
      <div className="relative bg-inherit">
        <input
          ref={ref}
          value={value}
          onChange={onChange}
          type={type}
          defaultValue="2000-01-01"
          id={nameId}
          name={nameId}
          min={min}
          max={max || new Date().toISOString().split("T")[0]}
          placeholder=" "
          className={`peer text-tp-typography ${error ? "border-tp-warning" : "border-charcoal-600"} focus:border-tp-typography h-10 ${fullWidth ? "w-full" : "w-1/2"} rounded-sm border bg-transparent p-6 px-3 pr-10 focus:outline-none ${inputClass} /[&-moz-appearance:none] hide-datepicker-indicator relative flex items-center py-6`}
          {...rest}
        />

        <label
          htmlFor={nameId}
          className={`absolute left-1 mx-1 cursor-text px-1 transition-all ${backgroundInputColor} ${error ? "text-tp-warning" : "text-tp-typography"} peer-focus:text-charcoal-200 top-3 text-base peer-focus:-top-3 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-sm ${labelClass} `}
        >
          {placeholder} {required ? "*" : ""}
        </label>

        {/* TODO: custom icon works only in chrome browser, design in Firefox is not good but default datepicker works */}
        <div className="firefox-hidden pointer-events-none absolute top-1/2 right-3 z-10 flex -translate-y-1/2 items-center gap-2">
          <GoCalendar className={`${calendarIconColor} h-5 w-5`} />
        </div>
      </div>

      {error && (
        <div className={`absolute ${errorPlaceholderClass}`}>
          <Typography
            variant="label-small"
            className="text-tp-warning mt-0.5 ml-2.5"
          >
            {error}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default InputDate;
