import SimpleCard from "@/components/ui/SimpleCard";
import BackgroundImage from "@/components/ui/BackgroundImage";
import FeatureList from "@/features/onboarding/FeatureList";
import { Outlet } from "react-router";
import { StepsFormProvider } from "@/features/onboarding/StepsFormProvider";

const OnboardLayout = () => {
  return (
    <StepsFormProvider>
      <div className="relative flex h-screen w-full">
        <BackgroundImage />
        <div className="h-full w-full sm:px-1 sm:py-1 md:w-1/2 md:px-2 md:py-2 lg:px-12 lg:py-4">
          <SimpleCard parentContainerClass="h-full">
            <div className="h-full w-full">
              <Outlet />
            </div>
          </SimpleCard>
        </div>

        <div className="z-50 hidden h-full w-1/2 items-center justify-end md:flex">
          <div className="max-w-md text-white">
            <FeatureList />
          </div>
        </div>
      </div>
    </StepsFormProvider>
  );
};

export default OnboardLayout;
