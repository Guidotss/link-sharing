"use client"
import { Links } from '@/interfaces';
import { createContext } from 'react';


interface LinksContextProps {
    links: Links[] | null; 
    createNewLink: (link: Links) => void;
}


export const LinksContext = createContext<LinksContextProps>({} as LinksContextProps);