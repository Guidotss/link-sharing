"use client";

import { useContext } from "react";
import { LinksContext } from "@/context";
import { Links } from "@/interfaces";
import { LinksCustomSelect } from "./LinksCustomSelect";

export const AddLinksForm = () => {
  const { links } = useContext(LinksContext);
  return ( 
    <div className="flex flex-col items-center mt-24"> 
      {links?.map((link:Links, index: number) => (
        <div key={index} className="flex flex-col w-full">
          <div className="w-full flex justify-between">
            <h3 className="text-grey font-semibold">Link #{index + 1}</h3>
            <button className="text-grey">Remove</button>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <LinksCustomSelect/>
            </div>
            <div>
              <span className="text-sm text-grey">Link</span>
              <input 
                className="w-full px-5 py-2 mt-2 border-[1px] border-grey rounded-lg focus:shadow-lg focus:shadow-purple focus:outline-none focus:border-purple transition-all"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};
