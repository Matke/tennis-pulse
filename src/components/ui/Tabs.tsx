import Button from "@/components/buttons/Button";
import Typography from "@/components/text/Typography";
// import { classNames } from "@/utils/common";

export type TabItem = {
  label: string;
  icon?: React.ReactNode;
};

const Tabs = ({
  helperText,
  tabs,
  currentTab,
  changeTab,
}: {
  tabs: TabItem[];
  currentTab: string;
  helperText: string;
  changeTab: (tab: string) => void;
}) => {
  return (
    <nav
      className="flex flex-row items-center justify-center gap-0 border-b py-0.5 md:border-none"
      aria-label="Tabs"
    >
      {helperText && (
        <Typography className="mr-2 font-bold" variant="label-small">
          {helperText}
        </Typography>
      )}
      {tabs.map((tab, tabIdx) => (
        <Button
          key={tabIdx}
          label={tab.label}
          themeColor={currentTab === tab.label ? "primary" : "secondary"}
          className="shadow-tp-primary/30 rounded-none border-none shadow-none brightness-90 hover:bg-transparent"
          buttonSize="medium"
          icon={tab.icon}
          uppercaseLabel
          disabled={tab.label === "location"}
          onClick={() => changeTab(tab.label)}
        />
      ))}
    </nav>
  );
};

export default Tabs;
