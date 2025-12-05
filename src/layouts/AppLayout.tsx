// components
import Sidebar from "@/layouts/Sidebar";

// router
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="flex w-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main layout section */}
      <main className="bg-tp-card-back h-screen flex-1 space-y-6">
        {/* Dashboard contents - padding here will move text page from sidebar */}
        <div className="w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
