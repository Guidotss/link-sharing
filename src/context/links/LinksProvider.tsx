"use client";
import { useReducer, FC } from "react";
import { LinksContext, linksReducer } from ".";
import { Links } from "@/interfaces";

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
      name: "github",
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
        payload: {id, url },
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
    if(result.destination.index === result.source.index) return;

    const items = Array.from(state.links!);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch({
      type: "[LINKS] - Reoder_links",
      payload: items,
    });
  }


  return (
    <LinksContext.Provider
      value={{
        ...state,

        createNewLink,
        setCurrentLink,
        onDragEnd
      }}
    >
      {children}
    </LinksContext.Provider>
  );
};
