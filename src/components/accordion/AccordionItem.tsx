// icons
// import { IoIosArrowDown } from "react-icons/io"; motion is automatically rotating one arrow
import { IoIosArrowUp } from "react-icons/io";

// motion framer
import { AnimatePresence, motion } from "framer-motion";

export type AccordionItemProps = {
  num: number;
  title: string;
  text: string;
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>; // number is type of param for setCurrentTab
};

const AccordionItem = ({
  num,
  title,
  text,
  currentTab,
  setCurrentTab,
}: AccordionItemProps) => {
  const isOpen = currentTab === num;

  const handleToggle = () => {
    setCurrentTab(isOpen ? -1 : num);
  };

  return (
    <div className={"w-full"}>
      <div
        className="bg-tp-primary border-b-tp-background/10 hover:bg-sunbeam-yellow-300 flex items-center justify-center gap-9 border-b p-5"
        onClick={() => handleToggle()}
      >
        <p className="">{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className="flex-1">{title}</p>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 0 : 180 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          // style={{ display: "inline-block" }} sometimes this makes problem fixed
        >
          <IoIosArrowUp className="h-5 w-5" />
        </motion.div>
      </div>
      <AnimatePresence mode="wait">
        <div
          className={` ${isOpen ? "p-5" : "p-0"} bg-tp-secondary/70 w-full text-justify text-wrap`}
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
