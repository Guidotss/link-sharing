"use client";
import React, { FC, useContext, useEffect, useState } from "react";
import { ChevronDownIcon, FrontendMentorIcon } from "@/components/ui";
import { selectOptions } from "@/constants/selectOptions";
import { Links } from "@/interfaces";
import { LinksContext } from "@/context";

interface LinksCustomSelectProps {
  setLink: React.Dispatch<React.SetStateAction<{ name: string; url: string }>>;
  link?: Links;
}

export const LinksCustomSelect: FC<LinksCustomSelectProps> = ({
  setLink,
  link,
}) => {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const { links } = useContext(LinksContext);
  const [selectedOption, setSelectedOption] = useState({
    name: "FrontendMentor",
    icon: () => FrontendMentorIcon(),
  });

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
          {selectedOption.icon()}
          <span>{selectedOption.name}</span>
        </div>
        <div>
          <ChevronDownIcon />
        </div>
      </div>
      {isSelectOpen && (
        <div className="h-[200px] overflow-y-scroll absolute bg-white w-[34%] z-10 shadow-2xl scrollbar mt-5 rounded-lg">
          <>
            {selectOptions.map((option, index) => (
              <div
                key={index}
                className="flex gap-2 items-center text-lg border-b-[1px] p-2 cursor-pointer"
                onClick={() => {
                  setSelectedOption({ name: option.name, icon: option.icon });
                  setLink((prev) => ({ ...prev, name: option.name }));
                  setIsSelectOpen(false);
                }}
              >
                {option.icon()}
                <span>{option.name}</span>
              </div>
            ))}
          </>
        </div>
      )}
    </>
  );
};
