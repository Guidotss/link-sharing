import { FC } from "react";
import { Links } from "@/interfaces";
import { LinkPreviewCard } from "./LinkPreviewCard";

interface LinksPreviewGridProps {
  links: Links[];
}

export const LinksPreviewGrid: FC<LinksPreviewGridProps> = ({ links }) => {

  return (
    <div className="flex flex-col">
      {links?.map((link: Links) => (
        <LinkPreviewCard key={link?.id} link={link}/>
      ))}
    </div>
  );
};
