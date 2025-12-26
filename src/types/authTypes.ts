type Gender = "male" | "female";

export type UserProfileData = {
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  profileImage?: string;
  dateOfBirth: string;
  nationality: string;
  skillLevel: number;
  backhandType: string;
  forehandType: string;
  height: number;
  weight: number;
  bio: string;
  racket: string;
  dominantHand: string;
  created_at: string;
};

export type UserProfileFormData = Omit<
  UserProfileData,
  "userId" | "profileImage" | "created_at"
> & {
  profileImage?: File;
};

export const userProfileInitialData: UserProfileFormData = {
  // userId: "",
  username: "",
  firstName: "",
  lastName: "",
  gender: "male",
  dateOfBirth: "2000-01-01",
  nationality: "RS",
  skillLevel: 1,
  backhandType: "one-handed",
  forehandType: "flat",
  height: 0,
  weight: 0,
  bio: "",
  racket: "",
  dominantHand: "right",
  // created_at: "",
};

export type SignupData = {
  email: string;
  password: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type ForgotPassword = {
  email: string;
  redirectURL: string;
};
