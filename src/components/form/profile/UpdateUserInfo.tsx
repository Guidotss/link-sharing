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
        className="bg-light_grey flex flex-col 2xl:px-10"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center">
          <h3>First name*</h3>
          <div className="mt-4">
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
        <div className="flex justify-between items-center">
          <h3>Last name*</h3>
          <div className="mt-4">
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
        <div className="flex justify-between items-center">
          <h3>Email</h3>
          <div className="mt-4">
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
      <div className="w-full flex justify-end border-t-[1px] mt-10">
        <button
          className="mt-10 px-10 py-2 bg-purple text-white rounded-lg hover:bg-soft_purple transition-colors duration-300"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </>
  );
};
