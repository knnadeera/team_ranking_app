interface IHeaderTeam {
  flag: string;
  teamName: string;
  points: number;
}

export interface IHeaderCard {
  time: string;
  team1: IHeaderTeam;
  team2: IHeaderTeam;
}
