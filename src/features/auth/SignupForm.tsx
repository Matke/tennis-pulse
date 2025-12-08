// components
import Button from "@/components/buttons/Button";
import InputPassword from "@/components/inputs/InputPassword";
import InputText from "@/components/inputs/InputText";

// hook form
import { useForm } from "react-hook-form";

type SignupFormData = {
  email: string;
  password: string;
};

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  const onFormSubmit = (values: SignupFormData) => {
    console.log(values);
  };

  console.log(errors);

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onFormSubmit)}>
      <InputText
        placeholder="Email"
        fullWidth
        backgroundInputColor="bg-linear-to-br from-[#010101] via-[#090909] to-[#010101]"
        labelClass="peer-focus:bg-[linear-gradient(to_bottom_right,#010101,#090909,#010101)]"
        {...register<"email">("email", {
          required: "This field is required",
        })}
        error={errors?.email?.message}
      />
      <InputPassword
        placeholder="Password"
        fullWidth
        backgroundInputColor="bg-linear-to-br from-[#010101] via-[#090909] to-[#010101]"
        labelClass="peer-focus:bg-[linear-gradient(to_bottom_right,#010101,#090909,#010101)]"
        {...register<"password">("password", {
          required: "This field is required",
        })}
        error={errors?.password?.message}
      />
      <Button
        type="submit"
        label="Sign up"
        themeColor="primary"
        className="mb-3.5 w-full self-center"
        loaderWithLabel
        buttonSize="base"
        labelClass=""
      />
    </form>
  );
};

export default SignupForm;
