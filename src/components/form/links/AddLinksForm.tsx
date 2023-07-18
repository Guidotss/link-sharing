"use client";

import { useContext, useRef } from "react";
import { LinksContext } from "@/context/links/LinksContext";
import { LinksCustomSelect } from "./LinksCustomSelect";

export const AddLinksForm = () => {
  const { links, createNewLink, setCurrentLink } = useContext(LinksContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleCurrentLink = (id: string) => {
    setCurrentLink(id);
  }

  return (
    <>
      {links?.map((link, index) => (
        <form key={index} className="flex flex-col items-center mt-10 ">
          <div className="flex flex-col w-full bg-gray-100 p-10 rounded-lg mb-5" onClick={() => handleCurrentLink(link?.id!)}>
            <div className="w-full flex justify-between">
              <h3 className="text-grey font-semibold">
                Link # {index + 1}
              </h3>
              <button className="text-grey">Remove</button>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <LinksCustomSelect
                  link={ link }
                />
              </div>
              <div>
                <span className="text-sm text-grey">Link</span>
                <input
                  className="w-full px-5 py-2 mt-2 border-[1px] border-grey rounded-lg focus:shadow-lg focus:shadow-purple focus:outline-none focus:border-purple transition-all"
                  type="text"
                  placeholder="https://www.example.com"
                  name="url"
                  ref={inputRef}                  
                />
              </div>
            </div>
          </div>
        </form>
      ))}

      <div className="w-full flex justify-end mt-20 border-t-[1px] p-5">
        <button className="bg-purple px-5 py-2 rounded-lg text-white font-semibold hover:bg-soft_purple transition-all">
          Save
        </button>
      </div>
    </>
  );
};
