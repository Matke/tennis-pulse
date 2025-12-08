// components
import Button from "@/components/buttons/Button";
import InputPassword from "@/components/inputs/InputPassword";
import InputText from "@/components/inputs/InputText";

// types
import type { SignupData } from "@/types/authTypes";

// hook form
import { Controller, useForm, type SubmitHandler } from "react-hook-form";

// yup
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// TODO: extract schemas in separate folder
const schema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Please provide a valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/\d/, "Password must contain at least one number"),
});

const SignupForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupData>({
    resolver: yupResolver(schema),
  });

  const onFormSubmit: SubmitHandler<SignupData> = (values) => {
    console.log(values);
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onFormSubmit)}>
      <InputText
        placeholder="Email"
        fullWidth
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
            placeholder="Password"
            fullWidth
            backgroundInputColor="bg-linear-to-br from-[#010101] via-[#090909] to-[#010101]"
            labelClass="peer-focus:bg-[linear-gradient(to_bottom_right,#010101,#090909,#010101)]"
            error={errors?.password?.message}
          />
        )}
      />

      <Button
        type="submit"
        label="Sign up"
        themeColor="primary"
        className="mb-3.5 w-full self-center"
        loaderWithLabel
        buttonSize="base"
      />
    </form>
  );
};

export default SignupForm;
