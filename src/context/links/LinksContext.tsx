"use client";
import { Links } from "@/interfaces";
import { createContext } from "react";

interface LinksContextProps {
  links: Links[] | null;
  currentLink: Links | null;
  createNewLink: (link?: Links) => void;
  setCurrentLink: (id: string) => void;
}

export const LinksContext = createContext<LinksContextProps>(
  {} as LinksContextProps
);
