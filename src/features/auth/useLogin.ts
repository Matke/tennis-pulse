import { useMutation } from "@tanstack/react-query";

// api function
import { login as loginApi } from "@/services/apiAuth";

// toast
import { toast } from "react-hot-toast";

export const useLogin = () => {
  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success("Successfully logged in!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { login, isPending };
};
