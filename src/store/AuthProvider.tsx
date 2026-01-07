import { createContext, useEffect, useState } from "react";
// api func
import { getCurrentUser, getUserProfile, logout } from "@/services/apiAuth";
// types
import type { User } from "@supabase/supabase-js";
import type { UserProfileData } from "@/types/authTypes";
import { toast } from "react-hot-toast";

type AuthContextData = {
  user: Partial<User> | null;
  userProfile: Partial<UserProfileData>;
  isLoading: boolean;
  error: string;
  onLogout: () => void;
  // getUser: () => void;
};

const authContextInitialValue = {
  user: null,
  userProfile: {},
  isLoading: false,
  error: "",
  onLogout: () => {},
  // getUser: () => {},
};

const AuthContext = createContext<AuthContextData>(authContextInitialValue);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Partial<User> | null>(null);
  const [userProfile, setUserProfile] = useState<Partial<UserProfileData>>({}); // all are optional when Partial
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onLogout = async () => {
    try {
      await logout();

      toast.success("Successfully logged out");
      setUser(null);
      setUserProfile({});
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

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
    <AuthContext value={{ user, userProfile, error, isLoading, onLogout }}>
      {children}
    </AuthContext>
  );
};

export { AuthProvider, AuthContext };
