import FillingLoader from "@/components/loaders/FillingLoader";
import { useAuth } from "@/store/useAuth";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, user, userProfile } = useAuth();

  if (isLoading && !user) {
    return (
      // full page loader
      <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black">
        <FillingLoader text="Checking user credentials..." classic />
      </div>
    );
  }

  // if no user and data is finished loading return the user to login
  if (!user && !isLoading) {
    return <Navigate to="/login" replace />;
  }

  // if user somehow skips welcome they will be redirect back because profile is not complete
  if (!isLoading && user && !userProfile?.userName) {
    return <Navigate to="/welcome" replace />;
  }

  return children;
};

export default ProtectedRoute;
