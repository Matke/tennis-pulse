import Button from "@/components/buttons/Button";
import Loader from "@/components/loaders/Loader";
import Typography from "@/components/text/Typography";
import { useAuth } from "@/store/useAuth";
import { motion } from "framer-motion";

const Welcome = () => {
  const { user, userProfile, isLoading } = useAuth();

  if (isLoading) return <Loader size={190} borderSize={190} />;

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
          {user?.id}
        </Typography>

        <div className="flex justify-center">
          <Button label="Continue" buttonSize="large" />
        </div>
      </motion.div>
    </>
  );
};

export default Welcome;
