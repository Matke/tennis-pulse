// components
import Button from "@/components/buttons/Button";
import Typography from "@/components/text/Typography";
import { useNavigate } from "react-router";
import p404v3 from "../assets/p404v3.png";
import logo from "../assets/logo.png";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <main className="bg-charcoal-900 grid h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="-mt-12 gap-x-10">
        <Typography variant="title" className="text-center text-3xl">
          404
        </Typography>
        <Typography as="h1" variant="title" className="text-center text-6xl">
          Page not found
        </Typography>
        <img src={p404v3} className="mt-8 h-70 w-150"></img>
        <Typography
          variant="subtitle"
          className="mt-8 text-center"
          color="text-tp-typography/50"
        >
          Sorry, we couldn’t find the page you’re looking for.
        </Typography>
        <div className="mt-7 flex items-center justify-center gap-x-6">
          <Button
            label="Serve me back"
            themeColor="primary"
            onClick={() => navigate(-1)}
          />
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
