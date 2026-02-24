import ButtonIcon from "@/components/buttons/ButtonIcon";
import Tabs, { type TabItem } from "@/components/ui/Tabs";
import type { Dispatch, SetStateAction } from "react";
import { FaFilter } from "react-icons/fa6";

const FILTER_ICON = <FaFilter className="h-5 w-5" />;

type MatchupListColumnProps<T extends string> = {
  currentTab: T;
  onTabChange: Dispatch<SetStateAction<T>>;
  tabs: TabItem<T>[];
  children: React.ReactNode;
};

const MatchupListColumn = <T extends string>({
  currentTab,
  onTabChange,
  tabs,
  children,
}: MatchupListColumnProps<T>) => {
  return (
    <div className="border-tp-divider/20 relative flex h-full min-h-0 w-1/2 cursor-pointer flex-col items-center justify-start border-r border-dashed">
      <div className="border-b-tp-main-background/80 flex w-full flex-row items-center justify-start gap-2 border-b border-dashed p-2">
        <Tabs
          isDropdown
          currentTab={currentTab}
          changeTab={onTabChange}
          tabs={tabs}
        />
        <ButtonIcon
          icon={FILTER_ICON}
          variant="blank"
          className="hover:hover:bg-tp-divider/20 p-2.5 shadow-sm hover:border-none"
          backgroundColor="bg-tp-main-background"
          iconColor="text-tp-typography"
          borderColor="border-none"
          hoverClass
          rounded
        />
      </div>
      {/* List of items as children */}
      <div className="scrollbar-hide flex min-h-0 w-full flex-1 flex-col items-center justify-start gap-x-2 gap-y-2 overflow-y-auto p-4">
        {children}
      </div>
    </div>
  );
};

export default MatchupListColumn;
