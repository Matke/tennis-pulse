import Typography from "@/components/text/Typography";
import PulseLogo from "@/components/ui/PulseLogo";
import MagicLinkForm from "@/features/auth/MagicLinkForm";

const MagicSignIn = () => {
  return (
    <>
      <PulseLogo />

      <Typography
        variant="title"
        as={"h1"}
        className="mb-6 text-center font-bold"
        color="text-white"
      >
        Continue with a magic link
      </Typography>

      {/* main form functionality */}
      <MagicLinkForm />
    </>
  );
};

export default MagicSignIn;
