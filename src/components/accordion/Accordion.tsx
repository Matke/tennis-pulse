import { useState } from "react";
import AccordionItem from "@/components/accordion/AccordionItem";

export type AccordionItemData = {
  title: string; // question
  text: string;
};

export type AccordionProps = {
  accordionData: AccordionItemData[];
  accordionBorderColor?: string;
  accordionWidth?: number;
  mainContainerClassName?: string;
  accordionItemColor?: string;
  accordionItemBackgroundColor?: string;
  accordionItemHoverColor?: string;
  accordionItemMainContainer?: string;
  textContentClass?: string;
};

const Accordion = ({
  accordionData,
  accordionBorderColor = "tp-card-back/70",
  accordionWidth = 190,
  mainContainerClassName = "",
  accordionItemBackgroundColor = "tp-primary",
  accordionItemHoverColor = "sunbeam-yellow-300",
  accordionItemMainContainer = "",
  textContentClass = "",
}: AccordionProps) => {
  const [currentTab, setCurrentTab] = useState<number>(-1);

  return (
    <div
      className={`border-${accordionBorderColor} w-${accordionWidth.toString()} border ${mainContainerClassName}`}
    >
      {accordionData.map((data: AccordionItemData, index: number) => {
        return (
          <AccordionItem
            num={index}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            title={data.title}
            text={data.text}
            key={index}
            accordionItemBackgroundColor={accordionItemBackgroundColor}
            accordionItemHoverColor={accordionItemHoverColor}
            textContentClass={textContentClass}
            accordionItemMainContainer={accordionItemMainContainer}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
