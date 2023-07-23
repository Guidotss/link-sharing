"use client";
import { useReducer, FC, useEffect } from "react";
import { LinksContext, linksReducer } from ".";
import { Links } from "@/interfaces";
import Cookies from "js-cookie";

interface LinkProviderProps {
  children: React.ReactNode;
}

export interface LinksState {
  links: Links[] | null;
  currentLink: Links | null;
}

const LINKS_INITIAL_STATE: LinksState = {
  links: [],
  currentLink: null,
};

export const LinksProvider: FC<LinkProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(linksReducer, LINKS_INITIAL_STATE);

  const createNewLink = () => {
    if (state.links?.length === 5) return;

    const newLink = {
      id: `${(Math.random() * 1000).toFixed(0)}`,
      name: "Github",
      url: "",
      userId: null,
    } as Links;

    dispatch({
      type: "[LINKS] - Create_link",
      payload: newLink,
    });
  };

  const setCurrentLink = (id: string, url?: string) => {
    if (url) {
      dispatch({
        type: "[LINKS] - Set_current_link",
        payload: { id, url },
      });
      return;
    }
    dispatch({
      type: "[LINKS] - Set_current_link",
      payload: { id },
    });
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;

    const items = Array.from(state.links!);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch({
      type: "[LINKS] - Reoder_links",
      payload: items,
    });
  };

  const saveLinks = async (userId: string, links: Links[]) => {
    try {
      const linksToSend = links.map((link) => {
        return {
          name: link.name,
          url: link.url,
        };
      });

      const response = await fetch("/api/links/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, links: linksToSend }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadLinks = async () => {
    try {
      const userId = Cookies.get("userId");
      if (!userId) {
        dispatch({
          type: "[LINKS] - Load_links",
          payload: [],
        });
        return;
      }
      const response = await fetch(`/api/links`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "user-id": userId,
        },
      });
      const data = await response.json();
      dispatch({
        type: "[LINKS] - Load_links",
        payload: data.links,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LinksContext.Provider
      value={{
        ...state,

        createNewLink,
        setCurrentLink,
        onDragEnd,
        saveLinks,
        loadLinks,
      }}
    >
      {children}
    </LinksContext.Provider>
  );
};
