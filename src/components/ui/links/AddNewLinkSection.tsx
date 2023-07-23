"use client";
import { useContext, useEffect, useState } from "react";
import { EmptySection } from "./EmptySection";
import { AddLinksFormGrid } from "@/components/form/links/AddLinksFormGrid";
import { LinksContext } from "@/context";
import { AddNewLinkForm } from "@/components/form/links/AddNewLinkForm";

export const AddNewLinkSection = () => {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const { createNewLink, isEditing, currentLink } = useContext(LinksContext);
  let condition = isEditing && currentLink;
  useEffect(() => {
    if (condition) {
      setIsSelectOpen(false);
    }
  }, [condition]);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">Customize your links</h1>
        <p className="mt-2 text-grey">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <button
          className="border-[1px] border-purple rounded-lg w-full py-2 mt-10 font-semibold text-purple hover:bg-light_purple transition-all"
          onClick={() => {
            setIsSelectOpen(true);
            createNewLink();
          }}
        >
          + Add new link
        </button>
      </div>
      {condition && !isSelectOpen ? (
        <AddNewLinkForm link={currentLink!} />
      ) : (
        <>{isSelectOpen ? <AddLinksFormGrid /> : <EmptySection />}</>
      )}
    </>
  );
};
