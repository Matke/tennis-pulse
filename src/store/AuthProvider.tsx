import { getCurrentUser, getUserProfile } from "@/services/apiAuth";
import type { User } from "@supabase/supabase-js";
import { createContext, useEffect, useState } from "react";

type AuthContext = {
  user: Partial<User> | null;
  userProfile: object | null;
  isLoading: boolean;
  error: string;
};

const contextInitialValue = {
  user: null,
  userProfile: null,
  isLoading: false,
  error: "",
};

const AuthContext = createContext<AuthContext>(contextInitialValue);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Partial<User> | null>(null);
  const [userProfile, setUserProfile] = useState<object>({});
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);

      try {
        const data: User = await getCurrentUser();

        setUser(data);

        if (data.role !== "authenticated" && !data.user_metadata.email_verified)
          throw new Error("User not authenticated");

        const profile = await getUserProfile(data.id);
        setUserProfile(profile);

        console.log(profile);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getUser();
  }, []);

  return (
    <AuthContext value={{ user, userProfile, error, isLoading }}>
      {children}
    </AuthContext>
  );
};

export { AuthProvider, AuthContext };
