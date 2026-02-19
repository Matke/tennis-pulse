import { useState } from "react";
// components
import Tabs from "@/components/ui/Tabs";
import ButtonIcon from "@/components/buttons/ButtonIcon";
import ChallengeListCard from "@/features/challenges/ChallengeListCard";
// context
import { useAuth } from "@/store/useAuth";
// icons
import { AiFillAlert } from "react-icons/ai";
import { BsFillSendCheckFill } from "react-icons/bs";
import { MdUpcoming } from "react-icons/md";
import { BsFillSendXFill } from "react-icons/bs";
import { FaFilter } from "react-icons/fa6";

// icons
const INCOMING_ICON = <AiFillAlert className="h-4 w-4" />;
const SENT_ICON = <BsFillSendCheckFill className="h-4 w-4" />;
const UPCOMING_ICON = <MdUpcoming className="h-4 w-4" />;
const REJECT_ICON = <BsFillSendXFill className="h-4 w-4" />;
const FILTER_ICON = <FaFilter className="h-5 w-5" />;

const ViewMatchups = () => {
  const [currentTab, setCurrentTab] = useState("incoming");
  const [currentTab2, setCurrentTab2] = useState("upcoming");
  const { userProfile } = useAuth();
  return (
    <>
      <div className="border-tp-divider/20 relative flex h-full min-h-0 w-1/2 cursor-pointer flex-col items-center justify-start border-r border-dashed">
        <div className="border-b-tp-main-background/80 flex w-full flex-row items-center justify-start gap-2 border-b border-dashed p-2">
          <Tabs
            isDropdown
            currentTab={currentTab}
            changeTab={setCurrentTab}
            tabs={[
              {
                label: "Incoming",
                icon: INCOMING_ICON,
              },
              {
                label: "Sent",
                icon: SENT_ICON,
              },
            ]}
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
        {/* List */}
        <div className="scrollbar-hide flex min-h-0 w-full flex-1 flex-col items-center justify-start gap-x-2 gap-y-2 overflow-y-auto p-4">
          <ChallengeListCard userProfile={userProfile} />
          <ChallengeListCard userProfile={userProfile} />
          <ChallengeListCard userProfile={userProfile} />
          <ChallengeListCard userProfile={userProfile} />
          <ChallengeListCard userProfile={userProfile} />
          <ChallengeListCard userProfile={userProfile} />
        </div>
      </div>

      {/* Right part */}
      <div className="relative flex h-full w-1/2 cursor-pointer flex-col items-center justify-center transition-all duration-300">
        <div className="border-b-tp-main-background/80 flex w-full flex-row items-center justify-start gap-2 border-b border-dashed p-2">
          <Tabs
            isDropdown
            currentTab={currentTab2}
            changeTab={setCurrentTab2}
            tabs={[
              {
                label: "Upcoming",
                icon: UPCOMING_ICON,
              },
              {
                label: "Rejected",
                icon: REJECT_ICON,
              },
            ]}
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

        <div className="flex h-full w-full items-start justify-center p-4">
          <ChallengeListCard userProfile={userProfile} isUpcoming />
        </div>
      </div>
    </>
  );
};

export default ViewMatchups;
