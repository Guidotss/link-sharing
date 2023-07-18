"use client";
import { FC, useState } from "react";
import { ChevronDownIcon } from "@/components/ui/";
import { selectOptions } from "@/constants/selectOptions";
import { Links, LinksNames } from "@/interfaces";

interface LinksCustomSelectProps {
  link?: Links;
}

export const LinksCustomSelect: FC<LinksCustomSelectProps> = ({
  link,
}) => {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

  const currentLink = selectOptions.find((option) => option.name.toLocaleLowerCase() === link?.name.toLocaleLowerCase());


  return (
    <>
      <span className="mt-5 text-sm text-grey">Platform</span>
      <div
        className={`w-full flex items-center justify-between px-5 py-3 mt-2 border-[1px] border-grey rounded-lg ${
          isSelectOpen
            ? "shadow-lg  shadow-purple outline-none border-purple transition-all cursor-pointer"
            : ""
        }`}
        onClick={() => setIsSelectOpen(!isSelectOpen)}
      >
        <div className="flex items-center gap-2">
          {currentLink?.icon()}
          <span>{currentLink?.name}</span>
        </div>
        <ChevronDownIcon />
      </div>
      {isSelectOpen && (
        <div className="h-[200px] overflow-y-scroll absolute bg-white w-[34%] z-10 shadow-2xl scrollbar mt-5 rounded-lg">
          {selectOptions.map((option, index) => (
            <div
              key={index}
              className="flex gap-2 items-center text-lg border-b-[1px] p-2 cursor-pointer"
              onClick={() => {
                setIsSelectOpen(false);
                link!.name = option.name as LinksNames;  

              }}
            >
              {option.icon()}
              <span>{option.name}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
