"use client";

import { useContext, useState } from "react";
import { LinksContext } from "@/context/links/LinksContext";
import { Links } from "@/interfaces";
import { LinksCustomSelect } from "./LinksCustomSelect";

export const AddLinksForm = () => {
  const { links } = useContext(LinksContext);
  const [ link, setLink ] = useState({ 
    name: '',
    url: ''
  });

  return (
    <form className="flex flex-col items-center mt-10">
      {links?.length === 0 && (
        <>
          <div className="flex flex-col w-full bg-gray-100 p-10 rounded-lg">
            <div className="w-full flex justify-between">
              <h3 className="text-grey font-semibold">Link #1</h3>
              <button className="text-grey">Remove</button>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <LinksCustomSelect  setLink={setLink}/>
              </div>
              <div>
                <span className="text-sm text-grey">Link</span>
                <input
                  className="w-full px-5 py-2 mt-2 border-[1px] border-grey rounded-lg focus:shadow-lg focus:shadow-purple focus:outline-none focus:border-purple transition-all"
                  placeholder="https://www.example.com"
                  type="text"
                  name="url"
                  onChange={(e) => setLink({ ...link, url: e.target.value })}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {links?.map((link: Links, index: number) => (
        <div
          key={index}
          className="flex flex-col w-full bg-gray-100 p-10 rounded-lg mb-5"
        >
          <div className="w-full flex justify-between">
            <h3 className="text-grey font-semibold">Link #{index + 1}</h3>
            <button className="text-grey">Remove</button>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <LinksCustomSelect  setLink={setLink}/>
            </div>
            <div>
              <span className="text-sm text-grey">Link</span>
              <input
                className="w-full px-5 py-2 mt-2 border-[1px] border-grey rounded-lg focus:shadow-lg focus:shadow-purple focus:outline-none focus:border-purple transition-all"
                type="text"
                placeholder="https://www.example.com"
                value={link.url}
                onChange={(e) => setLink({ ...link, url: e.target.value })}
                name="url"
              />
            </div>
          </div>
        </div>
      ))}
      <div className="w-full flex justify-end mt-20 border-t-[1px] p-5">
        <button className="bg-purple px-5 py-2 rounded-lg text-white font-semibold hover:bg-soft_purple transition-all">
          Save
        </button>
      </div>
    </form>
  );
};
