import Tabs from "@/components/ui/Tabs";
import PageHeaderWrapper from "@/layouts/PageHeaderWrapper";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import SimpleCard from "@/components/ui/SimpleCard";
import { useAuth } from "@/store/useAuth";
import ChallengerView from "@/features/challenges/ChallengerView";
import OpponentView from "@/features/challenges/OpponentView";

const Challenge = () => {
  const [currentTab, setCurrentTab] = useState("profiles");
  const { userProfile } = useAuth();
  return (
    <div className="flex h-full flex-col justify-between gap-5">
      <PageHeaderWrapper title="Challenge">
        <Tabs
          currentTab={currentTab}
          changeTab={setCurrentTab}
          tabs={[
            {
              label: "profiles",
              icon: <CgProfile className="h-4 w-4" />,
            },
            {
              label: "location",
              icon: <FaMapMarkerAlt className="h-4 w-4" />,
            },
          ]}
          helperText="Search by"
        />
      </PageHeaderWrapper>

      <SimpleCard
        parentContainerClass="h-full w-full"
        disableHover
        className=""
        contentClassName=""
        disablePadding
      >
        <div className="flex h-full w-full flex-row items-center justify-center">
          <div className="border-tp-divider/20 hover:bg-tp-main-background/60 flex h-full w-1/2 cursor-pointer flex-col items-center justify-center border-r border-dashed transition-all duration-300">
            <ChallengerView userProfile={userProfile} />
          </div>
          <div className="hover:bg-tp-main-background/60 flex h-full w-1/2 cursor-pointer flex-col items-center justify-center transition-all duration-300">
            <OpponentView userProfile={userProfile} />
          </div>
        </div>
      </SimpleCard>
    </div>
  );
};

export default Challenge;
