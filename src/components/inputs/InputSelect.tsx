// icons
import Typography from "@/components/text/Typography";
import { IoMdArrowDropdown } from "react-icons/io";

export type InputSelectOption = {
  [index: string]: string | number;
  label: string;
  value: string | number;
};

export type InputSelectProps = {
  label: string;
  options: string[] | InputSelectOption[];
  value: string | number;
  id: string;
  name?: string;
  labelKey?: string;
  valueKey?: string;
  floatingLabelBackground?: string;
  error?: string;
  errorPlaceholderClass?: string;
  className?: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

const InputSelect = ({
  label = "Select an option",
  options = [],
  value,
  id,
  name = "",
  labelKey = "label",
  valueKey = "value",
  floatingLabelBackground,
  error = "",
  errorPlaceholderClass,
  className = "",
  onChange,
}: InputSelectProps) => {
  const isFloating = value && value !== "";

  return (
    <div className={`relative ${className}`}>
      {/* appearance none - default arrow will disappear and will be changed later */}
      <select
        id={id}
        name={name || label}
        value={value}
        onChange={onChange}
        className={`${!error ? "border-charcoal-600" : "border-tp-warning"} text-tp-typography focus:border-tp-typography w-full appearance-none rounded-md border bg-transparent py-3 pl-3 focus:outline-none`}
      >
        {/* hidden so that label can be moved */}
        <option value="" disabled hidden></option>
        <optgroup>
          {options?.map((option: string | InputSelectOption, index: number) => (
            <option
              key={index}
              value={typeof option === "string" ? option : option[valueKey]}
              className="text-tp-typography-secondary bg-tp-typography"
            >
              {typeof option === "string" ? option : option[labelKey]}
            </option>
          ))}
        </optgroup>
      </select>

      <label
        className={`text-tp-typography pointer-events-none absolute left-2.5 px-1 transition-all ${isFloating ? `-top-2 text-[12.5px] ${floatingLabelBackground} ` : "top-3"} `}
      >
        {label}
      </label>

      {/* custom icon for dropdown */}
      <div className="pointer-events-none absolute top-1/2 right-1 -translate-y-1/2">
        <IoMdArrowDropdown className="text-tp-typography/30 h-5 w-5" />
      </div>

      {error && (
        <div className={`absolute ${errorPlaceholderClass}`}>
          <Typography
            variant="label-small"
            className={`text-tp-warning mt-0.5 ml-2.5`}
          >
            {error}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default InputSelect;
