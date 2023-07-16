"use client";

import { useContext } from "react";
import { LinksContext } from "@/context";
import { Links } from "@/interfaces";

export const AddLinksForm = () => {
  const { links } = useContext(LinksContext);
  return ( 
    <div className="flex flex-col items-center"> 
      {links?.map((link:Links, index: number) => (
        <div key={index}>{link.name}</div>
      ))}
    </div>
  )
};
