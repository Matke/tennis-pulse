import Typography from "@/components/text/Typography";
import { useAuth } from "@/store/useAuth";
import { calculateAge } from "@/utils/common";

const SearchResult = () => {
  const { userProfile } = useAuth();

  if (!userProfile) return null;

  return (
    <div className="hover:bg-tp-main-background flex items-center justify-between p-2">
      <div className="flex items-center gap-2">
        <span
          className={`fi fi-${userProfile?.nationality.toLocaleLowerCase()}`}
        ></span>
        <Typography variant="label">
          {userProfile?.firstName} {userProfile?.lastName}
        </Typography>
        <Typography variant="label-small" className="mt-0.5">
          ({userProfile?.userName})
        </Typography>
      </div>
      <Typography variant="label-small" className="mt-0.5">
        {calculateAge(userProfile?.dateOfBirth)} yrs
      </Typography>
    </div>
  );
};

export default SearchResult;
