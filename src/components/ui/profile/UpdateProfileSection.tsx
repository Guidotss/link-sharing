import { UploadUserImage } from "@/components/form";
import { UpdateUserInfo } from "@/components/form/profile/UpdateUserInfo";

export const UpdateProfileSection = () => {
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
          <UploadUserImage />
        </div>
        <span className="text-sm w-[240px] text-grey">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </span>
      </div>
      <UpdateUserInfo />
    </div>
  );
};
