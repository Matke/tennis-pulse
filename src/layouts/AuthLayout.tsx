import Video from "@/components/ui/Video";
import WelcomeMessage from "@/components/ui/WelcomeMessage";
import { Outlet } from "react-router";
import tennisBallsComp from "@/assets/tennisBallsComp.mp4";
import Card from "@/components/ui/Card";

const AuthLayout = () => {
  return (
    <div className="flex h-screen">
      {/* LEFT — Form part */}
      <div className="bg-charcoal-900 z-1000 w-full select-none md:block md:w-1/2 md:p-8">
        <Card headerCardContent={<WelcomeMessage />}>
          <Outlet />
        </Card>
      </div>

      {/* RIGHT — Video and Title part */}
      <div className="relative hidden h-full md:block md:w-1/2">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center select-none">
          <WelcomeMessage />
        </div>
        <Video
          videoSrc={tennisBallsComp}
          className="object-cover blur-[1.7px]"
        />
        <div className="pointer-events-none absolute top-0 left-0 h-full w-full [background:linear-gradient(to_right,rgb(25_25_26)_5%,rgba(6_6_6/0.4)_7%)]" />
      </div>
    </div>
  );
};

export default AuthLayout;
