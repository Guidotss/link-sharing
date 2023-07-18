export const setBackgroundColor = (name: string) => {
  switch (name) {
    case "github":
      return "dark_grey";
    case "frontendmentor":
      return "white";
    case "twitter":
      return "twitter";
    case "linkedin":
      return "linkedin";
    case "youtube":
      return "red";
    case "facebook":
      return "facebook";
    case "twitch":
      return "twitch";
    case "devto":
      return "grey";
    case "codewars":
      return "codewars";
    case "freecodecamp":
      return "freecodecamp";
    case "gitlab":
      return "gitlab";
    case "hashnode":
      return "hashnode";
    case "stackoverflow":
      return "stackoverflow";
    default:
      return "white";
  }
};
