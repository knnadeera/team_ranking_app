import { INavbar } from "../interfaces/navbar.interface";

export enum ENavIds {
  NEWS = "News",
  MATCHES = "Matches",
  RESULTS = "Results",
  EVENTS = "Events",
  STATS = "Stats",
  // FANTASY = "Fantasy",
  // FORUM = "Forum",
  MEDIA = "Media",
  // BETTING = "Betting",
  LIVE = "live",
}

export const menuItems: INavbar[] = [
  { title: ENavIds.NEWS, id: ENavIds.NEWS, url: "/" },
  { title: ENavIds.MATCHES, id: ENavIds.MATCHES, url: "/matches" },
  { title: ENavIds.RESULTS, id: ENavIds.RESULTS, url: "/results" },
  {
    title: ENavIds.EVENTS,
    id: ENavIds.EVENTS,
    subMenu: [
      { title: "All events", id: "All events", url: "/events/all-events" },
      {
        title: "Upcoming events",
        id: "Upcoming events",
        url: "/events/upcoming-events",
      },
      { title: "Past events", id: "Past events", url: "/events/past-events" },
    ],
  },
  {
    title: ENavIds.STATS,
    id: ENavIds.STATS,
    subMenu: [
      {
        title: "Stats overview",
        id: "Stats overview",
        url: "/stats/stat-overview",
      },
      { title: "Top players", id: "Top players", url: "/stats/top-players" },
      { title: "Top teams", id: "Top teams", url: "/stats/top-teams" },
      { title: "map", id: "map", url: "/stats/map" },
    ],
  },
  // {
  //   title: ENavIds.FANTASY,
  //   id: ENavIds.FANTASY,
  //   subMenu: [
  //     {
  //       title: "Fantasy overview",
  //       id: "Fantasy overview",
  //       url: "/fantasy/fantasy-overview",
  //     },
  //     {
  //       title: "IEM Cologne 2024 Play-in",
  //       id: "IEM Cologne 2024 Play-in",
  //       url: "/fantasy/iem-cologne-2024-play-in",
  //     },
  //     {
  //       title: "IEM Cologne 2024 - Group",
  //       id: "IEM Cologne 2024 - Group",
  //       url: "/fantasy/iem-cologne-2024-group",
  //     },
  //   ],
  // },
  // {
  //   title: ENavIds.FORUM,
  //   id: ENavIds.FORUM,
  //   subMenu: [
  //     { title: "All forums", id: "All forums", url: "/forum/all-forums" },
  //     {
  //       title: "Counter-Strike",
  //       id: "Counter-Strike",
  //       url: "/forum/counter-strike",
  //     },
  //     { title: "Fantasy", id: "Fantasy", url: "/forum/fantasy" },
  //     { title: "Betting", id: "Betting", url: "/forum/betting" },
  //   ],
  // },
  {
    title: ENavIds.MEDIA,
    id: ENavIds.MEDIA,
    subMenu: [
      {
        title: "HLTV Confirmed",
        id: "HLTV Confirmed",
        url: "/media/hltv-confirmed",
      },
      { title: "Galleries", id: "Galleries", url: "/media/galleries" },
    ],
  },
  // {
  //   title: ENavIds.BETTING,
  //   id: ENavIds.BETTING,
  //   subMenu: [
  //     {
  //       title: "Betting analytics",
  //       id: "Betting analytics",
  //       url: "/betting/betting-analytics",
  //     },
  //     {
  //       title: "Compare odds",
  //       id: "Compare odds",
  //       url: "/betting/compare-odds",
  //     },
  //     {
  //       title: "Betting site",
  //       id: "Betting site",
  //       url: "/betting/betting-site",
  //     },
  //   ],
  // },
  { title: ENavIds.LIVE, id: ENavIds.LIVE, url: "/live" },
];
