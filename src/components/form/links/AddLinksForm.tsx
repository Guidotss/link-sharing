"use client";

import { useContext, useRef, useState } from "react";
import { LinksContext } from "@/context/links/LinksContext";
import { Links } from "@/interfaces";
import { LinksCustomSelect } from "./LinksCustomSelect";

export const AddLinksForm = () => {
  const { links, createNewLink } = useContext(LinksContext);

  const [link, setLink] = useState({
    name: "",
    url: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createNewLink(link as Links);
  };

  return (
    <form className="flex flex-col items-center mt-10 " onSubmit={onSubmit}>
      <div className="flex flex-col w-full bg-gray-100 p-10 rounded-lg mb-10">
        <div className="w-full flex justify-between">
          <h3 className="text-grey font-semibold">
            Link # {links?.length ? links?.length + 1 : 1}
          </h3>
          <button className="text-grey">Remove</button>
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <LinksCustomSelect setLink={setLink} link={link as Links}/>
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

      {links?.map((linkItem: Links, index: number) => (
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
              <LinksCustomSelect setLink={setLink} link={link as Links} />
            </div>
            <div>
              <span className="text-sm text-grey">Link</span>
              <input
                className="w-full px-5 py-2 mt-2 border-[1px] border-grey rounded-lg focus:shadow-lg focus:shadow-purple focus:outline-none focus:border-purple transition-all"
                type="text"
                name="url"
                placeholder="https://www.example.com"
                value={linkItem.url}
                onChange={(e) => setLink({ ...linkItem, url: e.target.value })}
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
