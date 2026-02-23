import { useMemo } from "react";
// components
import FemaleProfileIcon from "@/components/ui/FemaleProfileIcon";
import MaleProfileIcon from "@/components/ui/MaleProfileIcon";

const ProfileAvatar = ({
  imageUrl,
  gender = "",
}: {
  imageUrl?: string;
  gender?: string;
}) => {
  const genderIcon = useMemo(() => {
    return gender === "male" ? <MaleProfileIcon /> : <FemaleProfileIcon />;
  }, [gender]);

  return (
    <>
      <div
        className={`animate-tilt absolute -inset-0.5 rounded-full bg-linear-to-r from-orange-600 to-yellow-200 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200`}
      ></div>
      <div className="relative">
        {/* Profile image part */}
        {imageUrl ? (
          <img
            src={imageUrl}
            className="h-32 w-32 scale-110 rotate-6 transform rounded-full object-cover transition-all duration-500"
            alt="Profile"
          />
        ) : (
          <div className="h-32 w-32 scale-110 transform rounded-full mask-b-from-100% object-cover transition-all duration-500">
            {genderIcon}
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileAvatar;
