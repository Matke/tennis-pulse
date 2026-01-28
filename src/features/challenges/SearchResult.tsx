// import FillingLoader from "@/components/loaders/FillingLoader";
import Typography from "@/components/text/Typography";
// import { useAuth } from "@/store/useAuth";
import type { UserProfileData } from "@/types/authTypes";
import { calculateAge } from "@/utils/common";

const SearchResult = ({
  data,
  // loading,
}: {
  data: UserProfileData;
  // loading: boolean;
}) => {
  // const { userProfile } = useAuth();

  // if (!userProfile) return null;

  // if (loading) {
  //   <div className="flex items-center justify-center bg-amber-500">
  //     <FillingLoader classic />
  //   </div>;
  // }

  return (
    <div
      className="hover:bg-tp-main-background flex items-center justify-between gap-3 p-2"
      onClick={() => console.log(data.id)}
    >
      <div className="flex flex-1 items-center gap-2">
        <span
          className={`fi fi-${data?.nationality.toLocaleLowerCase()}`}
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
          {calculateAge(data?.dateOfBirth)} yrs
        </Typography>
      </div>
    </div>
  );
};

export default SearchResult;
