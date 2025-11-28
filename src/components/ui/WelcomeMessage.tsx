import { useRef } from "react";

import { AnimatePresence, motion, useInView } from "motion/react";

const WelcomeMessage = ({
  name = "Tennis Pulse",
  message = "Welcome to",
  videoReady,
}: {
  name?: string;
  message?: string;
  videoReady: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="relative text-center">
      <motion.h2
        ref={ref}
        initial={{ filter: "blur(20px)", opacity: 0 }}
        animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 1.5 }}
        className="md:text-charcoal-900 text-tp-typography/60 text-center text-4xl font-bold tracking-tighter md:text-6xl md:leading-16"
      >
        {message}
      </motion.h2>

      {/* Animated App name text */}
      <div className="ml-5 flex justify-center space-x-1">
        {/* blur behind the app name creating grafitti effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute mx-auto ml-24 box-content flex w-full border bg-linear-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text py-1 text-4xl font-extrabold whitespace-nowrap text-transparent blur-xl select-none md:ml-0 md:text-6xl"
        >
          {name.toLowerCase()} tenis
        </motion.div>
        <AnimatePresence>
          {videoReady &&
            name.split("").map((char, i) => (
              <motion.p
                ref={ref}
                key={i}
                initial={{ opacity: 0, x: -18 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                exit="hidden"
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex h-auto animate-pulse items-center justify-center bg-linear-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text py-1 text-center text-5xl font-extrabold text-transparent select-auto md:text-6xl"
              >
                {char === " " ? <span>&nbsp;</span> : char}
              </motion.p>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WelcomeMessage;
