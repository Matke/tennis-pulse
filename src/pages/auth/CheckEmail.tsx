import Button from "@/components/buttons/Button";
import Typography from "@/components/text/Typography";
import PulseLogo from "@/components/ui/PulseLogo";
import { resendEmailConfirmation } from "@/services/apiAuth";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";

const CheckEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [secondsLeft, setSecondsLeft] = useState(0);

  const resendEmailLink = async () => {
    const email: string = location.state.email || "";

    if (!email) {
      toast.error("Email is missing");
      return;
    }

    try {
      await resendEmailConfirmation(email);

      toast.success("Verification email successfully sent");
      setSecondsLeft(60);
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Error occurred during resend");
      }
    }
  };

  // in case no data in location navigate back
  useEffect(() => {
    if (!location.state?.email) {
      navigate("/signup");
    }
  }, [location.state, navigate]);

  useEffect(() => {
    if (secondsLeft === 0) return;

    const idInterval = setInterval(() => {
      setSecondsLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(idInterval);
  }, [secondsLeft]);

  return (
    <>
      <PulseLogo />

      <Typography
        variant="title"
        as={"h1"}
        className="mb-10 text-center font-bold"
        color="text-white"
      >
        Please verify your account
      </Typography>

      <Typography
        variant="label"
        as={"p"}
        color="text-tp-typography/80"
        className="text-center"
      >
        You're almost there. We sent email to
      </Typography>

      {/* email part */}
      <Typography
        variant="paragraph"
        as={"p"}
        color="text-white"
        className="mb-8 text-center font-bold"
      >
        {location.state?.email || (
          <span className="text-tp-warning">Error: Email not found</span>
        )}
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
        <Button
          onClick={resendEmailLink}
          label="Resend Verification Email"
          disabled={secondsLeft > 0}
        />
      </div>
      {secondsLeft !== 0 && (
        <Typography
          variant="label-small"
          as={"p"}
          color="text-tp-typography/80"
          className="mt-2 mb-4 text-center"
        >
          {`Resend again in ${secondsLeft} ${secondsLeft !== 1 ? "seconds" : " second"}`}
        </Typography>
      )}
    </>
  );
};

export default CheckEmail;
