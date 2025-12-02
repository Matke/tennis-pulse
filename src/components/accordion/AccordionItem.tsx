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
    <div className={`item ${isOpen && "open"}`}>
      <p className="">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="">{title}</p>
      <p className="" onClick={() => handleToggle()}>
        {isOpen ? "-" : "+"}
      </p>
      <div className="">{isOpen ? text : ""}</div>
    </div>
  );
};

export default AccordionItem;
