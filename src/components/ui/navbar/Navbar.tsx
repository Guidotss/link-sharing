"use client";
import Link from "next/link";
import { DevLinksIcon, HeaderLinkIcon, ProfileHeaderIcon } from "../icons";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";

export const Navbar = () => {
  const [isHover, setIsHover] = useState(false);
  const pathName = usePathname();
  const userId = Cookies.get("userId");

  return (
    <header className="flex justify-between items-center bg-white py-4 md:px-10 px-4 rounded-lg md:mx-20">
      <div className="flex items-center">
        <DevLinksIcon />
        <h3 className="text-2xl font-bold">devlinks</h3>
      </div>
      <div className="flex items-center gap-5">
        <div
          className={`flex items-center ${
            pathName == "/" && "bg-light_purple"
          } px-7 py-2 rounded-lg`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <HeaderLinkIcon
            fill={isHover || pathName == "/" ? "#633CFF" : undefined}
          />
          <Link href="/">
            <span
              className={`${
                pathName == "/" ? "text-purple" : "text-grey"
              } hover:text-purple text-md font-semibold`}
            >
              Links
            </span>
          </Link>
        </div>
        <div
          className={`flex items-center ${
            pathName == "/profile" && "bg-light_purple"
          } px-5 py-2 rounded-lg`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <ProfileHeaderIcon
            fill={isHover || pathName == "/profile" ? "#633CFF" : undefined}
          />
          <Link href="profile">
            <span
              className={`text-md ${
                pathName == "/profile" ? "text-purple" : "text-grey"
              } font-semibold hover:text-purple transition-all`}
            >
              Profile Details
            </span>
          </Link>
        </div>
      </div>
      <Link href={`/preview/${userId}`} className="text-purple font-semibold text-md border-[1px] px-8 py-2 rounded-lg border-purple hover:bg-light_purple transition-all hover:text-purple">
        Preview
      </Link>
    </header>
  );
};
