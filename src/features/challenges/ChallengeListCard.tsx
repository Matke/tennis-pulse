import Typography from "@/components/text/Typography";
import type { UserProfileData } from "@/types/authTypes";
import { TiTick } from "react-icons/ti";
import { TiTimes } from "react-icons/ti";
import { TiLocation } from "react-icons/ti";
import { TiThList } from "react-icons/ti";
import { MdEdit } from "react-icons/md";
import { GiTennisCourt } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import ButtonIcon from "@/components/buttons/ButtonIcon";

// action icons
const TICK_ICON = (
  <TiTick className="text-tp-typography/60 group-hover/action-buttons:text-tp-tertiary h-5 w-5" />
);
const TIMES_ICON = (
  <TiTimes className="text-tp-typography/60 group-hover/action-buttons:text-tp-warning h-5 w-5" />
);
const DETAILS_ICON = (
  <TiThList className="text-tp-typography/60 group-hover/action-buttons:text-tp-primary h-5 w-5" />
);

const EDIT_ICON = (
  <MdEdit className="text-tp-typography/60 group-hover/action-buttons:text-tp-secondary h-5 w-5" />
);

const ChallengeListCard = ({
  userProfile,
  isUpcoming = false,
}: {
  userProfile: UserProfileData;
  isUpcoming?: boolean;
}) => {
  return (
    <div className="hover:bg-tp-divider/10 group/show-actions shadow-tp-primary/30 grid h-fit w-full grid-cols-[max-content_1fr] rounded-3xl p-3 shadow-xs">
      {/* Profile image */}
      <div className="group relative">
        <div className="absolute inset-0.5 h-24 w-24 rounded-full bg-linear-to-r from-orange-600 to-yellow-200 opacity-75 blur transition duration-1000"></div>
        <div className="relative">
          {/* Profile image part */}
          {userProfile?.profileImage ? (
            <img
              src={userProfile?.profileImage}
              className="h-25 w-25 rotate-4 rounded-full object-cover"
              alt="Profile"
            />
          ) : (
            <div className="h-20 w-20 transform rounded-full mask-b-from-100% object-cover transition-all duration-500 group-hover:scale-110">
              {""}
            </div>
          )}
        </div>
      </div>
      {/* End of profile image */}
      <div className="flex justify-between p-1.5 pl-5">
        <div className="grid grid-cols-2 grid-rows-3 gap-3">
          <Typography variant="paragraph" className="col-span-2 font-bold">
            {userProfile?.firstName} {userProfile?.lastName}
          </Typography>
          <div className="flex items-center gap-2">
            <MdDateRange className="text-tp-typography/80 h-5 w-5" />
            <Typography variant="label-small" className="font-bold">
              08-07-2026
            </Typography>
          </div>
          <div className="flex items-center gap-2">
            <MdAccessTime className="text-tp-typography/80 h-5 w-5" />
            <Typography variant="label-small" className="font-bold">
              18:00
            </Typography>
          </div>

          <div className="flex items-center gap-2">
            <TiLocation className="text-tp-typography/80 h-5 w-5" />
            <Typography variant="label-small" className="font-bold">
              Bane Kort
            </Typography>
          </div>
          <div className="flex items-center gap-2">
            <GiTennisCourt className="text-tp-typography/80 h-5 w-5" />
            <Typography variant="label-small" className="font-bold">
              Hard
            </Typography>
          </div>
        </div>
        <div
          className={`hidden ${isUpcoming ? "grid-cols-1" : "grid-cols-2"} items-start gap-1.5 group-hover/show-actions:grid`}
        >
          {!isUpcoming && (
            <ButtonIcon
              icon={TICK_ICON}
              className={`group/action-buttons hover:bg-tp-divider/20`}
              themeColor="blank"
              borderColor="border-none"
              rounded
              tooltipContent="Accept"
              tooltipId="accept-challenge"
              tooltipPlacement="bottom"
            />
          )}

          <ButtonIcon
            icon={TIMES_ICON}
            className={`group/action-buttons hover:bg-tp-divider/20`}
            themeColor="blank"
            borderColor="border-none"
            rounded
            tooltipContent="Reject"
            tooltipId="reject-challenge"
            tooltipPlacement="bottom"
          />

          {!isUpcoming && (
            <ButtonIcon
              icon={EDIT_ICON}
              className={`group/action-buttons mt-0.5 hover:bg-zinc-800`}
              themeColor="blank"
              rounded
              borderColor="border-none"
              tooltipContent="Change"
              tooltipId="change-challenge"
              tooltipPlacement="top"
            />
          )}

          <ButtonIcon
            icon={DETAILS_ICON}
            className={`group/action-buttons mt-0.5 hover:bg-zinc-800`}
            themeColor="blank"
            rounded
            borderColor="border-none"
            tooltipContent="Details"
            tooltipId="details-challenge"
            tooltipPlacement="top"
          />
        </div>
      </div>
    </div>
  );
};

export default ChallengeListCard;
