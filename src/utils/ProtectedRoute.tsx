import FillingLoader from "@/components/loaders/FillingLoader";
import { useAuth } from "@/store/useAuth";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, user } = useAuth();

  if (isLoading && !user) {
    return (
      // full page loader
      <div className="bg-tp-typography-secondary fixed inset-0 flex items-center justify-center">
        <FillingLoader text="Checking user credentials..." />
      </div>
    );
  }

  // if no user and data is finished loading return the user to login
  if (!user && !isLoading) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
