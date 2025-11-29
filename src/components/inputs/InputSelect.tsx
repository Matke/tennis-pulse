import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const InputSelect = ({
  label = "Select an option",
  options = [],
  value,
  floatingLabelBackground,
  onChange,
}: {
  value: any;
  label: any;
  floatingLabelBackground: any;
  options: any;
  onChange: any;
}) => {
  const isFloating = value && value !== "";

  return (
    <div className="relative">
      <select
        className="border-tp-typography text-tp-typography w-full appearance-none rounded-md border bg-transparent py-3 pl-2.5 focus:outline-none"
        value={value}
        onChange={onChange}
      >
        {/* hidden so that label can be moved */}
        <option value="" disabled hidden></option>
        <div className="flex">
          {options.map((opt: any) => (
            <option
              key={opt.value}
              value={opt.value}
              className="text-tp-typography-secondary bg-tp-typography hover:bg-tp-primary"
            >
              {opt.label}
            </option>
          ))}
        </div>
      </select>

      <label
        className={`text-tp-typography pointer-events-none absolute left-2.5 px-1 transition-all ${isFloating ? `-top-2 text-xs ${floatingLabelBackground} ` : "top-3"} `}
      >
        {label}
      </label>

      <div className="pointer-events-none absolute top-1/2 right-1 -translate-y-1/2">
        <IoMdArrowDropdown className="text-tp-typography/30 h-5 w-5" />
      </div>
    </div>
  );
};

export default InputSelect;
