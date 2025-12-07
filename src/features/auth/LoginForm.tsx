import Button from "@/components/buttons/Button";
import InputPassword from "@/components/inputs/InputPassword";
import InputText from "@/components/inputs/InputText";

const LoginForm = () => {
  return (
    <form className="space-y-8">
      <InputText
        placeholder="Email"
        fullWidth
        error=""
        backgroundInputColor="bg-linear-to-br from-[#010101] via-[#090909] to-[#010101]"
        labelClass="peer-focus:bg-[linear-gradient(to_bottom_right,#010101,#090909,#010101)]"
      />
      <InputPassword
        placeholder="Password"
        fullWidth
        backgroundInputColor="bg-linear-to-br from-[#010101] via-[#090909] to-[#010101]"
        labelClass="peer-focus:bg-[linear-gradient(to_bottom_right,#010101,#090909,#010101)]"
      />
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
