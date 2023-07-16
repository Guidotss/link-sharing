export interface Links {
  id?: string;
  url: string;
  name: LinksNames;
}

type LinksNames =
  | "github"
  | "frontendMentor"
  | "twitter"
  | "linkedin"
  | "youtube"
  | "facebook"
  | "twitch"
  | "devto"
  | "codewars"
  | "codepen"
  | "freecodecamp"
  | "gitlab"
  | "hashnode"
  | "stackoverflow";
