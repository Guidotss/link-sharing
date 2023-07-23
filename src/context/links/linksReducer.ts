import { Links } from "@/interfaces";
import { LinksState } from ".";

type LinksActionType =
  | { type: "[LINKS] - Create_link"; payload: Links }
  | {
      type: "[LINKS] - Set_current_link";
      payload: { id: string; url?: string };
    }
  | { type: "[LINKS] - Reoder_links"; payload: Links[] }
  | { type: "[LINKS] - Load_links"; payload: Links[] };

export const linksReducer = (
  state: LinksState,
  action: LinksActionType
): LinksState => {
  switch (action.type) {
    case "[LINKS] - Create_link":
      return {
        ...state,
        links: [...state.links!, action.payload],
      };
    case "[LINKS] - Set_current_link":
      const { id, url } = action.payload;
      const currentLink = state.links?.find((link) => link.id === id);
      if (currentLink) {
        currentLink.url = url ? url : currentLink.url;
      }
      return {
        ...state,
        links: [...state.links!],
        currentLink: currentLink!,
      };

    case "[LINKS] - Reoder_links":
      return {
        ...state,
        links: action.payload,
      };

    case "[LINKS] - Load_links":
      return {
        ...state,
        links: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
