"use client";
import { useReducer, FC } from "react";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
import { LinksContext, linksReducer } from ".";
import { Links } from "@/interfaces";



interface LinkProviderProps {
  children: React.ReactNode;
}

export interface LinksState {
  links: Links[] | null;
  currentLink: Links | null;
  isEditing: boolean;
}

const LINKS_INITIAL_STATE: LinksState = {
  links: [],
  currentLink: null,
  isEditing: false,
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

  const setIsEditing = (isEditing: boolean) => {
    dispatch({
      type: "[LINKS] - Set_is_editing",
      payload: isEditing,
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

    console.log(state?.links?.length); 


    if(state.links?.length! > 5) { 
      toast.error("You have reached the limit of links", {
        style: {
          background: "#333",
          color: "#fff",
          borderRadius: "10px",
        },
        duration: 3000,
      });
      return;
    }

    try {
      const linksToSend = links.map((link) => {
        return {
          name: link.name,
          url: link.url,
        };
      });

      const linksWithOutRepeated = state.links?.filter(
        (link, index, self) =>
          index === self.findIndex((l) => l.name === link.name)
      );

      if (linksWithOutRepeated?.length != state.links?.length) {
        toast.error("You have repeated links", {
          style: {
            background: "#333",
            color: "#fff",
            borderRadius: "10px",
          },
          duration: 3000,
        });
        return;
      }

      const response = await fetch("/api/links/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, links: linksToSend }),
      });
      const data = await response.json();
      if (data.ok) {
        toast.success("Links saved successfully", {
          style: {
            background: "#333",
            color: "#fff",
            borderRadius: "10px",
          },
          duration: 3000,
        });
      }
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
      const response = await fetch("/api/links", {
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

  const removeLink = (linkId: string) => {
    try {

      if(!isNaN(+linkId)){ 
        dispatch({ 
          type: "[LINKS] - Remove_link",
          payload: linkId,
        }); 
        return; 
      }

      fetch("/api/links/remove", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ linkId }),
      });

      dispatch({
        type: "[LINKS] - Remove_link",
        payload: linkId,
      });

    } catch (error) {
      console.log(error);
    }
  };

  const updateLinks = async (link: Links) => {
    try {
      const response = await fetch("/api/links/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ link }),
      });
      const data = await response.json();
      if (data.ok) {
        toast.success("Link updated successfully", {
          style: {
            background: "#333",
            color: "#fff",
            borderRadius: "10px",
          },
          duration: 3000,
        });
        dispatch({
          type: "[LINKS] - Update_links",
          payload: data.link,
        });
      }
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
        removeLink,
        updateLinks,
        setIsEditing,
      }}
    >
      {children}
    </LinksContext.Provider>
  );
};
