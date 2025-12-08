import { useMutation } from "@tanstack/react-query";

// api function
import { signup as signUpApi } from "@/services/apiAuth";

// toast
import { toast } from "react-hot-toast";

export const useSignup = () => {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      toast.success("Account successfully created!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { signup, isPending };
};
