import supabase from "@/services/supabase";
import type { UserProfileFormData } from "@/types/authTypes";

// profile is automatically created when user creates an account
// with supabase trigger function
export const editUserProfile = async (
  newProfileData: UserProfileFormData,
  userId: string | undefined,
) => {
  if (!userId) throw new Error("User not authenticated!");

  let publicUrl: string = "";

  if (newProfileData.profileImage) {
    // unique name for image is needed
    const imageName =
      `${Math.random()}-${newProfileData.profileImage?.name}`.replaceAll(
        "/",
        "",
      );

    const imagePath = `${userId}/${imageName}`;

    //  upload image after update
    const { error: storageBucketError } = await supabase.storage
      .from("avatars")
      .upload(imagePath, newProfileData.profileImage, {
        upsert: true,
        contentType: "image/jpeg",
      });

    if (storageBucketError) {
      console.error(storageBucketError);
      throw new Error("Profile image could not be uploaded!");
    }

    const { data: urlData } = supabase.storage
      .from("avatars")
      .getPublicUrl(imagePath);

    publicUrl = urlData.publicUrl;
  }

  const { data, error } = await supabase
    .from("profiles")
    .update({ ...newProfileData, profileImage: publicUrl })
    .eq("id", userId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Profile could not be updated");
  }

  return data;
};

// checking username, not allowing duplicate usernames
export const checkUsernameAvailability = async (
  username: string | undefined,
) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("userName")
    .eq("userName", username)
    .maybeSingle();

  if (error) {
    throw new Error("Error while checking username availability");
  }

  return !data;
};

export const fetchProfiles = async () => {
  const { data: profiles, error } = await supabase.from("profiles").select("*");

  if (error) throw new Error("Error while fetching all user profiles");

  return profiles;
};
