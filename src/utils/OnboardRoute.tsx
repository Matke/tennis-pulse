import FillingLoader from "@/components/loaders/FillingLoader";
import { useAuth } from "@/store/useAuth";
import { Navigate } from "react-router";

const OnboardRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, user, userProfile } = useAuth();

  if (isLoading) {
    // full page loader
    return (
      <div className="bg-tp-typography-secondary fixed inset-0 z-9999 flex items-center justify-center">
        <FillingLoader text="Checking user credentials..." classic />
      </div>
    );
  }

  if (!user && !isLoading) {
    return <Navigate to="/login" replace />;
  }

  if (userProfile?.userName && !isLoading) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default OnboardRoute;
