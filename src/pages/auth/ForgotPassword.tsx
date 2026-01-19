// utils components
import Typography from "@/components/text/Typography";
import PulseLogo from "@/components/ui/PulseLogo";
import ForgotPasswordForm from "@/features/auth/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <>
      <PulseLogo />

      <Typography
        variant="title"
        as={"h1"}
        className="mb-6 text-center font-bold"
        color="text-white"
      >
        Reset your password
      </Typography>

      {/* main form functionality */}
      <ForgotPasswordForm />
    </>
  );
};

export default ForgotPassword;
