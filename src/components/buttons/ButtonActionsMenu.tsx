import { useEffect, useRef, useState } from "react";
// components
import ButtonIcon from "@/components/buttons/ButtonIcon";
// icons
import { TiArrowSortedUp } from "react-icons/ti";
// framer motion
import { motion, AnimatePresence } from "framer-motion";

export type ButtonActionsData = {
  icon: React.ReactNode;
  action: () => void;
  tooltipId: string;
  tooltipContent: string;
};

export type ButtonActionsMenuProps = {
  actions: ButtonActionsData[];
  isMenuDisabled: boolean;
};

const ButtonActionsMenu = ({
  actions,
  isMenuDisabled,
}: ButtonActionsMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    // mt-0.5 moves whole menu down (also searchBar and createChallenge button in opponentview component)
    <div ref={ref} className="relative mt-0.5 flex flex-col items-center">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            // absolute will move this component into normal flow
            className="absolute bottom-0 z-50 mb-14 flex flex-col items-center gap-3"
          >
            {actions.map((item: ButtonActionsData) => (
              <ButtonIcon
                key={item.tooltipId}
                icon={item.icon}
                onClick={item.action}
                tooltipId={item.tooltipId}
                tooltipContent={item.tooltipContent}
                tooltipPlacement="top"
                variant="outlined"
                className="shadow-tp-primary border-none p-2.5 shadow-sm hover:border-none"
                backgroundColor="bg-tp-card-back"
                borderColor="border-none"
                hoverClass
                rounded
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        className={`z-10 flex items-center justify-center`}
      >
        <ButtonIcon
          variant="outlined"
          onClick={() => setIsOpen(!isOpen)}
          icon={<TiArrowSortedUp className="h-5 w-5" />}
          disabled={isMenuDisabled}
          className={`shadow-tp-primary z-10 flex items-center justify-center rounded-full p-2.5 shadow-sm transition-all duration-300`}
          backgroundColor="bg-tp-card-back"
          borderColor="border-none"
          hoverClass
          rounded
        />
      </motion.div>
    </div>
  );
};

export default ButtonActionsMenu;
