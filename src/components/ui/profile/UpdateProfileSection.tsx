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
      <div className="flex flex-col sm:flex-row sm:justify-between bg-light_grey sm:py-4 items-center w-full cursor-pointer">
        <div className="sm:hidden">
          <h3 className="text-grey 2xl:px-10">Profile picture</h3>
          <div className="flex flex-col justify-center items-center">
            <UploadUserImage />
          </div>
        </div>

        <h3 className="text-grey 2xl:px-10 hidden sm:block">Profile picture</h3>
        <div className="flex-col justify-center items-center hidden sm:block">
          <UploadUserImage />
        </div>
        <span className="text-sm 2xl:w-[240px] sm:w-[150px] text-grey mt-5 sm:mt-0">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </span>
      </div>
      <UpdateUserInfo />
    </div>
  );
};
