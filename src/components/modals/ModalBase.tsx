import Button, { type ButtonProps } from "@/components/buttons/Button";
import Typography from "@/components/text/Typography";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

export type ModalBaseProps = {
  title: string;
  open: boolean;
  onClose: () => void;
  buttons: ButtonProps[];

  description?: string;
  divider?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

// animation setup for framer
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 25 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 25 },
};

const ModalBaseFM = ({
  title,
  icon,
  buttons,
  description,
  divider = false,
  children,
  open,
  onClose,
}: ModalBaseProps) => {
  // closing with ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // animation wont execute on close if null is returned
  // if (!open) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 mb-3 flex items-end justify-center md:mb-0 md:items-center">
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 backdrop-blur-xs"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal Box */}
          {/* 900/95 adds transparency to the modal box */}
          <motion.div
            className="border-tp-divider/20 bg-charcoal-900/95 relative z-10 w-[90%] max-w-sm rounded-md border-2 p-6 shadow-xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >
            {/* Icon */}
            <div className="grid place-items-center gap-3 p-4 text-center">
              {icon && <div className="text-tp-primary">{icon}</div>}

              {/* Title */}
              <Typography
                variant="paragraph-medium"
                className="font-semibold tracking-wide"
              >
                {title}
              </Typography>

              {/* Description */}
              <Typography variant="paragraph" className="text-tp-typography/80">
                {description}
              </Typography>
            </div>

            {children && (
              <div className="my-6 overflow-x-hidden">{children}</div>
            )}

            {/* adds line between buttons and content */}
            {divider && (
              <div className="border-tp-divider/20 absolute inset-x-0 bottom-0 h-[30%] w-full border-t" />
            )}

            {/* Buttons */}
            <div className="mt-4 flex flex-row items-center justify-around gap-2 md:w-full md:gap-x-3">
              {buttons.map((buttonData) => (
                <Button
                  label={buttonData.label}
                  themeColor={buttonData.themeColor}
                  onClick={buttonData.onClick}
                  className={buttonData.className}
                  disabled={buttonData.disabled}
                  isLoading={buttonData.isLoading}
                  buttonSize={buttonData.buttonSize}
                  loaderWithLabel={buttonData.loaderWithLabel}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("modals") as HTMLElement,
  );
};

export default ModalBaseFM;
