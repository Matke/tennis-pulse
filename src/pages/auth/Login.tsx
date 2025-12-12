// components
import Divider from "@/components/dividers/Divider";
import LoginForm from "@/features/auth/LoginForm";

// utils components
import Typography from "@/components/text/Typography";
import PulseLogo from "@/components/ui/PulseLogo";

// react router
import { Link } from "react-router";

// provider links
import { alternativeSignUpButtons } from "@/pages/auth/Signup";
import ButtonExpand, {
  type ButtonExpandProps,
} from "@/components/buttons/ButtonExpand";

const Login = () => {
  return (
    <>
      <PulseLogo />

      <Typography
        variant="title"
        as={"h1"}
        className="mb-9.5 text-center font-bold"
        color="text-white"
      >
        Welcome back!
      </Typography>

      <LoginForm />

      {/* dividers with or */}
      <div className="mt-5 flex items-center justify-between md:mt-0">
        <Divider className="mt-4 min-w-0 flex-1" />
        <Typography variant="label" as={"span"} className="smd:mx-0 mx-1">
          or
        </Typography>
        <Divider className="mt-4 min-w-0 flex-1" />
      </div>

      {/* Google Sign up link */}
      {/* Auth provider links */}
      <div className="flex w-full items-center justify-center gap-2">
        {alternativeSignUpButtons.map((button: ButtonExpandProps) => (
          <ButtonExpand
            label={button.label}
            icon={button.icon}
            href={button.href}
            onClick={button.onClick}
            labelClass={button.labelClass}
            className={button.className}
          />
        ))}
      </div>

      <div className="mt-6 flex h-full items-center justify-center text-center md:mt-2">
        <Typography variant="label" as={"p"} color="text-tp-typography/80">
          Don't have an account?
        </Typography>
        <Link
          to="/signup"
          className="text-tp-typography/90 z-100 ml-3 inline-block cursor-pointer text-sm hover:underline"
        >
          Sign up
        </Link>
      </div>
    </>
  );
};

export default Login;
