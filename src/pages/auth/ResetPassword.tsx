import Typography from "@/components/text/Typography";
import PulseLogo from "@/components/ui/PulseLogo";
import ResetPasswordForm from "@/features/auth/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <div className="w-full max-w-sm">
      <PulseLogo />

      <Typography
        variant="title"
        as={"h1"}
        className="mb-12 text-center font-bold"
        color="text-white"
      >
        Change password
      </Typography>

      {/* main form */}
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPassword;
