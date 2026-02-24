import { useEffect } from "react";
import { createPortal } from "react-dom";
// animations
import { motion, AnimatePresence, type Variants } from "framer-motion";
// components
import Button, { type ButtonProps } from "@/components/buttons/Button";
import Typography from "@/components/text/Typography";

export type CropModalProps = {
  open: boolean;
  onClose: () => void;
  buttons: ButtonProps[];
  title?: string;
  description?: string;
  modalBoxClassName?: string;
  buttonsLayoutClassName?: string;
  children?: React.ReactNode;
};

// animation setup for framer
const overlayVariants = {
  hidden: { opacity: 0, x: -5 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -5 },
};

// this animation variant will slide modal from top to center
const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -5,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const CropModal = ({
  open,
  onClose,
  buttons,
  title,
  description,
  modalBoxClassName = "",
  buttonsLayoutClassName = "",
  children,
}: CropModalProps) => {
  // closing with ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

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
            className={`border-tp-divider/20 bg-charcoal-900/95 relative z-10 w-[95%] rounded-md border-2 p-2 shadow-xl ${!modalBoxClassName ? "max-w-xl" : "max-w-2xl"}`}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >
            <div className="flex w-full flex-col gap-1">
              {title && (
                <Typography
                  variant="subtitle"
                  className="text-center font-bold text-white"
                >
                  {title}
                </Typography>
              )}
              {description && (
                <Typography
                  variant="paragraph"
                  className="text-tp-typography mt-4 mb-2 text-justify"
                >
                  {description}
                </Typography>
              )}
              {children && (
                <div className="my-6 -mt-2 flex h-[485px] w-full flex-col overflow-x-hidden">
                  {children}
                </div>
              )}
            </div>

            {/* Buttons */}
            <div
              className={`flex flex-row items-center justify-around gap-2 md:w-full md:gap-x-3 ${buttonsLayoutClassName}`}
            >
              {buttons.map((buttonData: ButtonProps, index: number) => (
                <Button
                  key={index}
                  type={buttonData.type}
                  label={buttonData.label}
                  themeColor={buttonData.themeColor}
                  onClick={buttonData.onClick}
                  className={buttonData.className}
                  disabled={buttonData.disabled}
                  isLoading={buttonData.isLoading}
                  buttonSize={buttonData.buttonSize}
                  loaderWithLabel={buttonData.loaderWithLabel}
                  loaderText={buttonData.loaderText}
                  icon={buttonData.icon}
                  iconPosition={buttonData.iconPosition}
                  uppercaseLabel={buttonData.uppercaseLabel}
                  formId={buttonData.formId}
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

export default CropModal;
