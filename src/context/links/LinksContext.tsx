"use client";
import { Links } from "@/interfaces";
import { createContext } from "react";

interface LinksContextProps {
  links: Links[] | null;
  currentLink: Links | null;
  createNewLink: (link?: Links) => void;
  setCurrentLink: (id: string, url?: string) => void;
  onDragEnd: (result: any) => void;
}

export const LinksContext = createContext<LinksContextProps>(
  {} as LinksContextProps
);
