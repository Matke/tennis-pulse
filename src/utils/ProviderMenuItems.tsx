import type { ButtonExpandProps } from "@/components/buttons/ButtonExpand";
import { toast } from "react-hot-toast";
import { FaDiscord, FaFacebookF, FaGoogle } from "react-icons/fa6";
import { HiLink } from "react-icons/hi";

// to avoid fast refresh eslint error menu items are isolated in this component
export const alternativeSignUpProviders: ButtonExpandProps[] = [
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
