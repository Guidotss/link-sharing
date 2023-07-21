"use client";
import { UploadImageIcon } from "@/components/ui";
import Image from "next/image";
import { FC, useState } from "react";
interface UserImageProps {
  image: string;
  handleFileChange: (e:any) => void;
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
        className="rounded-lg h-[150px] w-[200px]"
      />
      {isHover && (
        <>
          <div className="absolute w-[200px] h-[150px] rounded-lg bg-dark_grey flex flex-col items-center justify-center -mt-[150px] bg-opacity-50">
            <input
                type="file"
                name="file"
                id="raised-button-file"
                className="hidden"
                onChange={handleFileChange}
            />
            <label htmlFor="raised-button-file" className="flex flex-col items-center cursor-pointer">
                <UploadImageIcon fill="#fff" />
                <span className="text-white">Change Image</span>
            </label>
          </div>
        </>
      )}
    </div>
  );
};
