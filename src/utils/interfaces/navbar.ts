export interface INavbar {
  title: string;
  id: string;
  url?: string;
  subMenu?: { title: string; id: string; url: string }[];
}
