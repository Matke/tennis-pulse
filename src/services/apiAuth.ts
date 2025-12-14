import supabase from "@/services/supabase";

// Types
import type { ForgotPassword, LoginData, SignupData } from "@/types/authTypes";

// SignUp
export const signup = async ({ email, password }: SignupData) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "http://localhost:5173/verify-email",
    },
  });

  if (error) throw new Error(error.message);

  return data;
};

// Login
export const login = async ({ email, password }: LoginData) => {
  const { data, error } = await supabase.auth.signInWithPassword({
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

// reset or update password
export const updatePassword = async (newPassword: string) => {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) throw new Error(error?.message);

  return { data };
};

// resend email for verifying account
export const resendEmailConfirmation = async (email: string) => {
  const { error } = await supabase.auth.resend({
    type: "signup",
    email: email,
    options: {
      emailRedirectTo: "http://localhost:5173/verify-email",
    },
  });

  if (error) throw new Error(error?.message);
};
