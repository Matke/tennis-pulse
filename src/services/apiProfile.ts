import supabase from "@/services/supabase";
import type { UserProfileFormData } from "@/types/authTypes";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

// profile is automatically created when user creates an account
// with supabase trigger function
export const editUserProfile = async (
  newProfileData: UserProfileFormData,
  userId: string | undefined,
) => {
  if (!userId) throw new Error("User not authenticated!");

  // unique name for image is needed
  const imageName =
    `${Math.random()}-${newProfileData.profileImage?.name}`.replaceAll("/", "");

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

  const publicUrl = urlData.publicUrl;

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
