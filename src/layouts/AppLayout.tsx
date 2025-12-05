import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-4 text-white">
        <h2 className="mb-4 text-xl font-semibold">Sidebar</h2>
        <ul className="space-y-2">
          <li className="cursor-pointer hover:text-gray-300">Menu 1</li>
          <li className="cursor-pointer hover:text-gray-300">Menu 2</li>
          <li className="cursor-pointer hover:text-gray-300">Menu 3</li>
        </ul>
      </aside>

      {/* Main area */}
      <div className="flex flex-1 flex-col">
        {/* Top Navbar */}
        <nav className="flex h-16 items-center bg-white px-6 shadow">
          <h1 className="text-xl font-semibold">Top Navbar</h1>
        </nav>

        {/* Content area */}
        <main className="flex-1 overflow-auto bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
