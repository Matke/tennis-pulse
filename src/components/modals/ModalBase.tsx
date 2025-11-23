import Button, { type ButtonProps } from "@/components/buttons/Button";
import Typography from "@/components/text/Typography";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

export type ModalBaseProps = {
  title: string;
  open: boolean;
  onClose: () => void;
  buttons?: ButtonProps[];

  description?: string;
  icon?: React.ReactNode;
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
  description,
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

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center">
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

            {/* Buttons */}
            <div className="mt-4 flex w-full flex-col items-center justify-between gap-2 md:flex-row">
              <Button
                label="Yes"
                themeColor="warning"
                onClick={() => console.log("Na ovome kroku")}
                className="w-full"
                buttonSize="base"
                loaderWithLabel
              />
              <Button
                label="No"
                themeColor="tertiary"
                onClick={onClose}
                className="w-full"
                buttonSize="base"
                loaderWithLabel
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("modals") as HTMLElement,
  );
};

export default ModalBaseFM;
