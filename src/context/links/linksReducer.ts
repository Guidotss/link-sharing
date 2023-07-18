import { Links } from "@/interfaces";
import { LinksState } from ".";

type LinksActionType =
  | { type: "[LINKS] - Create_link"; payload: Links }
  | { type: "[LINKS] - Set_current_link"; payload: string };

export const linksReducer = (state: LinksState, action: LinksActionType): LinksState => {
  switch (action.type) {
    case "[LINKS] - Create_link":
      return {
        ...state,
        links: [...state.links!, action.payload],
        currentLink: action.payload,
      };
    case "[LINKS] - Set_current_link":
      return {
        ...state,
        currentLink: state.links?.find((link) => link.id === action.payload)!,
      };
    default:
      return {
        ...state,
      };
  }
};
