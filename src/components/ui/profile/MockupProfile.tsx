"use client";
import { useContext } from "react";
import { AuthContext } from "@/context";
import { MockUpIcon } from "../icons";
import Image from "next/image";

export const MockupProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex items-center">
      <MockUpIcon
        isInProfile
        userImage={!!user?.image}
        firtsName={!!user?.firstName}
        lastName={!!user?.lastName}
        email={!!user?.email}
      />
      <div
        className={`${
          user?.image ? "absolute" : "hidden"
        } 2xl:top-56 2xl:ml-[6rem] mt-6 sm:top-44 sm:ml-[6rem] flex items-center justify-center`}
      >
        <div className="rounded-full">
          <Image
            src={`${
              user?.image ? user?.image : "https://placehold.jp/150x150.png"
            }`}
            alt="profile image"
            width={1024}
            height={1024}
            className="rounded-full w-[110px] h-[110px] border-[4px] border-purple"
            loading="eager"
            priority
          />
        </div>
      </div>
      <div
        className={`${
          user?.firstName && user?.lastName ? "absolute" : "hidden"
        } 2xl:top-[370px] 2xl:ml-[60px] sm:top-[320px] sm:ml-[50px] flex flex-col items-center justify-center`}
      >
        <div className="flex gap-2 text-dark_grey text-2xl">
          <span className="font-bold">{user?.firstName}</span>
          <span className="font-bold">{user?.lastName}</span>
        </div>
        <div>
          <span className="text-grey text-md">{user?.email}</span>
        </div>
      </div>
    </div>
  );
};
