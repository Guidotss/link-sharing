"use client";
import { useContext, useRef, useState } from "react";
import { LinksContext } from "@/context/links/LinksContext";
import { AuthContext } from "@/context";
import { AddNewLinkForm } from "./AddNewLinkForm";
import { Links } from "@/interfaces";

export const AddLinksFormGrid = () => {
  const { links, saveLinks } = useContext(LinksContext);
  const linksLengthRef = useRef<number>(links!.length);

  const { user } = useContext(AuthContext);

  const handleSaveLinks = () => {
    const newLinks = Array.from(links!);
    const linksToSave = newLinks.splice(linksLengthRef.current - 1);
    console.log(linksToSave); 
    saveLinks(user?.id!, linksToSave as Links[]);
  };

  return (
    <>
      {links?.map((link, index) => (
        <AddNewLinkForm key={index} link={link} index={index} />
      ))}

      <div
        className="w-full flex justify-end mt-20 border-t-[1px] p-5"
        onClick={handleSaveLinks}
      >
        <button className="bg-purple px-5 py-2 rounded-lg text-white font-semibold hover:bg-soft_purple transition-all">
          Save
        </button>
      </div>
    </>
  );
};
