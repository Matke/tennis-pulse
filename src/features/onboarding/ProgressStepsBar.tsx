import { TbListDetails } from "react-icons/tb";
import { MdSportsTennis } from "react-icons/md";
import { FaCheck, FaFlagCheckered } from "react-icons/fa";

import { FaCircleCheck, FaPerson } from "react-icons/fa6";
import { IoCheckmarkDone } from "react-icons/io5";

const ProgressStepsBar = () => {
  return (
    <ol className="flex w-full items-center text-xs font-medium text-gray-900 sm:text-base">
      <li className="after:bg-tp-primary text-tp-typography-secondary relative flex w-full after:absolute after:top-3 after:left-4 after:inline-block after:h-0.5 after:w-full after:content-[''] lg:after:top-5">
        <div className="z-10">
          <span className="bg-tp-primary mb-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-transparent text-sm lg:h-10 lg:w-10">
            <TbListDetails className="h-5 w-5" />
          </span>
          <span className="text-tp-typography">About me</span>
        </div>
      </li>

      <li className="after:bg-charcoal-800 relative flex w-full text-gray-900 after:absolute after:top-3 after:left-4 after:inline-block after:h-0.5 after:w-full after:content-[''] lg:after:top-5">
        <div className="z-10 flex flex-col items-center">
          <span className="bg-charcoal-800 border-charcoal-800 mb-3 flex h-6 w-6 items-center justify-center rounded-full border-2 text-sm lg:h-10 lg:w-10">
            {/* <FaCheck className="h-5 w-5" /> */}
            <FaPerson className="text-tp-card-back h-5 w-5" />
          </span>
          <span className="text-tp-typography/50">Bio</span>
        </div>
      </li>
      <li className="after:bg-charcoal-800 relative flex w-full text-gray-900 after:absolute after:top-3 after:left-4 after:inline-block after:h-0.5 after:w-full after:content-[''] lg:after:top-5">
        <div className="z-10 flex flex-col items-center">
          <span className="bg-charcoal-800 border-charcoal-800 mb-3 flex items-center justify-center rounded-full border-2 text-sm lg:h-10 lg:w-10">
            <MdSportsTennis className="text-tp-card-back h-5 w-5" />
          </span>
          <span className="text-tp-typography/50 text-wrap">Playstyle</span>
        </div>
      </li>
      <li className="relative flex text-gray-900">
        <div className="z-10">
          <span className="bg-charcoal-800 border-charcoal-800 mb-3 flex items-center justify-center rounded-full border-2 text-sm lg:h-10 lg:w-10">
            <FaFlagCheckered className="text-tp-card-back h-5 w-5" />
          </span>
          <span className="text-tp-typography/50">Finish</span>
        </div>
      </li>
    </ol>
  );
};

export default ProgressStepsBar;
