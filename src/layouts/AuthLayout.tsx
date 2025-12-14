import Video from "@/components/ui/Video";
import WelcomeMessage from "@/components/ui/WelcomeMessage";
import { Outlet } from "react-router";
import tennisBallsComp from "@/assets/tennisBallsComp.mp4";
import Card from "@/components/ui/Card";
import { motion } from "motion/react";

const AuthLayout = () => {
  return (
    <div className="flex h-screen">
      {/* LEFT — Form part */}
      <div className="bg-charcoal-900 z-1000 w-full select-none md:block md:w-1/2 md:p-8">
        <Card headerCardContent={<WelcomeMessage />}>
          <div className="w-full px-0 sm:px-0 md:px-12">
            <Outlet />
          </div>
        </Card>
      </div>

      {/* RIGHT — Video and Title part */}
      <div className="relative hidden h-full sm:hidden md:block md:w-1/2">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center select-none">
          <WelcomeMessage />
          {/* blur behind the app name creating grafitti effect */}
          {/* moved here because of creating overflow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute mx-auto mt-12 flex overflow-hidden border bg-linear-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text py-1 text-4xl font-extrabold whitespace-nowrap text-transparent blur-xl select-none md:ml-0 md:text-6xl"
          >
            tennis pulse
          </motion.div>
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
