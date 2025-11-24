import Button from "@/components/buttons/Button";
import ReactPlayer from "react-player";
import tennisBalls from "../assets/tennisBalls.mp4";
import logo from "../assets/logo.png";
import newLogo from "../assets/newLogo.png";
import { motion } from "motion/react";
import InputText from "@/components/inputs/InputText";
import Typography from "@/components/text/Typography";

const LoginLayout = () => {
  return (
    <div className="flex h-screen">
      {/* LEFT — Form */}
      <div className="bg-tp-background flex w-1/2 items-center justify-center p-12">
        <div className="w-full max-w-sm">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6 text-3xl font-bold text-white"
          >
            Login
          </motion.h1>

          <form className="space-y-6">
            <InputText placeholder="Email" fullWidth />
            <InputText placeholder="Password" fullWidth />
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
      <div className="relative block h-full w-1/2">
        {/* Logo with text */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center select-none">
          <img src={newLogo} alt="" className="back h-60 w-60" />
          <div className="relative text-center">
            <Typography
              variant="title"
              as="h1"
              className="absolute mx-auto box-content flex w-full border bg-linear-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text py-1 text-6xl font-extrabold text-transparent blur-xl select-none"
            >
              Tennis Pulse
            </Typography>

            <Typography
              variant="title"
              as="h1"
              className="relative flex h-auto items-center justify-center bg-linear-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text py-1 text-center text-6xl font-extrabold text-transparent select-auto"
            >
              Tennis Pulse
            </Typography>
          </div>
        </div>

        {/* background video */}
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

        <div className="pointer-events-none absolute top-0 left-0 h-full w-full backdrop-blur-[1.7px] [background:linear-gradient(to_right,oklch(18.11%_0.002_197.01)_5%,oklch(0.2264_0_0/40%)_7%)]" />
      </div>
    </div>
  );
};

export default LoginLayout;
