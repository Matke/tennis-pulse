import { use } from "react"; // new react 19
// context
import { AuthContext } from "@/store/AuthProvider";

const useAuth = () => {
  const context = use(AuthContext);

  if (context === undefined) {
    throw new Error("AuthContext was used outside of context!");
  }

  return context;
};

export { useAuth };
