import Button from "@/components/buttons/Button";
import ReactPlayer from "react-player";
import tennisBalls from "../assets/tennisBalls.mp4";
import logo from "../assets/logo.png";
import newLogo from "../assets/newLogo.png";
import { AnimatePresence, motion, useInView } from "motion/react";
import InputText from "@/components/inputs/InputText";
import Typography from "@/components/text/Typography";
import InputPassword from "@/components/inputs/InputPassword";
import Card from "@/components/ui/Card";
import enhancedLogo from "../assets/enhancedLogo.png";
import { useRef } from "react";

const LoginLayout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex h-screen">
      {/* LEFT — Form */}

      <div className="bg-tp-background w-1/2 p-12 select-none">
        <Card>
          <div className="w-full max-w-sm">
            {/* icon pulse */}
            <div className="mb-7 flex items-center justify-center">
              <div className="relative flex h-24 w-24 items-center justify-center">
                <div className="absolute inset-0 animate-ping rounded-full border-2 border-white/20"></div>

                <div className="absolute inset-0 animate-pulse rounded-full border border-white/10"></div>

                <div className="rounded-full border border-white/20 bg-gradient-to-br from-black/80 to-black/60 p-6 shadow-2xl backdrop-blur-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <div className="transition-transform duration-700">
                    <img
                      src={newLogo}
                      alt=""
                      className="scale-170 transition-all duration-300 hover:scale-200"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h1 className="mb-6 text-center text-3xl font-bold text-white">
              Sign up
            </h1>

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
                label="Login"
                themeColor="primary"
                onClick={() => console.log("Na ovome kroku")}
                className="w-full self-center rounded-none"
                loaderWithLabel
              />
            </form>
          </div>
        </Card>
        {/* <div className="w-full max-w-sm">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6 text-3xl font-bold text-white"
          >
            Login
          </motion.h1>

          <form className="space-y-6">
            <InputText placeholder="Email" fullWidth required />
            <InputPassword placeholder="Password" fullWidth />
            <Button
              label="Login"
              themeColor="primary"
              onClick={() => console.log("Na ovome kroku")}
              className="w-full self-center rounded-none"
              loaderWithLabel
            />
          </form>
        </div> */}
      </div>

      {/* RIGHT — Image */}
      <div className="relative block h-full w-1/2">
        {/* Logo with text */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center select-none">
          <div className="relative text-center">
            {/* <Typography
              variant="title"
              as="h1"
              className="absolute mx-auto box-content flex w-full border bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 bg-clip-text py-1 text-6xl font-extrabold text-transparent blur-xl select-none"
            >
              Tennis Pulse
            </Typography>
            <Typography
              variant="title"
              as="h1"
              className="duraton-300 from-tp-divider relative mb-6 flex h-auto items-center justify-center bg-linear-to-r via-zinc-600 to-zinc-500 bg-clip-text py-1 text-center text-6xl font-extrabold text-transparent opacity-70 transition-all select-none"
            >
              Welcome to
            </Typography> */}

            <motion.h2
              ref={ref}
              initial={{ filter: "blur(20px)", opacity: 0 }}
              animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
              transition={{ duration: 1.2 }}
              className="text-center text-xl font-bold tracking-tighter sm:text-4xl md:text-6xl md:leading-16"
            >
              {"Welcome to"}
            </motion.h2>

            <Typography
              variant="title"
              as="h1"
              className="absolute mx-auto box-content flex w-full border bg-linear-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text py-1 text-6xl font-extrabold text-transparent blur-xl select-none"
            >
              Tennis Pulse
            </Typography>

            <div className="flex justify-center space-x-1">
              <AnimatePresence>
                {"Tennis Pulse".split("").map((char, i) => (
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
