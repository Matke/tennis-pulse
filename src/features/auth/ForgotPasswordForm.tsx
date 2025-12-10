import { useState } from "react";

// components
import Button from "@/components/buttons/Button";
import InputText from "@/components/inputs/InputText";

import * as yup from "yup";

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
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await schema.validate({ email });
      setError("");

      // no validation error, form can be submitted
    } catch (error) {
      // catch validation error or any other error
      setError(error instanceof Error ? error.message : "Error occurred");
    }
  };

  console.log(window.location.origin);

  return (
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
        loaderWithLabel
        loaderText="Sending email"
        buttonSize="base"
      />
    </form>
  );
};

export default ForgotPasswordForm;
