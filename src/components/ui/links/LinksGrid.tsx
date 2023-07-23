"use client";
import { useContext } from "react";
import { LinksContext } from "@/context";
import { Links } from "@/interfaces";
import { LinkCard } from "./LinkCard";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

export const LinksGrid = () => {
  const { links, onDragEnd } = useContext(LinksContext);

  return (
    <DragDropContext
      onDragEnd={(result) => {
        onDragEnd(result);
      }}
    >
      <div className="flex flex-col absolute ml-8 -mt-2 w-[19%] 2xl:w-[13%]">
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
