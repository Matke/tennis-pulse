// components
import Button from "@/components/buttons/Button";
import InputPassword from "@/components/inputs/InputPassword";
import InputText from "@/components/inputs/InputText";

// api
import { useLogin } from "@/features/auth/useLogin";

// react hook form
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";

// schema
import type { LoginData } from "@/types/authTypes";

// router
import { Link } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";

const schema: yup.ObjectSchema<LoginData> = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Please provide a valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

const LoginForm = () => {
  const { login, isPending } = useLogin();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(schema),
  });

  const onFormSubmit: SubmitHandler<LoginData> = ({ email, password }) => {
    login({ email, password }, { onSettled: () => reset() });
  };

  return (
    <form
      className="z-1000 space-y-1"
      onSubmit={handleSubmit(onFormSubmit)}
      noValidate
    >
      <InputText
        type="email"
        placeholder="Email"
        fullWidth
        className="mb-8"
        backgroundInputColor="bg-linear-to-br from-[#010101] via-[#090909] to-[#010101]"
        labelClass="peer-focus:bg-[linear-gradient(to_bottom_right,#010101,#090909,#010101)]"
        {...register<"email">("email")}
        error={errors?.email?.message}
      />

      <Controller
        control={control}
        name="password"
        defaultValue="" // to avoid error component is changing uncontrolled input to be controlled there must be a default value
        render={({ field }) => (
          <InputPassword
            value={field.value}
            onChange={field.onChange}
            type="password"
            placeholder="Password"
            fullWidth
            backgroundInputColor="bg-linear-to-br from-[#010101] via-[#090909] to-[#010101]"
            labelClass="peer-focus:bg-[linear-gradient(to_bottom_right,#010101,#090909,#010101)]"
            error={errors?.password?.message}
            removePasswordCheck
          />
        )}
      />

      <div className="mb-8 flex w-full items-center justify-end text-right md:mb-5">
        <Link
          to="/forgot-password"
          className="text-tp-typography/85 z-100 ml-3 cursor-pointer text-xs hover:underline"
        >
          Forgot password?
        </Link>
      </div>
      <Button
        type="submit"
        label="Login"
        themeColor="primary"
        className="mb-3.5 w-full self-center"
        loaderWithLabel
        buttonSize="base"
        disabled={isPending}
        isLoading={isPending}
      />
    </form>
  );
};

export default LoginForm;
