import { useMutation } from "@tanstack/react-query";
import { updateProfilePrivacy as updateProfilePrivacyApi } from "@/services/apiProfile";
import type { ProfilePrivacyData } from "@/types/authTypes";
import { toast } from "react-hot-toast";
import { useAuth } from "@/store/useAuth";

export const useUpdateProfilePrivacy = () => {
  const { setUserProfile } = useAuth();

  const { mutate: updateProfilePrivacy, isPending: isUpdatingPrivacy } =
    useMutation({
      mutationFn: (profilePrivacy: ProfilePrivacyData) =>
        updateProfilePrivacyApi(profilePrivacy),
      onSuccess: (data) => {
        setUserProfile(data); // update profile data
        toast.success("Profile privacy changed!");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

  return { updateProfilePrivacy, isUpdatingPrivacy };
};
