export interface IPlayer {
  name: string;
  image: string;
  flag: string;
  joinedDate: string;
  mapsPlayed: number;
  trophies: number;
  wins: number;
  lost: number;
  tied: number;
  rating: number;
  dateOfBirth: string;
  status: string;
}

export interface ICoach {
  firstName: string;
  lastName: string;
  nicName: string;
  image: string;
  flag: string;
  joinedDate: string;
  mapsCoached: number;
  trophies: number;
  wins: number;
  lost: number;
  tied: number;
}

export interface ITeamRank {
  rank: number;
  teamId: string;
  teamName: string;
  weeksInTop: number;
  wins: number;
  lost: number;
  tied: number;
  crrWinStreak: 4;
  points: number;
  logo: string;
  compare: number;
  flag: string;
  country: string;
  coach: ICoach;
  players: IPlayer[];
}
