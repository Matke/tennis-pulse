export type UserProfileData = {
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
  gender: string;
  profileImage: string;
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
  created_at: string; // use for how long user has an account
};

export const userProfileInitialData: UserProfileData = {
  userId: "",
  username: "",
  firstName: "",
  lastName: "",
  gender: "male",
  profileImage: "",
  dateOfBirth: "2020-01-01",
  nationality: "",
  skillLevel: 0,
  backhandType: "",
  forehandType: "",
  height: 0,
  weight: 0,
  bio: "",
  racket: "",
  dominantHand: "",
  created_at: "",
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
