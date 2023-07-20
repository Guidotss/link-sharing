"use client";
import { InputForm } from "@/components/form/InputForm";
import { UploadImageIcon } from "../icons";

export const UpdateProfileSection = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Profile Details</h1>
        <p className="text-grey text-md">
          Add your details to create a personal touch to your profile.
        </p>
      </div>
      <div className="flex justify-between bg-light_grey py-4 items-center w-full">
        <h3 className="text-grey px-10">Profile picture</h3>
        <div className="bg-light_purple px-14 py-20 rounded-xl">
          <div className="flex flex-col justify-center items-center">
            <UploadImageIcon />
            <h3 className="text-purple font-semibold text-lg">
              + Upload Image
            </h3>
          </div>
        </div>
        <span className="text-sm w-[240px]">
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
