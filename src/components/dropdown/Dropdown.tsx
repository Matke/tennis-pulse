import React, { useState, useRef, useEffect } from "react";

// framer
import { motion, AnimatePresence } from "framer-motion";
import { HiDotsVertical } from "react-icons/hi";

export type MenuItem = {
  label: string;
  icon: React.ReactNode;
  action: () => void;
  borderTop?: boolean;
};

export type DropdownProps = {
  buttonIcon?: React.ReactNode;
  label?: string;
  items?: MenuItem[];
  className?: string;
  width?: string;
  menuPosition?: string;
  menuClassName?: string;
  borderTop?: boolean;
};

const Dropdown = ({
  buttonIcon,
  items,
  label,
  className,
  width = "max-w-[200px]",
  menuPosition = "",
  menuClassName = "",
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className={`relative ${width} z-50`}>
      <div
        className={`hover:rounded-full ${className}`}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
      >
        {buttonIcon || label || (
          <HiDotsVertical className="hover:text-tp-typography-secondary h-6 w-6" />
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -5 }}
            transition={{ duration: 0.15 }}
            className={`absolute ${menuPosition} ring-opacity-5 bg-tp-card-back ring-charcoal-600 mt-2 w-40 rounded-md shadow-lg ring-1 ${menuClassName}`}
          >
            {items?.map((item: MenuItem, i: number) => {
              const isFirst = i === 0;
              const isLast = i === items.length - 1;

              return (
                <div
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    item.action();
                    setOpen(false); // close after action is selected
                  }}
                  className={`group hover:border-tp-primary hover:bg-tp-primary ${isLast && "hover:rounded-b-md"} ${isFirst && "hover:rounded-t-md"} text-tp-typography flex cursor-pointer items-center px-3 py-2.5 text-sm ${
                    item.borderTop ? "border-tp-typography/20 border-t" : ""
                  }`}
                >
                  {/* icon item */}
                  {item.icon && (
                    <div className="group-hover:text-tp-typography-secondary w-5">
                      {item.icon}
                    </div>
                  )}

                  {/* label menu item */}
                  <div className="group-hover:text-tp-typography-secondary ml-3 flex-1">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
