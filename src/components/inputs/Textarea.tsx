// Components
import Typography from "@/components/text/Typography";

// framer motion
import { motion } from "framer-motion";
import type React from "react";

// Icons
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosCloseCircle } from "react-icons/io";

export type TextareaProps = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  clearValueOnError?: (value: string) => void; // only without react hook form
  placeholder: string;
  name?: string;
  disableResize?: boolean;
  rows?: number;
  cols?: number;
  error?: string;
  errorPlaceholderClass?: string;
  isValidField?: boolean;
  className?: string;
  labelClass?: string;
  fullWidth?: boolean;
  // isIconVisible?: boolean;
  backgroundInputColor?: string;
  required?: boolean;
  defaultValue?: string;
  ref?: React.Ref<HTMLTextAreaElement>; // react 19, refs can be passed directly as a prop
};

//! placeholder acts as id,name,and htmlFor in this version of Textarea
const Textarea = ({
  value,
  onChange,
  clearValueOnError,
  placeholder,
  name = "",
  disableResize = false,
  rows = 5,
  cols = 33,
  error = "",
  errorPlaceholderClass = "",
  isValidField = false,
  className,
  labelClass = "",
  fullWidth = false,
  // isIconVisible = true,
  backgroundInputColor = "bg-tp-background",
  required = false,
  defaultValue,
  ref,
  ...rest
}: TextareaProps) => {
  // TODO: isValidField should relay on error, change code later

  const nameId =
    name || placeholder.toLocaleLowerCase("en-US").replace(/\s+/g, "-");

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
        <textarea
          ref={ref}
          value={value}
          onChange={onChange}
          id={nameId}
          rows={rows}
          cols={cols}
          name={nameId}
          spellCheck={false}
          defaultValue={defaultValue}
          className={`peer text-tp-typography ${error ? "border-tp-warning" : "border-charcoal-600"} focus:border-tp-typography ${fullWidth ? "w-full" : "w-1/2"} scrollbar-hide rounded-sm border bg-transparent px-3 py-4 pr-3 placeholder-transparent focus:outline-none ${disableResize && "resize-none"} text-left whitespace-normal`}
          placeholder={placeholder}
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

export default Textarea;
