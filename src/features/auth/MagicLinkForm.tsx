import Button from "@/components/buttons/Button";
import InputText from "@/components/inputs/InputText";
import Typography from "@/components/text/Typography";
import { sendMagicLink } from "@/services/apiAuth";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router";

// yup validation
import * as yup from "yup";

const redirectURL =
  import.meta.env.VITE_MAGIC_LINK || `${window.location.origin}/welcome`;

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Please provide a valid email address"),
});

const MagicLinkForm = () => {
  // form states
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isSuccess, setIsSucess] = useState<boolean>(false);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await schema.validate({ email });

      setError("");
      setIsPending(true);

      const data = await sendMagicLink({ email, redirectURL });
      console.log(data);

      // sending link successful
      setIsSucess(true);
      setSecondsLeft(60);
      toast.success("Email successfully sent!");
    } catch (error) {
      // catch validation error or any other error
      setError(error instanceof Error ? error.message : "Error occurred");
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    if (secondsLeft === 0) return;

    const idInterval = setInterval(() => {
      setSecondsLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(idInterval);
  }, [secondsLeft]);

  useEffect(() => {
    if (secondsLeft === 0) setIsSucess(false);
  }, [secondsLeft]);

  return (
    <>
      <Typography
        variant="label"
        as={"p"}
        color="text-tp-typography/80"
        className="mb-8 text-center"
      >
        Enter your email and we will email you a secure link to sign in - no
        password required.
      </Typography>

      <form onSubmit={handleSubmit} noValidate>
        <InputText
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          fullWidth
          error={error}
          clearValueOnError={setEmail}
          className="mb-4"
          disabled={Boolean(secondsLeft)}
          validFieldText={isSuccess ? "Successfully sent!" : ""}
          backgroundInputColor="bg-linear-to-br from-[#010101] via-[#090909] to-[#010101]"
          labelClass="peer-focus:bg-[linear-gradient(to_bottom_right,#010101,#090909,#010101)]"
        />
        <Button
          type="submit"
          label="Continue"
          themeColor="primary"
          className="mt-6 mb-3.5 w-full self-center"
          loaderText="Sending email"
          buttonSize="base"
          disabled={isPending || Boolean(secondsLeft)}
          isLoading={isPending}
        />
      </form>
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

      <div className="mt-6 flex h-full items-center justify-center text-center md:mt-2">
        <Typography variant="label" as={"p"} color="text-tp-typography/80">
          Try another sign up method?
        </Typography>
        <Link
          to="/signup"
          className="text-tp-typography/90 z-100 ml-3 inline-block cursor-pointer text-sm hover:underline"
        >
          Signup
        </Link>
      </div>
    </>
  );
};

export default MagicLinkForm;
