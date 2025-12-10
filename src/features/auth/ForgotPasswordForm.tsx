import { useState } from "react";

// components
import Button from "@/components/buttons/Button";
import InputText from "@/components/inputs/InputText";
import Typography from "@/components/text/Typography";
import TickIcon from "@/components/ui/TickIcon";

import * as yup from "yup";
import { Link } from "react-router";
import { redirectPasswordReset } from "@/services/apiAuth";

const redirectURL =
  import.meta.env.VITE_REDIRECT_URL ||
  `${window.location.origin}/reset-password`;

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Please provide a valid email address"),
});

const ForgotPasswordForm = () => {
  // form states
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isSuccess, setIsSucess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await schema.validate({ email });

      setError("");
      setIsPending(true);

      // no validation error, form can be submitted
      const { error: requestError } = await redirectPasswordReset({
        email,
        redirectURL,
      });

      if (requestError) throw requestError;

      // sending link successful
      setIsSucess(true);
    } catch (error) {
      // catch validation error or any other error
      setError(error instanceof Error ? error.message : "Error occurred");
    } finally {
      setIsPending(false);
    }
  };

  // return successfull email sent state
  if (isSuccess)
    return (
      <div>
        <TickIcon />
        <Typography
          variant="paragraph"
          as={"h2"}
          color="text-tp-typography/80"
          className="-mt-3 text-center"
        >
          A password reset link has been sent to your email.
        </Typography>
      </div>
    );

  return (
    <div>
      <Typography
        variant="label"
        as={"p"}
        color="text-tp-typography/80"
        className="mb-8 text-center"
      >
        Enter your email address and we'll send you a link to reset your
        password
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
          disabled={isPending}
          isLoading={isPending}
        />
      </form>

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

export default ForgotPasswordForm;
