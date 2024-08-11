export interface IPlayer {
  name: string;
  image: string;
  flag: string;
}

export interface ITeamRank {
  rank: number;
  teamName: string;
  points: number;
  logo: string;
  compare: number;
  players: IPlayer[];
}
