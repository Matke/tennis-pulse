import { useState } from "react";

// Components
import type { InputProps } from "@/components/inputs/InputText";
import Typography from "@/components/text/Typography";

// framer motion
import { motion, AnimatePresence } from "framer-motion";

// Icons
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Chip from "@/components/ui/Chip";

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
  error = "Invalid email or password",
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
  // toggle eye icon and type of input to reveal password
  const [togglePassword, setTogglePassword] = useState<boolean>(false);

  const nameId = name || placeholder.toLocaleLowerCase("en-US");

  return (
    <div className={`${backgroundInputColor} rounded-sm ${className}`}>
      <div className="relative bg-inherit">
        <input
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          type={togglePassword ? "text" : "password"}
          id={nameId}
          name={nameId}
          spellCheck={false}
          className={`peer text-tp-typography ${error ? "border-tp-warning" : "border-tp-typography"} focus:border-charcoal-600 h-10 ${fullWidth ? "w-full" : "w-1/2"} rounded-sm border bg-transparent p-6 px-3 pr-28 placeholder-transparent focus:outline-none`}
          placeholder={placeholder}
          autoComplete="on"
          {...rest}
        />
        <label
          htmlFor={nameId}
          className={`peer-placeholder-shown:text-tp-typography ${error ? "text-tp-warning" : "text-tp-typography"} peer-focus:text-charcoal-200 absolute -top-3 left-1 mx-1 cursor-text ${backgroundInputColor} px-1 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-1 peer-placeholder-shown:bg-none peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm ${labelClass} `}
        >
          {placeholder} {required ? "*" : ""}
        </label>
        {/* animated eye icon switch */}
        <div className="inline-flex items-center justify-center">
          <Chip
            // weak, fair , good ,strong
            label="weak"
            themeColor="error"
            containerClass="absolute top-4 right-12 cursor-pointer"
            tooltipId="password-check"
            tooltipContent="Your password must use more letters sfdfsd sfds dfs dfs dfsdf dsfsdf "
          />
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
        </div>
      </div>
      {/* below input field */}
      {error && (
        <div className={`absolute ${errorPlaceholderClass}`}>
          <Typography
            variant="label-small"
            className={`text-tp-warning mt-1 ml-2.5`}
          >
            {error}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default InputPassword;
