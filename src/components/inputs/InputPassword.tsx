import { useState } from "react";

// Components
import type { InputProps } from "@/components/inputs/InputText";
import Typography from "@/components/text/Typography";

// framer motion
import { motion, AnimatePresence } from "framer-motion";

// Icons
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export type InputPasswordProps = InputProps & {
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
};

//! placeholder acts as id,name,and htmlFor in this version of Input Text Component
const InputPassword = ({
  value,
  onChange,
  onKeyDown,
  placeholder,
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
}: InputPasswordProps) => {
  const [togglePassword, setTogglePassword] = useState<boolean>(false);

  const nameId = name || placeholder.toLocaleLowerCase("en-US");

  return (
    <div className={backgroundInputColor}>
      <div className="relative bg-inherit">
        <input
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          type={togglePassword ? "text" : "password"}
          id={nameId}
          name={nameId}
          spellCheck={false}
          className={`peer text-tp-typography ${error ? "border-tp-warning" : "border-tp-typography"} focus:border-charcoal-600 h-10 ${fullWidth ? "w-full" : "w-1/2"} rounded-sm border bg-transparent p-6 px-3 pr-10 placeholder-transparent focus:outline-none ${className} `}
          placeholder={placeholder}
          autoComplete="on"
          {...rest}
        />
        <label
          htmlFor={nameId}
          className={`peer-placeholder-shown:text-tp-typography ${error ? "text-tp-warning" : "text-tp-typography"} peer-focus:text-charcoal-200 absolute -top-3 left-1 mx-1 cursor-text ${backgroundInputColor} px-1 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-1 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm ${labelClass} `}
        >
          {placeholder} {required ? "*" : ""}
        </label>
        {/* animated eye icon switch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={togglePassword ? "closed-eye" : "open-eye"}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-3.5 right-3"
          >
            {!togglePassword ? (
              <FaRegEye
                onClick={() => setTogglePassword(!togglePassword)}
                className="text-tp-typography ml-3 h-5 w-5 scale-99 cursor-pointer transition-all duration-300 hover:scale-100"
              />
            ) : (
              <FaRegEyeSlash
                onClick={() => setTogglePassword(!togglePassword)}
                className="text-tp-typography ml-3 h-5 w-5 scale-99 cursor-pointer transition-all duration-300 hover:scale-100"
              />
            )}
          </motion.div>
        </AnimatePresence>
        {/* // TODO: Password strong check */}
        {/* <div className="text-tp-typography absolute bottom-0 left-0 z-100 flex h-2 w-full cursor-pointer gap-0.5 rounded-full">
          <div className="h-2 w-1/4 bg-amber-200"></div>
          <div className="bg-crimson-carrot-400 h-2 w-1/4"></div>
          <div className="bg-olive-leaf-400 h-2 w-1/4"></div>
          <div className="bg-olive-leaf-800 h-2 w-1/4"></div>
        </div> */}
      </div>

      {/* below input field */}
      {error && (
        <Typography
          variant="label-small"
          className={`text-tp-warning mt-1.5 ml-2.5 ${errorPlaceholderClass}`}
        >
          {error}
        </Typography>
      )}
    </div>
  );
};

export default InputPassword;
