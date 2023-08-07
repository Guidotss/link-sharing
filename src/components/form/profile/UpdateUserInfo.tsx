"use client";
import { useForm } from "@/hooks";
import { InputForm } from "../InputForm";

export const  UpdateUserInfo = () => {
  const {
    form: { firstName, lastName, email },
    handleSubmit,
    setForm,
  } = useForm();

  return (
    <>
      <form
        className="bg-light_grey flex flex-col items-center md:items-stretch px-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h3 className="text-sm sm:text-lg w-[100px]">First name*</h3>
          <div className="sm:mt-4 mt-1">
            <InputForm
              placeholder="First name"
              type="text"
              name="firstName"
              value={firstName.value}
              error={firstName.error}
              errorMessage="Cant be empty"
              setProfileForm={setForm}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h3 className="text-sm sm:text-lg">Last name*</h3>
          <div className="sm:mt-4 mt-1">
            <InputForm
              placeholder="First name"
              type="text"
              name="lastName"
              value={lastName.value}
              error={lastName.error}
              errorMessage="Cant be empty"
              setProfileForm={setForm}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h3 className="text-sm sm:text-lg">Email</h3>
          <div className="sm:mt-4 mt-1">
            <InputForm
              placeholder="First name"
              type="text"
              name="email"
              value={email.value}
              error={false}
              errorMessage=""
              setProfileForm={setForm}
            />
          </div>
        </div>
      </form>
      <div className="w-full flex justify-end border-t-[1px] sm:mt-10">
        <button
          className="sm:mt-10 mt-5 mb-5 px-10 py-2 bg-purple text-white rounded-lg hover:bg-soft_purple transition-colors duration-300"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </>
  );
};
