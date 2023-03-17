export type AddLocationData = {
  address: string;
  lat: number;
  lon: number;
  img: string;
};

export type LocationType = {
  id: number;
  address: string;
  img: string;
  lat: number;
  lon: number;
};

export type GuessLocationData = {
  lat: number;
  lon: number;
};

export type LeaderboardType = {
  createdAt: string;
  distance: number;
  user: UserLeaderboardType;
};

export type UserLeaderboardType = {
  firstName: string;
  lastName: string;
  avatar: string;
};
