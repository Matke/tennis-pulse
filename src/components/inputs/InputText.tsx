import Typography from "@/components/text/Typography";
import { FaRegEye } from "react-icons/fa";
import { motion } from "framer-motion";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosCloseCircle } from "react-icons/io";

export type InputProps = {
  placeholder: string;
  value: string;

  type?: string;
  name?: string;
  error?: string;
  errorPlaceholderClass?: string;
  className?: string;
  fullWidth?: boolean;
  isIconVisible?: boolean;
  backgroundInputColor?: string;
  required?: boolean;
};

//! placeholder acts as id,name,and htmlFor in this version of Input Text Component
const InputText = ({
  value,
  placeholder,
  type = "text",
  name = "",
  error = "Invalid email or password",
  errorPlaceholderClass = "",
  className,
  fullWidth = false,
  isIconVisible = true,
  backgroundInputColor = "bg-tp-background",
  required = false,
  ...rest
}: InputProps) => {
  const nameId = name || placeholder.toLocaleLowerCase("en-US");

  return (
    <div className={backgroundInputColor}>
      <div className="relative bg-inherit">
        <input
          value={value}
          type={type}
          id={nameId}
          name={nameId}
          spellCheck={false}
          className={`peer text-tp-typography ${error ? "border-tp-warning" : "border-tp-typography"} focus:border-charcoal-600 placeholder: h-10 ${fullWidth ? "w-full" : "w-1/2"} rounded-sm border bg-transparent p-6 px-3 pr-10 placeholder-transparent focus:outline-none ${className}`}
          placeholder={placeholder}
          {...rest}
        />
        <label
          htmlFor={nameId}
          className="peer-placeholder-shown:text-tp-typography text-tp-typography peer-focus:text-charcoal-200 absolute -top-3 left-1 mx-1 cursor-text bg-inherit px-1 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-1 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm"
        >
          {placeholder} {required ? "*" : ""}
        </label>

        <div>
          {/* TODO: Change this for icon */}
          {/* <FaRegEye className="text-tp-divider absolute top-3.5 right-3 ml-3 h-5 w-5" /> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <IoIosCloseCircle className="text-tp-warning absolute top-3.5 right-3 ml-3 h-5 w-5" />
          </motion.div>
        </div>
      </div>
      {error && (
        <Typography
          variant="label-small"
          className={`text-tp-warning mt-1.5 ml-2.5`}
        >
          {error}
        </Typography>
      )}
    </div>
  );
};

export default InputText;
