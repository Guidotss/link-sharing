"use client";
import { FC, useEffect, useState } from "react";
import { selectOptions } from "@/constants";
import { Links } from "@/interfaces";
import { RightArrowIcon } from "../icons";
import { setBackgroundColor } from "@/helpers";

interface LinkCardProps {
  link: Links;
}

export const LinkCard: FC<LinkCardProps> = ({ link }) => {
  const [bgColor, setBgColor] = useState("");
  useEffect(() => {
    setBgColor(setBackgroundColor(link.name.toLowerCase()));
  }, [link.name]);

  return (
    <div
      className={` bg-${bgColor} rounded-lg flex justify-between items-center py-3 text-white`}
    >
      <div className="flex items-center gap-2 ml-2 ">
        {selectOptions
          .find(
            (option) => option.name.toLowerCase() === link.name.toLowerCase()
          )
          ?.icon({ fill: "#fff" })}
        <h1 className={`${bgColor == "white" ? "text-black" : ""}`}>
          {link.name}
        </h1>
      </div>
      <div className="mr-2">
        <RightArrowIcon isWhite={bgColor == "white" ? true : false} />
      </div>
    </div>
  );
};
