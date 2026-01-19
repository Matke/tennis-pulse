import { useMutation } from "@tanstack/react-query";

// api function
import { signup as signUpApi } from "@/services/apiAuth";

// toast
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

export const useSignup = () => {
  const navigate = useNavigate();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      toast.success(
        "Account successfully created! Please verify email address.",
      );

      // potentially not safe
      navigate("/email-confirmation", { state: { email: data?.user?.email } });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { signup, isPending };
};
