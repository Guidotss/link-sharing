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

  console.log(state.currentLink); 

  const createNewLink = (link?: Links) => {
    if (state.links?.length === 5) return;

    if(!link) {
      const newLink = {

        id: `${Math.random() * 1000}`,
        name: "frontendMentor",
        url: "https://www.example.com",
        userId: null,
      } as Links;

      dispatch({
        type: "[LINKS] - Create_link",
        payload: newLink,
      });
      return;
    }
    dispatch({
      type: "[LINKS] - Create_link",
      payload: link!,
    });
  };

  const setCurrentLink = (id: string) => {
    dispatch({
      type: "[LINKS] - Set_current_link",
      payload: id,
    });
  };

  return (
    <LinksContext.Provider
      value={{
        ...state,

        createNewLink,
        setCurrentLink,
      }}
    >
      {children}
    </LinksContext.Provider>
  );
};
