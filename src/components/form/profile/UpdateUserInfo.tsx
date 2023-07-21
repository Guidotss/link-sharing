"use client"
import { InputForm } from "../InputForm";

export const UpdateUserInfo = () => {
  return (
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
  );
};
