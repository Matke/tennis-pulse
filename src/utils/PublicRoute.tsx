import FillingLoader from "@/components/loaders/FillingLoader";
import { useAuth } from "@/store/useAuth";
import { Navigate } from "react-router";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, user } = useAuth();

  if (isLoading) {
    // full page loader
    return (
      <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black">
        <FillingLoader text="Checking user credentials..." classic />
      </div>
    );
  }

  if (user && !isLoading) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default PublicRoute;
