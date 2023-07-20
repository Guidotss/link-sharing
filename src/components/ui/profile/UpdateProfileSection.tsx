"use client";
import { InputForm } from "@/components/form/InputForm";
import { UploadImageIcon } from "../icons";
import { useContext, useState } from "react";
import { AuthContext } from "@/context";
import Image from "next/image";

export const UpdateProfileSection = () => {
  const [file, setFile] = useState();
  const { user } = useContext(AuthContext);
  const { updateUserImage } = useContext(AuthContext);

  const handleFileChange = async (e: any) => {
    const file = e.target.files[0];
    setFile(file);
    await updateUserImage(file);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Profile Details</h1>
        <p className="text-grey text-md">
          Add your details to create a personal touch to your profile.
        </p>
      </div>
      <div className="flex justify-between bg-light_grey py-4 items-center w-full cursor-pointer">
        <h3 className="text-grey px-10">Profile picture</h3>
        <div className="flex flex-col justify-center items-center">
          {user?.image ? (
            <Image
              src={user?.image}
              alt="profile"
              width={200}
              height={200}
              className="rounded-lg h-[150px] w-[200px]"
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
        </div>

        <span className="text-sm w-[240px] text-grey">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </span>
      </div>
      <div className="bg-light_grey flex flex-col px-10">
        <div className="flex justify-between items-center">
          <h3>First name*</h3>
          <div className="mt-4">
            <InputForm
              placeholder="First name"
              type="text"
              name="first_name"
              value=""
              error={false}
              errorMessage=""
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3>Last name*</h3>
          <div className="mt-4">
            <InputForm
              placeholder="First name"
              type="text"
              name="first_name"
              value=""
              error={false}
              errorMessage=""
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3>Email</h3>
          <div className="mt-4">
            <InputForm
              placeholder="First name"
              type="text"
              name="first_name"
              value=""
              error={false}
              errorMessage=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
