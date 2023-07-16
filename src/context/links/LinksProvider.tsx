"use client"
import { useReducer, FC } from 'react';
import { LinksContext, linksReducer } from '.'; 
import { Links } from '@/interfaces';


interface LinkProviderProps {
    children: React.ReactNode;
}


export interface LinksState {
    links: Links[] | null;
}


const LINKS_INITIAL_STATE: LinksState = {
    links: [
        {
            name: "github",
            url: "https://github.com/Guidotss"
        }
    ],
}


export const LinksProvider: FC<LinkProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(linksReducer, LINKS_INITIAL_STATE);

    const createNewLink = (link: Links) => {
        dispatch({
            type: '[LINKS] - Create_link',
            payload: link,
        });
    }

    return (
        <LinksContext.Provider value={{
            ...state,

            createNewLink,
        }}>
            {children}
        </LinksContext.Provider>
    );
}

