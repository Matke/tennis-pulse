// utils
import { useSearchParams } from "react-router";
// components
import Tabs from "@/components/ui/Tabs";
import OpponentView from "@/features/challenges/OpponentView";
import ChallengerView from "@/features/challenges/ChallengerView";
import PageNavigationWrapper from "@/layouts/PageNavigationWrapper";
import SimpleCard from "@/components/ui/SimpleCard";
import Switcher from "@/components/ui/Switcher";
import ViewAllChallenges from "@/features/challenges/ViewAllChallenges";
// context
import { useAuth } from "@/store/useAuth";
// icons
import { FaHandshake } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { RiGroup3Fill } from "react-icons/ri";
import ViewMatchups from "@/features/challenges/ViewMatchups";

// TABS ICONS
const HANDSHAKE_ICON = <FaHandshake className="h-4 w-4" />;
const LIST_ALL_ICON = <FaListAlt className="h-4 w-4" />;
const MATCHUPS_ICON = <RiGroup3Fill className="h-4 w-4" />;

const Challenge = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { userProfile } = useAuth();

  const currentTab = searchParams.get("tab") || "new";

  const handleTabChange = (tabValue: string) => {
    searchParams.set("tab", tabValue);
    setSearchParams(searchParams); // so it re-renders page
  };

  return (
    <div className="flex h-full flex-col justify-between gap-5">
      <PageNavigationWrapper>
        <Tabs
          currentTab={currentTab}
          changeTab={handleTabChange}
          tabs={[
            {
              label: "new",
              icon: HANDSHAKE_ICON,
            },
            {
              label: "matchups",
              icon: MATCHUPS_ICON,
            },
            {
              label: "view-all",
              icon: LIST_ALL_ICON,
            },
          ]}
        />
        {currentTab === "new" && (
          <Switcher
            tooltipId="search-by"
            tooltipContent="Search by location or profiles"
          />
        )}
      </PageNavigationWrapper>

      {/* main view */}
      <SimpleCard
        parentContainerClass="flex-1 min-h-0 w-full"
        disableHover
        disablePadding
      >
        {currentTab === "new" && (
          <div className="flex h-full w-full flex-row items-center justify-center">
            <ChallengerView userProfile={userProfile} />
            <OpponentView userProfile={userProfile} />
          </div>
        )}

        {currentTab === "matchups" && <ViewMatchups />}

        {currentTab === "view-all" && <ViewAllChallenges />}
      </SimpleCard>
    </div>
  );
};

export default Challenge;
