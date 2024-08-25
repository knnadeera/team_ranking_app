import { ITab } from "../interfaces/tabSet.interface";

export enum EPlayerProfileTabs {
  INFO = "infoBox",
  IN_GAME = "inGameBox",
  HEALTH_WELLNESS = "healthNWellnessBox",
  BIOMETRICS = "biometricsBox",
  MATCHES = "matchesBox",
}

export const playerProfileTabs: ITab[] = [
  { id: EPlayerProfileTabs.INFO, title: "Info" },
  { id: EPlayerProfileTabs.IN_GAME, title: "In Game" },
  { id: EPlayerProfileTabs.HEALTH_WELLNESS, title: "Health & Wellness" },
  { id: EPlayerProfileTabs.BIOMETRICS, title: "Biometrics" },
  { id: EPlayerProfileTabs.MATCHES, title: "Matches" },
];
