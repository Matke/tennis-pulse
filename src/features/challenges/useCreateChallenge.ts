import { useMutation } from "@tanstack/react-query";
import { createChallenge as createChallengeApi } from "@/services/apiChallenges";
import { toast } from "react-hot-toast";
import type { CreateChallengeData } from "@/types/challengeTypes";

export const useCreateChallenge = () => {
  const { mutate: createChallenge, isPending: isCreatingChallenge } =
    useMutation({
      mutationFn: (newChallengeData: CreateChallengeData) =>
        createChallengeApi(newChallengeData),
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: () => {
        toast.success("Challenge successfully created");
      },
    });

  return { createChallenge, isCreatingChallenge };
};
