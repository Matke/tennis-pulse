import supabase from "@/services/supabase";
// types
import type { CreateChallengeData } from "@/types/challengeTypes";

export const createChallenge = async ({
  challengeData,
  challengerId,
  opponentId,
  status = "pending",
}: CreateChallengeData) => {
  // constructing new challenge object
  const newChallenge = { ...challengeData, challengerId, opponentId, status };

  const { data, error } = await supabase
    .from("matches")
    .insert([newChallenge])
    .select();

  if (error) throw new Error("Error while creating challenge!");

  console.log(data);

  return data;
};
