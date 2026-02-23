export type ChallengeData = {
  id: string;
  challengerId: string;
  opponentId: string;
  status: ChallengeStatus;
  matchDate: string;
  surface: string;
  matchFormat: number;
  gamesPerSet: number;
  decidingSetTiebreakLength: number;
  winnerId: string;
  courtName: string;
  currentServerId: string;
  currentSetId: string;
  completedAt: string;
  challengerVisible: boolean;
  opponentVisible: boolean;
  createdAt: string;
};

export type ChallengeStatus =
  | "pending"
  | "rejected"
  | "upcoming"
  | "active"
  | "completed"
  | "archived";

export type CreateChallengeFormData = {
  matchDate: string;
  courtName: string;
  matchFormat: number;
  surface: string;
  gamesPerSet: number;
  decidingSetTiebreakLength: number;
};

export type CreateChallengeData = {
  challengeData: CreateChallengeFormData;
  challengerId: string;
  opponentId: string;
  status?: ChallengeStatus;
};
