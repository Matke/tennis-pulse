import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown = ({
  buttonImg,
  items,
  label,
  className,
  width = "max-w-[200px]",
  menuPosition = "right",
  menuClassName,
}: any) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<any>(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className={`relative ${width} z-20`}>
      <button
        className={className}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
      >
        {buttonImg || label}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -5 }}
            transition={{ duration: 0.15 }}
            className={`absolute ${menuPosition}-0 ring-opacity-5 bg-tp-primary mt-2 w-40 rounded-md py-1 shadow-lg ring-1 ring-black ${menuClassName}`}
          >
            {items?.map((item: any, i: number) => (
              <div
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  item.action();
                  setOpen(false); // close after action is selected
                }}
                className={`hover:bg-sunbeam-yellow-300 text-tp-typography-secondary flex cursor-pointer items-center px-3 py-2 text-sm ${
                  item.borderTop ? "border-t" : ""
                }`}
              >
                {item.icon && <div className="w-5">{item.icon}</div>}
                <div className="ml-3 flex-1">{item.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
