"use client";
import { useContext, useEffect } from "react";
import { LinksContext } from "@/context";
import { Links } from "@/interfaces";
import { LinkCard } from "./LinkCard";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

export const LinksGrid = () => {
  const { links, onDragEnd, loadLinks } = useContext(LinksContext);

  useEffect(() => {
    loadLinks();
  },[]); 

  return (
    <DragDropContext
      onDragEnd={(result) => {
        onDragEnd(result);
      }}
    >
      <div className="flex flex-col absolute ml-8 -mt-2 sm:w-[240px] 2xl:w-[13%]">
        <Droppable droppableId="links">
          {(provided) => (
            <div
              className="mt-1"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {links?.map((link: Links, index) => (
                <LinkCard key={index} link={link} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};
