import supabase from "@/services/supabase";

// types
import type { LoginData, SignupData } from "@/types/authTypes";

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
