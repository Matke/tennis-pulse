import Button from "@/components/buttons/Button";
import ReactPlayer from "react-player";
import tennisBalls from "../assets/tennisBalls.mp4";
import logoWithText from "../assets/logoWithText.png";
import logo from "../assets/logo.png";
import { motion } from "motion/react";

const LoginLayout = () => {
  return (
    <div className="flex h-screen">
      {/* LEFT — Form */}
      <div className="bg-charcoal-950 flex w-1/2 items-center justify-center p-12">
        <div className="w-full max-w-sm">
          <div className="mt-[-60px] flex items-center justify-center">
            <img src={logo} alt="" className="h-50 w-50" />
          </div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6 text-3xl font-bold text-white"
          >
            Login
          </motion.h1>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded border border-white p-3 text-white placeholder:text-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded border border-white p-3 text-white placeholder:text-white"
            />
            <Button
              label="Login to Tennis Pulse"
              themeColor="primary"
              onClick={() => console.log("Na ovome kroku")}
              className="w-full self-center rounded-none"
              loaderWithLabel
            />
          </form>
        </div>
      </div>

      {/* RIGHT — Image */}
      <div className="relative hidden h-full w-1/2 md:block">
        <ReactPlayer
          src={tennisBalls}
          playing
          loop
          muted
          controls={false}
          width="100%"
          height="100%"
          className="object-cover blur-[0.3px]"
        />

        <div
          className="pointer-events-none absolute top-0 left-0 h-full w-full"
          style={{
            background:
              "linear-gradient(to right, oklch(18.11% 0.002 197.01) 5%, oklch(0.2264 0 0 / 40%) 7%)",
            backdropFilter: "blur(2px)",
          }}
        />
      </div>
    </div>
  );
};

export default LoginLayout;
