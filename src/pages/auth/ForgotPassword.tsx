// utils components
import Typography from "@/components/text/Typography";
import PulseLogo from "@/components/ui/PulseLogo";
import ForgotPasswordForm from "@/features/auth/ForgotPasswordForm";

// react router
import { Link } from "react-router";

const ForgotPassword = () => {
  return (
    <div className="w-full max-w-sm">
      <PulseLogo />

      <Typography
        variant="title"
        as={"h1"}
        className="mb-6 text-center font-bold"
        color="text-white"
      >
        Reset your password
      </Typography>
      <Typography
        variant="label"
        as={"p"}
        color="text-tp-typography/80"
        className="mb-8 text-center"
      >
        Enter your email address and we'll send you a link to reset your
        password
      </Typography>

      {/* main form functionality */}
      <ForgotPasswordForm />

      <div className="mt-6 flex h-full items-center justify-center text-center md:mt-2">
        <Typography variant="label" as={"p"} color="text-tp-typography/80">
          Remembered your password?
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

export default ForgotPassword;
