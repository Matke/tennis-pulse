import { useState } from "react";
import AccordionItem from "@/components/accordion/AccordionItem";

export type AccordionItemData = {
  title: string; // question
  text: string;
};

export type AccordionProps = {
  accordionData: AccordionItemData[];
};

const Accordion = ({ accordionData }: AccordionProps) => {
  const [currentTab, setCurrentTab] = useState<number>(-1);

  return (
    <div className="">
      {accordionData.map((data: AccordionItemData, index: number) => {
        return (
          <AccordionItem
            num={index}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            title={data.title}
            text={data.text}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
