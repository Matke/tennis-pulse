import Button from "@/components/buttons/Button";
import InputText from "@/components/inputs/InputText";
import Typography from "@/components/text/Typography";
import Card from "@/components/ui/Card";
import PulseLogo from "@/components/ui/PulseLogo";
import WelcomeMessage from "@/components/ui/WelcomeMessage";
import { Link } from "react-router";

const ForgotPassword = () => {
  return (
    <Card headerCardContent={<WelcomeMessage />}>
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
        <InputText
          placeholder="Email"
          fullWidth
          error=""
          className="mb-4"
          backgroundInputColor="bg-linear-to-br from-[#010101] via-[#090909] to-[#010101]"
          labelClass="peer-focus:bg-[linear-gradient(to_bottom_right,#010101,#090909,#010101)]"
        />

        <Button
          type="submit"
          label="Continue"
          themeColor="primary"
          className="mb-3.5 w-full self-center"
          loaderWithLabel
          buttonSize="base"
        />

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
    </Card>
  );
};

export default ForgotPassword;
