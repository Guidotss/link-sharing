"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { UploadImageIcon } from "@/components/ui";
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
        className="rounded-lg 2xl:h-[150px] 2xl:w-[150px] sm:h-[130px] sm:w-[130px] cursor-pointer"
        priority
      />
      {isHover && (
        <>
          <div className=" animate__animated animate__fadeIn animate__faster absolute 2xl:w-[150px] 2xl:h-[150px] sm:w-[130px] sm:h-[130px] rounded-lg bg-dark_grey flex flex-col items-center justify-center 2xl:-mt-[150px] sm:-mt-[130px] bg-opacity-50">
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
