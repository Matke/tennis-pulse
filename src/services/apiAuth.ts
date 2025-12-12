import supabase from "@/services/supabase";

// Types
import type { ForgotPassword, LoginData, SignupData } from "@/types/authTypes";

// SignUp
export const signup = async ({ email, password }: SignupData) => {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
};

// Login
export const login = async ({ email, password }: LoginData) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
};

// Redirect password
export const redirectPasswordReset = async ({
  email,
  redirectURL,
}: ForgotPassword) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: redirectURL,
  });

  return { error };
};

export const updatePassword = async (newPassword: string) => {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) throw new Error(error?.message);

  return { data };
};
