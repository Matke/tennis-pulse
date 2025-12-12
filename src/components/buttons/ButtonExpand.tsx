import GLogo from "@/components/ui/GLogo";
import { motion } from "framer-motion";
import { HiLink } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaGoogle } from "react-icons/fa6";

export type ButtonExpand = {
  label: string;
  icon: React.ReactNode;
  className?: string;
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
    x: -10,
    transition: { duration: 0.1 },
  },
  hover: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, delay: 0.15 },
  },
};

const ButtonExpand = ({ label, icon, className }: ButtonExpand) => {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      variants={buttonVariants}
      className={`group bg-tp-background hover:bg-charcoal-800 text-tp-typography flex h-[50px] cursor-pointer items-center overflow-hidden rounded-full select-none ${className}`}
    >
      <FaGoogle className="text-tp-typography z-100 ml-2.5 min-h-full min-w-[30px] cursor-pointer" />

      <motion.div
        variants={labelVariants}
        className="text-tp-typography z-100 flex h-full w-full shrink-0 items-center justify-start pl-3 text-center whitespace-nowrap"
      >
        Continue with Google
      </motion.div>
    </motion.button>
  );
};

export default ButtonExpand;
