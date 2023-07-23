import { Links } from "@/interfaces";
import { LinksState } from ".";

type LinksActionType =
  | { type: "[LINKS] - Create_link"; payload: Links }
  | {
      type: "[LINKS] - Set_current_link";
      payload: { id: string; url?: string };
    }
  | { type: "[LINKS] - Reoder_links"; payload: Links[] }
  | { type: "[LINKS] - Load_links"; payload: Links[] }
  | { type: "[LINKS] - Remove_link"; payload: string }
  | { type: "[LINKS] - Update_links"; payload: Links[] }
  | { type: "[LINKS] - Set_is_editing"; payload: boolean }

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
    case "[LINKS] - Remove_link": 
      return { 
        ...state,
        links: state.links?.filter(link => link.id !== action.payload)!
      }
    case "[LINKS] - Update_links":
      return {
        ...state,
        links: action.payload,
      };
    case "[LINKS] - Set_is_editing":
      return {
        ...state,
        isEditing: action.payload,
      }

    default:
      return {
        ...state,
      };
  }
};
