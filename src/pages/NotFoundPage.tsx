// components
import Button from "@/components/buttons/Button";
import Typography from "@/components/text/Typography";
import { useNavigate } from "react-router";
import notFound from "../assets/notFound.png";
import logo from "../assets/logo.png";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <main className="bg-charcoal-900 grid h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="-mt-12">
        <Typography variant="title" className="text-center text-3xl">
          <div className="flex items-center justify-center">
            <span>4</span>
            <img src={logo} className="h-10 w-10" />
            <span>4</span>
          </div>
        </Typography>
        <Typography as="h1" variant="title" className="text-center text-6xl">
          Page not found
        </Typography>
        <img src={notFound} className="mt-8 h-70 w-150 rounded-2xl"></img>

        <div className="mt-10 flex items-center justify-center gap-x-6">
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
