"use client";
import { Links } from "@/interfaces";
import { createContext } from "react";

interface LinksContextProps {
  links: Links[] | null;
  currentLink: Links | null;
  isEditing: boolean;
  createNewLink: (link?: Links) => void;
  setCurrentLink: (id: string, url?: string) => void;
  onDragEnd: (result: any) => void;
  saveLinks: (userId: string, links: Links[]) => Promise<void>;
  removeLink: (id: string) => void;
  updateLinks: (link: Links) => void;
  loadLinks: () => Promise<void>;
  setIsEditing: (isEditing: boolean) => void; 
}

export const LinksContext = createContext<LinksContextProps>(
  {} as LinksContextProps
);
