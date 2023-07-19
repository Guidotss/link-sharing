"use client";
import { useContext } from "react";
import { LinksContext } from "@/context";
import { Links } from "@/interfaces";
import { LinkCard } from "./LinkCard";
import { selectOptions } from "@/constants";

export const LinksGrid = () => {
  const { links } = useContext(LinksContext);
  return (
    <div className="flex flex-col absolute ml-8 -mt-2 gap-4 w-[19%] 2xl:w-[13%]">
      {links?.map((link: Links, index) => (
        <LinkCard
          key={index}
          link={link}
        />
      ))}
    </div>
  );
};
