import { useRef, useState } from "react";

// Framer motion
import { AnimatePresence, motion, useInView } from "motion/react";

// components
import Divider from "@/components/dividers/Divider";
import GLogo from "@/components/ui/GLogo";
import Card from "@/components/ui/Card";
import InputPassword from "@/components/inputs/InputPassword";
import Typography from "@/components/text/Typography";
import InputText from "@/components/inputs/InputText";
import Button from "@/components/buttons/Button";

// videos
import tennisBalls from "../assets/tennisBalls.mp4";
import PulseLogo from "@/components/ui/PulseLogo";
import Video from "@/components/ui/Video";

const LoginLayout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [videoReady, setVideoReady] = useState(false);

  return (
    <div className="flex h-screen">
      {/* LEFT — Form part */}
      <div className="bg-charcoal-900 w-1/2 p-12 select-none">
        <Card>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full max-w-sm"
          >
            <PulseLogo />

            <Typography
              variant="title"
              className="mb-6 text-center font-bold"
              color="text-white"
            >
              Create an account
            </Typography>

            {/* main form for login/signup */}
            <form className="space-y-6">
              <InputText
                placeholder="Email"
                fullWidth
                required
                backgroundInputColor="bg-linear-to-br from-[#010101] via-[#090909] to-[#010101]"
                className="autofill-dark"
              />
              <InputPassword
                placeholder="Password"
                fullWidth
                backgroundInputColor="bg-linear-to-br from-[#010101] via-[#090909] to-[#010101]"
              />
              <Button
                label="Sign up"
                themeColor="primary"
                onClick={() => console.log("Na ovome kroku")}
                className="w-full self-center"
                loaderWithLabel
                buttonSize="base"
                labelClass=""
              />
            </form>

            {/* dividers with or */}
            <div className="flex items-center justify-between">
              <Divider className="mt-8 w-45" />
              <Typography variant="label" className="mt-3.5">
                or
              </Typography>
              <Divider className="mt-8 w-45" />
            </div>

            {/* Google Sign up link */}
            <Button
              label="Sign up with Google"
              themeColor="blank"
              onClick={() => console.log("Na ovome kroku")}
              className="bg-tp-background/10 hover:bg-charcoal-900 w-full scale-100 self-center rounded-full transition-all duration-500 hover:scale-103"
              loaderWithLabel
              icon={<GLogo />}
            />
          </motion.div>
        </Card>
      </div>

      {/* RIGHT — Video and Title part */}
      <div className="relative block h-full w-1/2">
        {/* Logo with text */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center select-none">
          <div className="relative text-center">
            {/* Animated welcome text */}
            <motion.h2
              ref={ref}
              initial={{ filter: "blur(20px)", opacity: 0 }}
              animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 1.5 }}
              className="text-charcoal-900 text-center text-xl font-bold tracking-tighter sm:text-4xl md:text-6xl md:leading-16"
            >
              {"Welcome to"}
            </motion.h2>

            {/* blur behind the app name creating grafitti effect */}
            <Typography
              variant="title"
              as="h1"
              className="absolute mx-auto box-content flex w-full border bg-linear-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text py-1 text-6xl font-extrabold text-transparent blur-xl select-none"
            >
              Tennis Pulse
            </Typography>

            {/* Animated App name text */}
            <div className="flex justify-center space-x-1">
              <AnimatePresence>
                {videoReady &&
                  "Tennis Pulse".split("").map((char, i) => (
                    <motion.p
                      ref={ref}
                      key={i}
                      initial={{ opacity: 0, x: -18 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      exit="hidden"
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="relative flex h-auto animate-pulse items-center justify-center bg-linear-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text py-1 text-center text-6xl font-extrabold text-transparent select-auto"
                    >
                      {char === " " ? <span>&nbsp;</span> : char}
                    </motion.p>
                  ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* background video */}
        <Video
          videoSrc={tennisBalls}
          onReady={() => setVideoReady(true)}
          className="object-cover blur-[0.3px]"
        />

        {/* Blur part of left side of the video */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-full backdrop-blur-[1.7px] [background:linear-gradient(to_right,rgb(25_25_26)_5%,rgba(6_6_6/0.4)_7%)]" />
      </div>
    </div>
  );
};

export default LoginLayout;
