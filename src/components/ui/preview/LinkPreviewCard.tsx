"use client"
import { FC } from "react";
import { useRouter } from 'next/navigation';
import { Links } from "@/interfaces";
import { selectOptions } from "@/constants";
import { RightArrowIcon } from "../icons";

interface LinkPreviewCardProps {
  link: Links;
}

export const LinkPreviewCard: FC<LinkPreviewCardProps> = ({ link }) => {

  const router = useRouter(); 

  let bgColor = selectOptions.find(
    (option) => option.name.toLowerCase() === link.name.toLowerCase()
  )?.bgColor;
  if (bgColor == "white") {
    bgColor = `bg-${bgColor}`;
  }


  const handleNavigate = () => {
    router.push(link.url);
  }

  return (
    <div
      key={link.id!}
      className={` ${bgColor} rounded-lg flex justify-between items-center 2xl:py-4 py-3 text-white mb-4 w-[230px]`}
    >
      <div className="flex items-center gap-2 ml-2 ">
        {selectOptions
          .find(
            (option) => option.name.toLowerCase() === link.name.toLowerCase()
          )
          ?.icon({ fill: "#fff" })}
        <h1 className={`${bgColor == "bg-white" ? "text-black" : ""}`}>
          {link.name}
        </h1>
      </div>
      <div className="mr-2 2xl:mr-4 cursor-pointer" onClick={handleNavigate}>
        <RightArrowIcon isWhite={bgColor == "bg-white" ? false : true} />
      </div>
    </div>
  );
};
