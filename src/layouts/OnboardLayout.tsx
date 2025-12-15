import { Outlet } from "react-router";
import SimpleCard from "@/components/ui/SimpleCard";

const OnboardLayout = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="h-full w-full sm:px-1 sm:py-1 md:w-1/2 md:px-2 md:py-2 lg:px-12 lg:py-4">
        <SimpleCard parentContainerClass="h-full">
          <div className="h-full">
            <Outlet />
          </div>
        </SimpleCard>
      </div>

      <div className="hidden h-full w-1/2 items-center justify-center p-8 md:flex">
        <div className="max-w-md text-white">
          <h2 className="mb-4 text-3xl font-semibold text-black">
            Other Content
          </h2>
          <p>This content is visible only on desktop and tablet screens.</p>
        </div>
      </div>
    </div>
  );
};

export default OnboardLayout;
