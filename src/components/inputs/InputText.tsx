// Components
import Typography from "@/components/text/Typography";

// framer motion
import { motion } from "framer-motion";
import { forwardRef } from "react";

// Icons
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosCloseCircle } from "react-icons/io";
// import { FaRegEye } from "react-icons/fa";

export type InputProps = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;

  type?: string;
  name?: string;
  error?: string;
  errorPlaceholderClass?: string;
  errorIcon?: React.ReactNode | null;
  successIcon?: React.ReactNode | null;
  isValidField?: boolean;
  className?: string;
  labelClass?: string;
  fullWidth?: boolean;
  isIconVisible?: boolean;
  backgroundInputColor?: string;
  required?: boolean;
};

//! placeholder acts as id,name,and htmlFor in this version of Input Text Component
const InputText = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      onChange,
      placeholder,
      type = "text",
      name = "",
      error = "",
      errorPlaceholderClass = "",
      errorIcon = null,
      successIcon = null,
      isValidField = false,
      className,
      labelClass = "",
      fullWidth = false,
      isIconVisible = true,
      backgroundInputColor = "bg-tp-background",
      required = false,
      ...rest
    },
    ref,
  ) => {
    // TODO: isValidField should relay on error, change code later

    const nameId = name || placeholder.toLocaleLowerCase("en-US");

    const iconError = errorIcon || (
      <IoIosCloseCircle className="text-tp-warning absolute top-3.5 right-3 ml-3 h-5 w-5" />
    );
    const iconSuccess = successIcon || (
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
            className={`peer text-tp-typography ${error ? "border-tp-warning" : "border-tp-typography"} focus:border-charcoal-600 h-10 ${fullWidth ? "w-full" : "w-1/2"} rounded-sm border bg-transparent p-6 px-3 pr-10 placeholder-transparent focus:outline-none`}
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
  },
);

export default InputText;
