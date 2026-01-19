import FillingLoader from "@/components/loaders/FillingLoader";
import { useAuth } from "@/store/useAuth";
import { Navigate } from "react-router";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, user } = useAuth();

  if (isLoading) {
    // full page loader
    <div className="bg-tp-typography-secondary fixed inset-0 flex items-center justify-center">
      <FillingLoader text="Checking user credentials..." />
    </div>;
  }

  if (user && !isLoading) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default PublicRoute;
