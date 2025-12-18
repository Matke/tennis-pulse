export type UserProfileData = {
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
  profileImage: string;
  dateOfBirth: string;
  nationality: string;
  skillLevel: number;
  backhandType: string;
  forehandType: string;
  height: number;
  weight: number;
  bio: string;
  created_at: string; // use for how long user has an account
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
