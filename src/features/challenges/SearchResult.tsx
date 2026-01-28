// components
import Typography from "@/components/text/Typography";
// types
import type { UserProfileData } from "@/types/authTypes";
// utils
import { calculateAge } from "@/utils/common";

type SearchResultData = {
  data: Partial<UserProfileData>;
};

const SearchResult = ({ data }: SearchResultData) => {
  return (
    <div
      className="hover:bg-tp-main-background z-100 flex items-center justify-between gap-3 rounded-md p-2 not-disabled:active:scale-99 not-disabled:active:brightness-99"
      onClick={() => console.log(data.id)}
    >
      <div className="flex flex-1 items-center gap-2">
        <span
          className={`fi fi-${data?.nationality?.toLocaleLowerCase()}`}
        ></span>
        <Typography variant="label" className="whitespace-nowrap">
          {data?.firstName} {data?.lastName}
          <Typography
            variant="label-small"
            className="mt-0.5 whitespace-nowrap"
          >
            ({data?.userName})
          </Typography>
        </Typography>
      </div>
      <div className="flex items-center gap-1">
        <Typography variant="label-small" className="mt-0.5 whitespace-nowrap">
          {calculateAge(data?.dateOfBirth ?? "")} yrs
        </Typography>
      </div>
    </div>
  );
};

export default SearchResult;
