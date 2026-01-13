// icons
import { IoIosArrowUp } from "react-icons/io";

// motion framer
import { AnimatePresence, motion } from "framer-motion";

export type AccordionItemProps = {
  num: number;
  title: string;
  text: string;
  currentTab: number;
  accordionItemBackgroundColor: string;
  accordionItemHoverColor: string;
  textContentClass: string;
  accordionItemMainContainer: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>; // number is type of param for setCurrentTab
};

const AccordionItem = ({
  num,
  title,
  text,
  currentTab,
  accordionItemBackgroundColor,
  accordionItemHoverColor,
  textContentClass,
  accordionItemMainContainer,
  setCurrentTab,
}: AccordionItemProps) => {
  const isOpen = currentTab === num;

  const handleToggle = () => {
    setCurrentTab(isOpen ? -1 : num);
  };

  return (
    <div className={`w-full ${accordionItemMainContainer}`}>
      <div
        className={`bg-${accordionItemBackgroundColor} border-b-tp-background/10 hover:bg-${accordionItemHoverColor} group flex items-center justify-center gap-9 border-b p-5 hover:cursor-pointer`}
        onClick={() => handleToggle()}
      >
        <motion.p
          animate={{ opacity: isOpen ? 1 : 0.5 }}
          transition={{ duration: 0.25 }}
        >
          {num < 9 ? `0${num + 1}` : num + 1}
        </motion.p>
        <p className="flex-1">{title}</p>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 0 : 180 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          // style={{ display: "inline-block" }} sometimes this makes problem fixed
        >
          <IoIosArrowUp className="h-5 w-5 transition-all duration-300 group-hover:animate-bounce" />
        </motion.div>
      </div>
      <AnimatePresence mode="wait">
        <div
          className={` ${isOpen ? "p-5" : "p-0"} bg-tp-card-back/50 text-tp-typography w-full text-justify text-wrap ${textContentClass}`}
        >
          {isOpen && (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {text}
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
