"use client";
import { useState } from 'react';
import { EmptySection } from "./EmptySection";
import { AddLinksForm } from '@/components/form/links/AddLinksForm';


export const AddNewLinkSection = () => {
  const [ isSelectOpen, setIsSelectOpen ]  = useState<boolean>(false); 

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
          onClick={() => setIsSelectOpen(!isSelectOpen)}
        >
          + Add new link
        </button>
      </div>
      { 
        !isSelectOpen
          ? <EmptySection />
          : <AddLinksForm/>
      }
    </>
  );
};
