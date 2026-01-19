import ButtonIcon from "@/components/buttons/ButtonIcon";
import Typography from "@/components/text/Typography";
import { classNames } from "@/utils/common";
import React from "react";

export type FeatureItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  return (
    <div className="px-6">
      <ButtonIcon
        icon={icon}
        variant="filled"
        className={classNames(
          "animate-bg-shine rounded-lg border bg-size-[200%_100%] tracking-wide shadow duration-2200",
          "dark:border-zinc-800 dark:bg-[linear-gradient(110deg,#09090B,45%,#27272A,55%,#09090B)] dark:text-zinc-200",
          "border-zinc-300 bg-[linear-gradient(110deg,#FFF,45%,#E4E4E7,55%,#FFF)] text-zinc-800",
        )}
      />
      <Typography
        variant="subtitle"
        className="py-3 text-center font-bold text-pretty text-white"
      >
        {title}
      </Typography>
      <Typography variant="paragraph" className="text-justify text-pretty">
        {description}
      </Typography>
    </div>
  );
};

export default FeatureItem;
