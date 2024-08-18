import { ITab } from "../interfaces/tabSet.interface";

export enum ETeamProfileTabs {
  INFO = "infoBox",
  ROSTER = "rosterBox",
  MATCHES = "matchesBox",
}

export const teamProfileTabs: ITab[] = [
  { id: ETeamProfileTabs.INFO, title: "Info" },
  { id: ETeamProfileTabs.ROSTER, title: "Roster" },
  { id: ETeamProfileTabs.MATCHES, title: "Matches" },
];
