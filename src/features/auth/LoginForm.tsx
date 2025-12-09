// components
import Button from "@/components/buttons/Button";
import InputPassword from "@/components/inputs/InputPassword";
import InputText from "@/components/inputs/InputText";

// router
import { Link } from "react-router";

const LoginForm = () => {
  return (
    <form className="z-1000 space-y-1">
      <InputText
        placeholder="Email"
        fullWidth
        error=""
        className="mb-8"
        backgroundInputColor="bg-linear-to-br from-[#010101] via-[#090909] to-[#010101]"
        labelClass="peer-focus:bg-[linear-gradient(to_bottom_right,#010101,#090909,#010101)]"
      />
      <InputPassword
        placeholder="Password"
        fullWidth
        backgroundInputColor="bg-linear-to-br from-[#010101] via-[#090909] to-[#010101]"
        labelClass="peer-focus:bg-[linear-gradient(to_bottom_right,#010101,#090909,#010101)]"
      />
      <div className="flex w-full items-center justify-end text-right md:mb-5">
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
      />
    </form>
  );
};

export default LoginForm;
