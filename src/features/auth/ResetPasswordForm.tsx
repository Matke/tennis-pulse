import { useState } from "react";

// components
import Button from "@/components/buttons/Button";
import InputPassword from "@/components/inputs/InputPassword";
import Typography from "@/components/text/Typography";

import * as yup from "yup";
import { updatePassword } from "@/services/apiAuth";
import { toast } from "react-hot-toast";
import TickIcon from "@/components/ui/TickIcon";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";

// schema validation
const schema = yup.object().shape({
  newPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/\d/, "Password must contain at least one number")
    .required("Password is required"),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});

// infer type alias from yup schema (InferType)
type ResetPasswordData = yup.InferType<typeof schema>;

// partial makes all properties of ResetPasswordData optional (string | undefined)
type PartialResetPassword = Partial<ResetPasswordData>;

const defaultErrorState: PartialResetPassword = {
  newPassword: "",
  confirmNewPassword: "",
};

const ResetPasswordForm = () => {
  // input state
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");

  const [error, setError] = useState<PartialResetPassword>(defaultErrorState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await schema.validate(
        { newPassword, confirmNewPassword },
        { abortEarly: false },
      );

      // validation successful, reset error state to default
      setError(defaultErrorState);
      setIsLoading(true);

      // update user
      await updatePassword(newPassword);

      setIsSuccess(true);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        // for individual inputs
        const fieldErrors: PartialResetPassword = {};

        error.inner.map((e) => {
          // path is equal to object key name (error.newPassword)
          if (e.path)
            // must ensure ts that string e.path is one of the keys in ResetPasswordData type
            // type casting (type assertion)
            fieldErrors[e.path as keyof ResetPasswordData] = e.message; // e.message is specified in schema
        });

        setError(fieldErrors);
      } else if (error instanceof Error) {
        // cover other errors with toast
        toast.error(error?.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // success return state
  if (isSuccess)
    return (
      <div className="-mt-7">
        <TickIcon />
        <Typography
          variant="paragraph"
          as={"h2"}
          color="text-tp-typography/80"
          className="-mt-5 mb-12 text-center"
        >
          Password successfully changed! You can now login with new password.
        </Typography>
        {/* TODO: maybe wrap into button (Button -> Link) */}
        <Link to="/login">
          <Button
            label="Back to login"
            themeColor="primary"
            className="mb-3.5 w-full self-center"
            buttonSize="base"
            loaderText="Back to login"
            icon={<FaCircleArrowLeft className="h-5 w-5" />}
          />
        </Link>
      </div>
    );

  // default return state
  return (
    <form className="space-y-9.5" noValidate onSubmit={handleSubmit}>
      <InputPassword
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="New password"
        fullWidth
        error={error.newPassword}
        backgroundInputColor="bg-linear-to-br from-[#010101] via-[#090909] to-[#010101]"
        labelClass="peer-focus:bg-[linear-gradient(to_bottom_right,#010101,#090909,#010101)]"
      />
      <InputPassword
        value={confirmNewPassword}
        onChange={(e) => {
          setConfirmNewPassword(e.target.value);
        }}
        placeholder="Confirm new password"
        error={error.confirmNewPassword}
        fullWidth
        backgroundInputColor="bg-linear-to-br from-[#010101] via-[#090909] to-[#010101]"
        labelClass="peer-focus:bg-[linear-gradient(to_bottom_right,#010101,#090909,#010101)]"
      />
      <Button
        type="submit"
        label="Submit"
        themeColor="primary"
        className="-mt-3 mb-3.5 w-full self-center"
        buttonSize="base"
        loaderText="Changing password"
        disabled={isLoading}
        isLoading={isLoading}
      />
    </form>
  );
};

export default ResetPasswordForm;
