import { FaRegEye } from "react-icons/fa";

export type InputProps = {
  placeholder: string;
  value: string;

  type?: string;
  name?: string;
  fullWidth?: boolean;
  backgroundInputColor?: string;
  className?: string;
  required?: boolean;
  helperText?: string; // could be used for helper text for input or error text
};

//! placeholder acts as id,name,and htmlFor in this version of Input Text Component
const InputText = ({
  value,
  placeholder,
  type = "text",
  fullWidth = false,
  backgroundInputColor = "bg-tp-background",
  helperText = "",
  required = false,
}: InputProps) => {
  return (
    <div className={backgroundInputColor}>
      <div className="relative bg-inherit">
        <input
          value={value}
          type={type}
          id={placeholder.toLocaleLowerCase("en-US")}
          name={placeholder.toLocaleLowerCase("en-US")}
          className={`peer text-tp-typography ring-tp-typography focus:ring-charcoal-600 placeholder: h-10 ${fullWidth ? "w-full" : "w-1/2"} rounded-sm bg-transparent p-6 px-3 placeholder-transparent ring-1 focus:outline-none`}
          placeholder={placeholder}
        />
        <label
          htmlFor={placeholder.toLocaleLowerCase("en-US")}
          className="peer-placeholder-shown:text-tp-typography text-tp-typography peer-focus:text-charcoal-200 absolute -top-3 left-1 mx-1 cursor-text bg-inherit px-1 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-1 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm"
        >
          {placeholder} {}
        </label>

        <div>
          <FaRegEye className="text-tp-divider absolute top-0 right-0 h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default InputText;
