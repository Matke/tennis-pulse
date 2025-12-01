import { useState } from "react";

// components
import Divider from "@/components/dividers/Divider";
import GLogo from "@/components/ui/GLogo";
import Card from "@/components/ui/Card";
import InputPassword from "@/components/inputs/InputPassword";
import Typography from "@/components/text/Typography";
import InputText from "@/components/inputs/InputText";
import Button from "@/components/buttons/Button";

// videos
import tennisBalls from "../assets/tennisBalls.mp4";
import PulseLogo from "@/components/ui/PulseLogo";
import Video from "@/components/ui/Video";
import WelcomeMessage from "@/components/ui/WelcomeMessage";

// toast
import { toast } from "react-hot-toast";
import ReactFlagsSelect from "react-flags-select";
import InputSelect from "@/components/inputs/InputSelect";

const LoginLayout = () => {
  // wait for the video to load and then show text animation (motion)
  const [videoReady, setVideoReady] = useState(false);
  const [selected, setSelected] = useState("RS");
  const [fruit, setFruit] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex h-screen">
      {/* LEFT — Form part */}
      <div className="bg-charcoal-900 z-1000 w-full select-none md:block md:w-1/2 md:p-8">
        <Card headerCardContent={<WelcomeMessage videoReady={videoReady} />}>
          <div className="w-full max-w-sm">
            <PulseLogo />

            <Typography
              variant="title"
              as={"h1"}
              className="mb-6 text-center font-bold"
              color="text-white"
            >
              Create an account
            </Typography>

            {/* main form for login/signup */}
            <form className="space-y-8">
              <InputText
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                fullWidth
                backgroundInputColor="bg-linear-to-br from-[#010101] via-[#090909] to-[#010101]"
                labelClass="peer-focus:bg-[linear-gradient(to_bottom_right,#010101,#090909,#010101)]"
              />
              <InputPassword
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                fullWidth
                backgroundInputColor="bg-linear-to-br from-[#010101] via-[#090909] to-[#010101]"
                labelClass="peer-focus:bg-[linear-gradient(to_bottom_right,#010101,#090909,#010101)]"
              />
              {/* <ReactFlagsSelect
                selected={selected}
                onSelect={(code) => setSelected(code)}
                placeholder="Select a language"
                className={"text-tp-typography-secondary"}
                searchable
                selectedSize={17}
                optionsSize={17}
                selectButtonClassName="selected-country-button"
              /> */}
              <InputSelect
                id="backhand-type"
                label="Backhand type"
                value={fruit}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setFruit(e.target.value)
                }
                options={[
                  { value: "apple", label: "One-handed" },
                  { value: "banana", label: "Two-handed" },
                  { value: "orange", label: "Only slice" },
                ]}
                floatingLabelBackground={
                  "bg-[linear-gradient(to_bottom_right,#010101,#090909,#010101)]"
                }
              />
              <Button
                label="Sign up"
                themeColor="primary"
                onClick={() => console.log("Na ovome kroku")}
                className="mb-3.5 w-full self-center"
                loaderWithLabel
                buttonSize="base"
                labelClass=""
              />
            </form>

            {/* dividers with or */}
            <div className="mt-12 flex items-center justify-between md:mt-0">
              <Divider className="mt-4 w-45" />
              <Typography variant="label" as={"span"} className="mx-1 md:mx-0">
                or
              </Typography>
              <Divider className="mt-4 w-45" />
            </div>

            {/* Google Sign up link */}
            <Button
              label="Sign up with Google"
              themeColor="blank"
              onClick={() => toast.error("You successfully created account!")}
              className="bg-tp-background hover:bg-charcoal-800 mt-3 w-full scale-100 self-center rounded-full transition-all duration-500 hover:scale-103 md:mt-0"
              loaderWithLabel
              icon={<GLogo />}
            />

            <div className="mt-6 flex h-full items-center justify-center text-center md:mt-2">
              <Typography
                variant="label"
                as={"p"}
                color="text-tp-typography/80"
              >
                Already have an account?
              </Typography>
              <Button
                label={"Login"}
                buttonSize="x-small"
                themeColor="blank"
                labelClass="text-tp-typography/90"
                className="hover:underline"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* RIGHT — Video and Title part */}
      <div className="relative hidden h-full md:block md:w-1/2">
        {/* Logo with text */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center select-none">
          <WelcomeMessage videoReady={videoReady} />
        </div>

        {/* background video */}
        <Video
          videoSrc={tennisBalls}
          onReady={() => setVideoReady(true)}
          className="object-cover blur-[1.7px]"
        />

        {/* Blur part of left side of the video */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-full [background:linear-gradient(to_right,rgb(25_25_26)_5%,rgba(6_6_6/0.4)_7%)]" />
      </div>
    </div>
  );
};

export default LoginLayout;
