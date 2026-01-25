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
      <main className="h-screen flex-1 space-y-6">
        {/* Dashboard contents - padding here will move page content from sidebar */}
        <div className="bg-tp-card-back h-full w-full overflow-y-auto p-7">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
