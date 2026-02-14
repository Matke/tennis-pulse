import { useState } from "react";
// components
import Button from "@/components/buttons/Button";
import Typography from "@/components/text/Typography";
// icons
import { BiChevronDown } from "react-icons/bi";
import { TiTick } from "react-icons/ti";

const TICK_ICON = <TiTick className="h-5 w-5" />;

export type TabItem = {
  label: string;
  icon?: React.ReactNode;
};

export type TabsProps = {
  tabs: TabItem[];
  currentTab: string;
  helperText?: string;
  changeTab: (tabValue: string) => void;
  isDropdown?: boolean;
};

const Tabs = ({
  tabs,
  changeTab,
  currentTab,
  helperText,
  isDropdown = false,
}: TabsProps) => {
  // open/close state for dropdown view only
  const [isOpen, setIsOpen] = useState(false);

  if (isDropdown) {
    return (
      <div className="relative" aria-label="Tabs">
        {/* Open/Close button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-tp-typography bg-tp-main-background hover:bg-tp-divider/20 flex w-full min-w-[180px] items-center justify-between rounded-3xl px-4 py-2.5 text-sm font-semibold shadow-sm transition-all hover:cursor-pointer active:scale-[0.98]"
        >
          <div className="flex items-center gap-2">
            {TICK_ICON}
            <span className="uppercase">{currentTab.replace(/-/g, " ")}</span>
          </div>
          <BiChevronDown
            className={`text-tp-typography/50 ml-3 h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {/* Custom Dropdown Menu */}
        {isOpen && (
          <>
            {/* Backdrop to close when clicking outside instead of using ref */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />

            <ul className="ring-opacity-5 bg-charcoal-900/95 border-tp-divider/20 absolute z-20 mt-2 w-full overflow-hidden rounded-xl border p-1 shadow-xl ring-1 ring-black backdrop-blur-xs duration-150">
              {tabs.map((tab) => {
                const isActive = currentTab === tab.label;
                return (
                  <li key={tab.label}>
                    <button
                      disabled={isActive}
                      onClick={() => {
                        changeTab(tab.label);
                        setIsOpen(false);
                      }}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                        isActive
                          ? "text-tp-typography cursor-not-allowed shadow-md"
                          : "text-tp-typography/50 hover:bg-tp-divider/20 cursor-pointer"
                      }`}
                    >
                      {tab.icon && (
                        <span
                          className={isActive ? "text-white" : "text-gray-400"}
                        >
                          {tab.icon}
                        </span>
                      )}
                      <span className="uppercase">
                        {tab.label.replace(/-/g, " ")}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    );
  }

  return (
    <nav
      className="flex flex-row items-center justify-center gap-2 border-b py-0.5 md:border-none"
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
          label={tab.label.split("-").join(" ")}
          themeColor={currentTab === tab.label ? "primary" : "secondary"}
          className="shadow-tp-primary/50 border-none shadow-none brightness-90 hover:bg-transparent"
          buttonSize="medium"
          icon={tab.icon}
          uppercaseLabel
          iconPosition="right"
          // disabled={tab.label === "location"}
          onClick={() => changeTab(tab.label)}
        />
      ))}
    </nav>
  );
};

export default Tabs;
