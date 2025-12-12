// components
import Divider from "@/components/dividers/Divider";
import SignupForm from "@/features/auth/SignupForm";

// ui components
import Typography from "@/components/text/Typography";
import PulseLogo from "@/components/ui/PulseLogo";

// icons
import { FaFacebookF } from "react-icons/fa6";
import { HiLink } from "react-icons/hi";
import { FaGoogle } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";

// toaster
import { toast } from "react-hot-toast";

// router
import { Link } from "react-router";
import ButtonExpand, {
  type ButtonExpandProps,
} from "@/components/buttons/ButtonExpand";

export const alternativeSignUpButtons: ButtonExpandProps[] = [
  {
    label: "Continue with Google",
    icon: <FaGoogle className="h-6 w-6" />,
    onClick: () => toast.success("Sign up with Google"),
    labelClass: "pl-3",
  },
  {
    label: "Continue with Facebook",
    icon: <FaFacebookF className="h-6 w-6" />,
    onClick: () => toast.success("Sign up with Facebook"),
  },
  {
    label: "Continue with Discord",
    icon: <FaDiscord className="h-6 w-6" />,
    onClick: () => toast.success("Sign up with Discord"),
    labelClass: "pl-3",
  },
  {
    label: "Try with magic link",
    icon: <HiLink className="h-6 w-6" />,
    onClick: () => toast.success("Sign up with magic link"),
    labelClass: "pl-3",
  },
];

const Signup = () => {
  return (
    <>
      <PulseLogo />

      <Typography
        variant="title"
        as={"h1"}
        className="mb-9.5 text-center font-bold"
        color="text-white"
      >
        Create an account
      </Typography>

      {/* main form for signup */}
      <SignupForm />

      {/* dividers with or */}
      <div className="mt-5 flex items-center justify-between md:mt-0">
        <Divider className="mt-4 min-w-0 flex-1" />
        <Typography variant="label" as={"span"} className="smd:mx-0 mx-1">
          or
        </Typography>
        <Divider className="mt-4 min-w-0 flex-1" />
      </div>

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
          Already have an account?
        </Typography>
        <Link
          to="/login"
          className="text-tp-typography/90 z-100 ml-3 inline-block cursor-pointer text-sm hover:underline"
        >
          Login
        </Link>
      </div>
    </>
  );
};

export default Signup;
