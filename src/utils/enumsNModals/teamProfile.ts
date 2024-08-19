import { ITab } from "../interfaces/tabSet.interface";
import { IMatches } from "../interfaces/teamProfile.interface";

export enum ETeamProfileTabs {
  INFO = "infoBox",
  ROSTER = "rosterBox",
  MATCHES = "matchesBox",
}

export enum EGroup {
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
}

export enum EChartTabs {
  CORE = "CORE",
  TEAM = "TEAM",
}

export const teamProfileTabs: ITab[] = [
  { id: ETeamProfileTabs.INFO, title: "Info" },
  { id: ETeamProfileTabs.ROSTER, title: "Roster" },
  { id: ETeamProfileTabs.MATCHES, title: "Matches" },
];

export const matches: IMatches[] = [
  {
    date: "2024-08-18",
    time: "23:40",
    team1: {
      teamId: "4021",
    },
    team2: {
      teamId: "4023",
    },
  },
  {
    date: "2024-08-20",
    time: "23:40",
    team1: {
      teamId: "4021",
    },
    team2: {
      teamId: "4023",
    },
  },
  {
    date: "2024-08-21",
    time: "01:30",
    team1: {
      teamId: "4024",
    },
    team2: {
      teamId: "4021",
    },
  },
  {
    date: "2024-08-19",
    time: "01:30",
    team1: {
      teamId: "4024",
    },
    team2: {
      teamId: "4021",
    },
  },
  {
    date: "2024-08-16",
    time: "01:30",
    team1: {
      teamId: "4021",
    },
    team2: {
      teamId: "4024",
    },
  },
];

export const rankingHistoryDetails: {
  teamId: string;
  rankingHistory: { date: string; value: number }[];
}[] = [
  {
    teamId: "4021",
    rankingHistory: [
      { date: "2024-08-18", value: 1 },
      { date: "2024-08-11", value: 3 },
      { date: "2024-08-04", value: 5 },
      { date: "2024-07-28", value: 7 },
      { date: "2024-07-21", value: 2 },
      { date: "2024-07-14", value: 6 },
      { date: "2024-07-07", value: 4 },
      { date: "2024-06-30", value: 8 },
      { date: "2024-06-23", value: 1 },
      { date: "2024-06-16", value: 9 },
      { date: "2024-06-09", value: 2 },
      { date: "2024-06-02", value: 3 },
      { date: "2024-05-26", value: 5 },
      { date: "2024-05-19", value: 7 },
      { date: "2024-05-12", value: 1 },
      { date: "2024-05-05", value: 4 },
      { date: "2024-04-28", value: 6 },
      { date: "2024-04-21", value: 8 },
      { date: "2024-04-14", value: 3 },
      { date: "2024-04-07", value: 1 },
      { date: "2024-03-31", value: 9 },
      { date: "2024-03-24", value: 5 },
      { date: "2024-03-17", value: 7 },
      { date: "2024-03-10", value: 8 },
      { date: "2024-03-03", value: 9 },
      { date: "2024-02-25", value: 4 },
      { date: "2024-02-18", value: 6 },
      { date: "2024-02-11", value: 8 },
      { date: "2024-02-04", value: 3 },
      { date: "2024-01-28", value: 1 },
      { date: "2024-01-21", value: 9 },
      { date: "2024-01-14", value: 5 },
      { date: "2024-01-07", value: 7 },
      { date: "2023-12-31", value: 2 },
      { date: "2023-12-24", value: 1 },
      { date: "2023-12-17", value: 4 },
      { date: "2023-12-10", value: 6 },
      { date: "2023-12-03", value: 8 },
      { date: "2023-11-26", value: 3 },
      { date: "2023-11-19", value: 1 },
      { date: "2023-11-12", value: 9 },
      { date: "2023-11-05", value: 5 },
      { date: "2023-10-29", value: 7 },
      { date: "2023-10-22", value: 2 },
      { date: "2023-10-15", value: 1 },
      { date: "2023-10-08", value: 4 },
      { date: "2023-10-01", value: 6 },
      { date: "2023-09-24", value: 8 },
      { date: "2023-09-17", value: 3 },
      { date: "2023-09-10", value: 1 },
      { date: "2023-09-03", value: 9 },
      { date: "2023-08-27", value: 5 },
      { date: "2023-08-20", value: 7 },
      { date: "2023-08-13", value: 2 },
    ],
  },
];
