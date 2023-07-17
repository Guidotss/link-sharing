export const setBackgroundColor = (name: string) => {
    switch(name) {
        case "github": 
            return "bg-dark-grey"
        case "frontendMentor":
            return "bg-white"
        case "twitter":
            return "bg-twitter"
        case "linkedin":
            return "bg-linkedin"
        case "youtube":
            return "bg-red"
        case "facebook":
            return "bg-facebook"
        case "twitch":
            return "bg-twitch"
        case "devto":
            return "bg-grey"
        case "codewars":
            return "bg-codewars"
        case "freecodecamp":
            return "bg-freecodecamp"
        case "gitlab":
            return "bg-gitlab"
        case "hashnode":
            return "bg-hashnode"
        case "stackoverflow":
            return "bg-stackoverflow"
        default:
            return "bg-white"
    }
}
