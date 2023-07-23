export interface Links {
  id?: string;
  url: string;
  name: LinksNames;
  userId: string | null; 
}

export type LinksNames =
  | "Github"
  | "FrontendMentor"
  | "Twitter"
  | "Linkedin"
  | "Youtube"
  | "Facebook"
  | "Twitch"
  | "DevTo"
  | "CodeWars"
  | "CodePen"
  | "FreeCodeCamp"
  | "GitLab"
  | "HashNode"
  | "StackOverFlow";
