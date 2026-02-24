// types
import type { ChallengeTabs } from "@/pages/Challenge";
// components / tabs
import ChallengerView from "@/features/challenges/ChallengerView";
import OpponentView from "@/features/challenges/OpponentView";
import ViewMatchups from "@/features/challenges/ViewMatchups";
import ViewAllChallenges from "@/features/challenges/ViewAllChallenges";

type ActiveChallengeTabProps = {
  currentTab: ChallengeTabs;
};

const ActiveChallengeTab = ({ currentTab }: ActiveChallengeTabProps) => {
  const renderActiveTab = () => {
    switch (currentTab) {
      case "new":
        return (
          <div className="flex h-full w-full flex-row items-center justify-center">
            <ChallengerView />
            <OpponentView />
          </div>
        );

      case "matchups":
        return <ViewMatchups />;

      case "view-all":
        return <ViewAllChallenges />;
    }
  };

  return renderActiveTab();
};

export default ActiveChallengeTab;
