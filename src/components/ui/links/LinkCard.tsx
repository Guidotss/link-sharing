"use client";
import { FC, useContext, useState } from "react";
import { Draggable } from "@hello-pangea/dnd";
import { selectOptions } from "@/constants";
import { Links } from "@/interfaces";
import { RightArrowIcon } from "../icons";
import "animate.css";
import { LinksContext } from "@/context";

interface LinkCardProps {
  link: Links;
  index: number;
}

export const LinkCard: FC<LinkCardProps> = ({ link, index }) => {
  const [isCopied, setIsCopied] = useState(false);
  const { setIsEditing, setCurrentLink } = useContext(LinksContext); 
  let bgColor = selectOptions.find(
    (option) => option.name.toLowerCase() === link.name.toLowerCase()
  )?.bgColor;
  if (bgColor == "white") {
    bgColor = `bg-${bgColor}`;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(link.url);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };


  const handleCLick = () => {
    setIsEditing(true);
    setCurrentLink(link.id!);
  }


  return (
    <Draggable draggableId={link.id!} index={index} key={link.id}>
      {(provided) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div
            className={` ${bgColor} rounded-lg flex justify-between items-center py-3 text-white mb-4`}
            onClick={handleCLick}
          >
            <div className="flex items-center gap-2 ml-2 ">
              {selectOptions
                .find(
                  (option) =>
                    option.name.toLowerCase() === link.name.toLowerCase()
                )
                ?.icon({ fill: "#fff" })}
              <h1 className={`${bgColor == "bg-white" ? "text-black" : ""}`}>
                {link.name}
              </h1>
            </div>
            <div className="mr-2 2xl:mr-4 cursor-pointer" onClick={handleCopy}>
              {isCopied ? (
                <span className="absolute right-3 -mt-3 animate__animated animate__fadeInDown">
                  Copied
                </span>
              ) : (
                <RightArrowIcon
                  isWhite={bgColor == "bg-white" ? false : true}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};
