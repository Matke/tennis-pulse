// Components
import Typography from "@/components/text/Typography";

// framer motion
import { motion } from "framer-motion";
import type React from "react";

// Icons
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosCloseCircle } from "react-icons/io";

export type InputProps = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  clearValueOnError?: (value: string) => void; // only without react hook form
  placeholder: string;

  type?: string;
  name?: string;
  error?: string;
  errorPlaceholderClass?: string;
  isValidField?: boolean;
  className?: string;
  labelClass?: string;
  fullWidth?: boolean;
  inputClass?: string;
  // isIconVisible?: boolean;
  backgroundInputColor?: string;
  required?: boolean;
  ref?: React.Ref<HTMLInputElement>; // react 19, refs can be passed directly as a prop
};

//! placeholder acts as id,name,and htmlFor in this version of Input Text Component
const InputText = ({
  value,
  onChange,
  clearValueOnError,
  placeholder,
  type = "text",
  name = "",
  error = "",
  errorPlaceholderClass = "",
  isValidField = false,
  className,
  labelClass = "",
  fullWidth = false,
  inputClass = "",
  // isIconVisible = true,
  backgroundInputColor = "bg-tp-background",
  required = false,
  ref,
  ...rest
}: InputProps) => {
  // TODO: isValidField should relay on error, change code later

  const nameId = name || placeholder.toLocaleLowerCase("en-US");

  const iconError: React.ReactNode = (
    <IoIosCloseCircle
      className="text-tp-warning absolute top-3.5 right-3 ml-3 h-5 w-5 cursor-pointer transition-all duration-300 hover:scale-110"
      onMouseDown={(e) => {
        if (clearValueOnError) {
          e.preventDefault();
          clearValueOnError("");
        }
      }}
    />
  );
  const iconSuccess: React.ReactNode = (
    <GoCheckCircleFill className="text-tp-tertiary absolute top-3.5 right-3 ml-3 h-5 w-5" />
  );

  return (
    <div className={`${backgroundInputColor} rounded-sm ${className}`}>
      <div className="relative bg-inherit">
        <input
          ref={ref}
          value={value}
          onChange={onChange}
          type={type}
          id={nameId}
          name={nameId}
          spellCheck={false}
          className={`peer text-tp-typography ${error ? "border-tp-warning" : "border-charcoal-600"} focus:border-tp-typography h-10 ${fullWidth ? "w-full" : "w-1/2"} rounded-sm border bg-transparent p-6 px-3 pr-10 placeholder-transparent focus:outline-none ${inputClass}`}
          placeholder={placeholder}
          autoComplete={type === "email" ? "email" : "on"}
          {...rest}
        />
        <label
          htmlFor={nameId}
          className={`peer-placeholder-shown:text-tp-typography ${error ? "text-tp-warning" : "text-tp-typography"} peer-focus:text-charcoal-200 absolute -top-3 left-1 mx-1 cursor-text ${backgroundInputColor} px-1 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-1 peer-placeholder-shown:bg-none peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm ${labelClass}`}
        >
          {placeholder} {required ? "*" : ""}
        </label>

        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {error && iconError}
            {isValidField && iconSuccess}
          </motion.div>
        </div>
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

export default InputText;
