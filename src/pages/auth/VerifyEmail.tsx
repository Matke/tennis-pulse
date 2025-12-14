import Button from "@/components/buttons/Button";
import Typography from "@/components/text/Typography";
import PulseLogo from "@/components/ui/PulseLogo";
import TickIcon from "@/components/ui/TickIcon";
import supabase from "@/services/supabase";
import { useEffect } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

const VerifyEmail = () => {
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "INITIAL_SESSION") {
        // handle initial session
        console.log(session);
      } else if (event === "SIGNED_IN") {
        console.log(session);
        // handle sign in event
      } else if (event === "SIGNED_OUT") {
        console.log(session);
        // handle sign out event
      } else if (event === "PASSWORD_RECOVERY") {
        console.log(session);
        // handle password recovery event
      } else if (event === "TOKEN_REFRESHED") {
        console.log(session);
        // handle token refreshed event
      } else if (event === "USER_UPDATED") {
        console.log(session);
        // handle user updated event
      }
    });
  }, []);
  return (
    <>
      <PulseLogo />
      <TickIcon />
      <Typography
        variant="paragraph-medium"
        as={"h2"}
        color="text-white"
        className="-mt-5 mb-12 text-center font-bold"
      >
        Account verified!
      </Typography>
      <Typography
        variant="paragraph"
        as={"h2"}
        color="text-tp-typography/80"
        className="-mt-5 mb-12 text-center"
      >
        Your account is now activated. You can start using the application.
      </Typography>
      <Link to="/welcome">
        <Button
          label="Continue"
          themeColor="primary"
          className="mb-3.5 w-full self-center"
          buttonSize="large"
          loaderText="Serving app!"
          iconPosition="right"
          uppercaseLabel
          icon={<FaCircleArrowRight className="h-5 w-5" />}
        />
      </Link>
    </>
  );
};

export default VerifyEmail;
