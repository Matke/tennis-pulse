import Button from "@/components/buttons/Button";
import Typography from "@/components/text/Typography";
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
        <Typography
          variant="title"
          as={"h1"}
          className="z-100 mb-10 text-center font-bold"
          color="text-white"
        >
          prvi{" "}
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
          variant="label"
          as={"p"}
          color="text-tp-typography/80"
          className="text-center"
        >
          You're almost there. We sent email to
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
          variant="label"
          as={"p"}
          color="text-tp-typography/80"
          className="text-center"
        >
          You're almost there. We sent email to
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
          variant="label"
          as={"p"}
          color="text-tp-typography/80"
          className="text-center"
        >
          You're almost there. We sent email to
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
          variant="label"
          as={"p"}
          color="text-tp-typography/80"
          className="text-center"
        >
          You're almost there. We sent email to
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
          variant="label"
          as={"p"}
          color="text-tp-typography/80"
          className="text-center"
        >
          You're almost there. We sent email to
        </Typography>

        <Typography
          variant="label"
          as={"p"}
          color="text-tp-typography/80"
          className="mb-8 text-center"
        >
          Just click on the link in that email to complete your signup. If you
          don't see it, you may need to
          <span className="font-bold"> check your spam</span> folder.
        </Typography>

        <Typography
          variant="label"
          as={"p"}
          color="text-tp-typography/80"
          className="mb-4 text-center"
        >
          Still can't find the email? No problem
        </Typography>

        <div className="flex justify-center">
          <Button label="Resend Verification Email" />
        </div>
      </motion.div>
    </>
  );
};

export default Welcome;
