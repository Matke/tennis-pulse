// components
import Button from "@/components/buttons/Button";
import Divider from "@/components/dividers/Divider";
import SignupForm from "@/features/auth/SignupForm";

// ui components
import Typography from "@/components/text/Typography";
import GLogo from "@/components/ui/GLogo";
import PulseLogo from "@/components/ui/PulseLogo";

// toaster
import { toast } from "react-hot-toast";

// router
import { Link } from "react-router";

const Signup = () => {
  return (
    <div className="w-full max-w-sm">
      <PulseLogo />

      <Typography
        variant="title"
        as={"h1"}
        className="mb-6 text-center font-bold"
        color="text-white"
      >
        Create an account
      </Typography>

      {/* main form for signup */}
      <SignupForm />

      {/* dividers with or */}
      <div className="mt-12 flex items-center justify-between md:mt-0">
        <Divider className="mt-4 w-45" />
        <Typography variant="label" as={"span"} className="mx-1 md:mx-0">
          or
        </Typography>
        <Divider className="mt-4 w-45" />
      </div>

      {/* Google Sign up link */}
      <Button
        label="Sign up with Google"
        themeColor="blank"
        onClick={() => toast.error("You successfully created account!")}
        className="bg-tp-background hover:bg-charcoal-800 mt-3 w-full scale-100 self-center rounded-full transition-all duration-500 hover:scale-103 md:mt-0"
        loaderWithLabel
        icon={<GLogo />}
      />

      <div className="mt-6 flex h-full items-center justify-center text-center md:mt-2">
        <Typography variant="label" as={"p"} color="text-tp-typography/80">
          Already have an account?
        </Typography>
        <Link
          to="/login"
          className="text-tp-typography/90 z-100 ml-3 inline-block cursor-pointer text-sm hover:underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
