"use client";
import { UploadImageIcon } from "@/components/ui";
import Image from "next/image";
import { FC, useState, useEffect } from "react";
interface UserImageProps {
  image: string;
  handleFileChange: (e: any) => void;
}

export const UserImage: FC<UserImageProps> = ({ image, handleFileChange }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Image
        src={image}
        alt="profile"
        width={200}
        height={200}
        className="rounded-lg 2xl:h-[150px] 2xl:w-[150px] sm:h-[120px] sm:w-[120px] cursor-pointer"
        priority
      />
      {isHover && (
        <>
          <div className=" animate__animated animate__fadeIn animate__faster absolute 2xl:w-[150px] 2xl:h-[150px] sm:w-[120px] sm:h-[120px] rounded-lg bg-dark_grey flex flex-col items-center justify-center 2xl:-mt-[150px] sm:-mt-[120px] bg-opacity-50">
            <input
              type="file"
              name="file"
              id="raised-button-file"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="raised-button-file"
              className="flex flex-col items-center cursor-pointer"
            >
              <UploadImageIcon fill="#fff" />
              <span className="text-white">Change Image</span>
            </label>
          </div>
        </>
      )}
    </div>
  );
};
