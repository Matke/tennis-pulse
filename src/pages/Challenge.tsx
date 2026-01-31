import { useState } from "react";
// components
import Tabs from "@/components/ui/Tabs";
import OpponentView from "@/features/challenges/OpponentView";
import ChallengerView from "@/features/challenges/ChallengerView";
import PageNavigationWrapper from "@/layouts/PageNavigationWrapper";
import SimpleCard from "@/components/ui/SimpleCard";
import Switcher from "@/components/ui/Switcher";
// context
import { useAuth } from "@/store/useAuth";
// icons
import { FaHandshake } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";

const Challenge = () => {
  const [currentTab, setCurrentTab] = useState("create");
  const { userProfile } = useAuth(); // challenger view data
  return (
    <div className="flex h-full flex-col justify-between gap-5">
      <PageNavigationWrapper>
        <Tabs
          currentTab={currentTab}
          changeTab={setCurrentTab}
          tabs={[
            {
              label: "create",
              icon: <FaHandshake className="h-4 w-4" />,
            },
            {
              label: "view-all",
              icon: <FaListAlt className="h-4 w-4" />,
            },
          ]}
        />
        {currentTab !== "view-all" && (
          <Switcher
            tooltipId="search-by"
            tooltipContent="Search by location or profiles"
          />
        )}
      </PageNavigationWrapper>

      <SimpleCard
        parentContainerClass="h-full w-full"
        disableHover
        className=""
        contentClassName=""
        disablePadding
      >
        <div className="flex h-full w-full flex-row items-center justify-center">
          {/* left side */}
          <ChallengerView userProfile={userProfile} />
          {/* right side */}
          <OpponentView userProfile={userProfile} />
        </div>
      </SimpleCard>
    </div>
  );
};

export default Challenge;
