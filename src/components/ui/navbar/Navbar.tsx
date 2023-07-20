"use client"
import Link from "next/link";
import { DevLinksIcon, HeaderLinkIcon, ProfileHeaderIcon } from "../icons";
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathName = usePathname();
  return (
    <header className="flex justify-between items-center bg-white py-4 px-10 rounded-lg mx-20">
      <div className="flex items-center">
        <DevLinksIcon />
        <h3 className="text-2xl font-bold">devlinks</h3>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center bg-light_purple px-7 py-2 rounded-lg">
          <HeaderLinkIcon fill="#633CFF" />
          <Link href="/links">
            <span className="text-md text-purple font-semibold">Links</span>
          </Link>
        </div>
        <div className="flex items-center px-5 py-2 rounded-lg ">
          <ProfileHeaderIcon />
          <Link href="profile">
            <span className="text-md text-grey font-semibold hover:text-purple transition-all">
              Profile Details
            </span>
          </Link>
        </div>
      </div>
      <button className="text-purple font-semibold text-md border-[1px] px-8 py-2 rounded-lg border-purple hover:bg-light_purple transition-all hover:text-purple">
        Preview
      </button>
    </header>
  );
};
