"use client";
import { FC } from "react";
import { selectOptions } from "@/constants";
import { Links } from "@/interfaces";
import { RightArrowIcon } from "../icons";


interface LinkCardProps {
  link: Links;
}

export const LinkCard: FC<LinkCardProps> = ({ link }) => {
  let bgColor = selectOptions.find(
    (option) => option.name.toLowerCase() === link.name.toLowerCase()
  )?.bgColor;
  if (bgColor == "white") {
    bgColor = `bg-${bgColor}`;
  }



  return (
    <div
      className={` ${bgColor} rounded-lg flex justify-between items-center py-3 text-white`}
    >
      <div className="flex items-center gap-2 ml-2 ">
        {selectOptions
          .find(
            (option) => option.name.toLowerCase() === link.name.toLowerCase()
          )
          ?.icon({ fill: "#fff" })}
        <h1 className={`${bgColor == "bg-white" ? "text-black" : ""}`}>
          {link.name}
        </h1>
      </div>
      <div className="mr-2 2xl:mr-4">
        <RightArrowIcon isWhite={bgColor == "bg-white" ? false : true} />
      </div>
    </div>
  );
};
