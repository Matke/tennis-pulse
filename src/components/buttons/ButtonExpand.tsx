import { motion } from "framer-motion";

import { Link } from "react-router";

export type ButtonExpandProps = {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  label: string;
  icon: React.ReactNode;
  href?: string;
  className?: string;
  disabled?: boolean;
  labelClass?: string;
};

const buttonVariants = {
  rest: {
    width: 50,
    transition: { duration: 0.3 },
  },
  hover: {
    width: 220,
    transition: { duration: 0.3 },
  },
};

const labelVariants = {
  rest: {
    opacity: 0,
    x: 0, // here -10 might work better
    transition: { duration: 0.1 },
  },
  hover: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, delay: 0.15 },
  },
};

const ButtonExpand = ({
  label,
  onClick,
  icon = true,
  href = "",
  disabled = false,
  className,
  labelClass = "",
  ...rest
}: ButtonExpandProps) => {
  const btnBasic = (
    <motion.button
      type="button"
      onClick={onClick}
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      disabled={disabled}
      className={`group ${!disabled ? "bg-tp-background" : "bg-tp-background/50"} hover:bg-charcoal-800 text-tp-typography flex h-[50px] cursor-pointer items-center overflow-hidden rounded-full select-none not-disabled:active:scale-96 not-disabled:active:brightness-98 ${className}`}
      {...rest}
    >
      <div
        className={`text-tp-typography z-100 ml-2.5 flex min-h-full min-w-[30px] cursor-pointer items-center justify-center ${disabled && "opacity-50"}`}
      >
        {icon}
      </div>

      <motion.div
        variants={labelVariants}
        className={`text-tp-typography z-100 flex h-full w-full shrink-0 items-center justify-start text-center whitespace-nowrap ${labelClass}`}
      >
        {label}
      </motion.div>
    </motion.button>
  );

  return href ? <Link to={href}>{btnBasic}</Link> : btnBasic;
};

export default ButtonExpand;
