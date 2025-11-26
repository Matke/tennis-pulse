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
import { useRef, useState } from "react";
import Divider from "@/components/dividers/Divider";

const LoginLayout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [videoReady, setVideoReady] = useState(false);

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

                <div className="rounded-full border border-white/20 bg-linear-to-br from-black/80 to-black/60 p-6 shadow-2xl backdrop-blur-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <div className="transition-transform duration-700">
                    <img
                      src={newLogo}
                      alt=""
                      className="scale-[2] animate-pulse transition-all duration-300 hover:scale-[3]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h1 className="mb-6 text-center text-3xl font-bold text-white">
              Create an account
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
                label="Sign up"
                themeColor="primary"
                onClick={() => console.log("Na ovome kroku")}
                className="w-full self-center"
                loaderWithLabel
                buttonSize="base"
                labelClass=""
              />
            </form>
            <div className="flex items-center justify-between">
              <Divider className="mt-8 w-45" />
              <Typography variant="label" className="mt-3.5">
                or
              </Typography>
              <Divider className="mt-8 w-45" />
            </div>
            <Button
              label="Sign up with Google"
              themeColor="blank"
              onClick={() => console.log("Na ovome kroku")}
              className="bg-tp-background/10 hover:bg-tp-background/60 w-full scale-100 self-center rounded-full transition-all duration-500 hover:scale-103"
              loaderWithLabel
              icon={
                <div className="bg-pacific-blue-50 flex h-9 w-9 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <title>Sign in with Google</title>
                    <desc>Google G Logo</desc>
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      className="fill-google-logo-blue"
                    ></path>
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      className="fill-google-logo-green"
                    ></path>
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      className="fill-google-logo-yellow"
                    ></path>
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      className="fill-google-logo-red"
                    ></path>
                  </svg>
                </div>
              }
            />
            {/* <div className="flex cursor-pointer items-center justify-center">
              <button
                aria-label="Sign in with Google"
                className="flex cursor-pointer items-center gap-3 rounded-full p-0.5 pr-4 transition-colors duration-300"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <title>Sign in with Google</title>
                    <desc>Google G Logo</desc>
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      className="fill-google-logo-blue"
                    ></path>
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      className="fill-google-logo-green"
                    ></path>
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      className="fill-google-logo-yellow"
                    ></path>
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      className="fill-google-logo-red"
                    ></path>
                  </svg>
                </div>
                <span className="cursor-pointer text-sm tracking-wider text-white">
                  Sign in with Google
                </span>
              </button>
            </div> */}
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
              transition={{ duration: 1.2, delay: 1.5 }}
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
        <ReactPlayer
          src={tennisBalls}
          playing
          loop
          muted
          controls={false}
          onReady={() => setVideoReady(true)}
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
