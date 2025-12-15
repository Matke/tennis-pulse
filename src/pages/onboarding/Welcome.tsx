import Button from "@/components/buttons/Button";
import Typography from "@/components/text/Typography";
import PulseLogo from "@/components/ui/PulseLogo";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 3,
          scale: { type: "spring", visualDuration: 0.1, bounce: 0.02 },
        }}
      >
        <PulseLogo />
        <Typography
          variant="title"
          as={"h1"}
          className="z-100 mb-10 text-center font-bold"
          color="text-white"
        >
          Welcome tennis player!
        </Typography>
        <Typography
          variant="title"
          as={"h1"}
          className="z-100 mb-10 text-center font-bold"
          color="text-white"
        >
          Welcome tennis player!
        </Typography>
        <Typography
          variant="title"
          as={"h1"}
          className="z-100 mb-10 text-center font-bold"
          color="text-white"
        >
          Welcome tennis player!
        </Typography>
        <Typography
          variant="title"
          as={"h1"}
          className="z-100 mb-10 text-center font-bold"
          color="text-white"
        >
          Welcome tennis player!
        </Typography>
        <Typography
          variant="title"
          as={"h1"}
          className="z-100 mb-10 text-center font-bold"
          color="text-white"
        >
          Welcome tennis player!
        </Typography>
        <Typography
          variant="title"
          as={"h1"}
          className="z-100 mb-10 text-center font-bold"
          color="text-white"
        >
          Welcome tennis player!
        </Typography>
        <Typography
          variant="title"
          as={"h1"}
          className="z-100 mb-10 text-center font-bold"
          color="text-white"
        >
          Welcome tennis player!
        </Typography>

        <div className="flex justify-center">
          <Button label="Continue" fullWidth />
        </div>
      </motion.div>
    </>
  );
};

export default Welcome;
