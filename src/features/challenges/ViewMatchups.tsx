import { useState } from "react";
// components
import ChallengeListCard from "@/features/challenges/ChallengeListCard";
// context
import { useAuth } from "@/store/useAuth";
// icons
import { AiFillAlert } from "react-icons/ai";
import { BsFillSendCheckFill } from "react-icons/bs";
import { MdUpcoming } from "react-icons/md";
import { BsFillSendXFill } from "react-icons/bs";
import MatchupListColumn from "@/features/challenges/MatchupListColumn";

// tab icons
const INCOMING_ICON = <AiFillAlert className="h-4 w-4" />;
const SENT_ICON = <BsFillSendCheckFill className="h-4 w-4" />;
const UPCOMING_ICON = <MdUpcoming className="h-4 w-4" />;
const REJECT_ICON = <BsFillSendXFill className="h-4 w-4" />;

type RequestsTab = "incoming" | "sent" | "cancelled";
type HistoryTab = "upcoming" | "rejected";

const ViewMatchups = () => {
  const { userProfile } = useAuth();

  // current tabs
  const [requestsTab, setRequestsTab] = useState<RequestsTab>("incoming");
  const [historyTab, setHistoryTab] = useState<HistoryTab>("upcoming");

  return (
    <>
      {/* left side - Incoming, sent and cancelled challenges */}
      <MatchupListColumn<RequestsTab>
        currentTab={requestsTab}
        onTabChange={setRequestsTab}
        tabs={[
          {
            label: "incoming",
            icon: INCOMING_ICON,
          },
          {
            label: "sent",
            icon: SENT_ICON,
          },
          {
            label: "cancelled",
            icon: REJECT_ICON,
          },
        ]}
      >
        <ChallengeListCard userProfile={userProfile} />
      </MatchupListColumn>

      {/* right side - Upcoming and rejected */}
      <MatchupListColumn<HistoryTab>
        currentTab={historyTab}
        onTabChange={setHistoryTab}
        tabs={[
          {
            label: "upcoming",
            icon: UPCOMING_ICON,
          },
          {
            label: "rejected",
            icon: REJECT_ICON,
          },
        ]}
      >
        <ChallengeListCard userProfile={userProfile} isUpcoming />
      </MatchupListColumn>
    </>
  );
};

export default ViewMatchups;
