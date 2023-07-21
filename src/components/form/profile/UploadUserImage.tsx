"use client";
import { useContext, useState } from "react";

import { AuthContext } from "@/context";
import { UploadImageIcon } from "@/components/ui";
import { UserImage } from "./UserImage";

export const UploadUserImage = () => {
  const { user, updateUserImage } = useContext(AuthContext);
  const [file, setFile] = useState<File>();

  const handleFileChange = async (e: any) => {
    const file = e.target.files[0];
    setFile(file);
    await updateUserImage(file);
  };

  return (
    <>
      {user?.image ? (
        <UserImage
          image={user?.image}
          handleFileChange={handleFileChange}
        />
      ) : (
        <>
          <div className="bg-light_purple px-14 py-20 rounded-xl">
            <label htmlFor="raised-button-file" className="cursor-pointer">
              <UploadImageIcon />
            </label>
            <input
              type="file"
              name="file"
              id="raised-button-file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <label
              htmlFor="raised-button-file"
              className="text-purple font-semibold text-lg cursor-pointer"
            >
              + Upload Image
            </label>
          </div>
        </>
      )}
    </>
  );
};
