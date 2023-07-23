"use client";
import { Links } from "@/interfaces";
import { LinksCustomSelect } from "./LinksCustomSelect";
import { FC, useContext } from "react";
import { LinksContext } from "@/context";

interface AddNewLinkFormProps {
  link: Links;
  index?: number;
}

export const AddNewLinkForm: FC<AddNewLinkFormProps> = ({ link, index }) => {

    const { setCurrentLink, removeLink } = useContext(LinksContext); 


  const handleCurrentLink = (id: string) => {
    setCurrentLink(id);
  };

  const handleRemoveLink = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    removeLink(id);
  };

  return (
    <form className="flex flex-col items-center mt-10 ">
      <div
        className="flex flex-col w-full bg-gray-100 p-10 rounded-lg mb-5"
        onClick={() => handleCurrentLink(link?.id!)}
      >
        <div className="w-full flex justify-between">
          <h3 className="text-grey font-semibold">
            Link # {index ? index + 1 : 1}
          </h3>
          <button
            className="text-grey"
            onClick={(e) => handleRemoveLink(e, link?.id!)}
          >
            Remove
          </button>
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <LinksCustomSelect link={link} />
          </div>
          <div>
            <span className="text-sm text-grey">Link</span>
            <input
              className="w-full px-5 py-2 mt-2 border-[1px] border-grey rounded-lg focus:shadow-lg focus:shadow-purple focus:outline-none focus:border-purple transition-all"
              type="text"
              placeholder="https://www.example.com"
              name="url"
              value={link.url}
              onChange={(e) => setCurrentLink(link?.id!, e.target.value)}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
