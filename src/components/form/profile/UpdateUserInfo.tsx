"use client";
import { useContext, useState, useEffect } from "react";
import { InputForm } from "../InputForm";
import { AuthContext } from "@/context";

export const UpdateUserInfo = () => {
  const { updateUserInfo, user } = useContext(AuthContext);
  const [form, setForm] = useState({
    firstName: {
      value: user?.firstName || "",
      error: false,
    },
    lastName: {
      value: user?.lastName || "",
      error: false,
    },
    email: {
      value: user?.email || "",
      error: false,
    },
  });

  useEffect(() => {
    setForm({
      firstName: {
        value: user?.firstName || "",
        error: false,
      },
      lastName: {
        value: user?.lastName || "",
        error: false,
      },
      email: {
        value: user?.email || "",
        error: false,
      },
    });
  }, [user?.firstName, user?.lastName, user?.email]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!form.firstName.value) {
      setForm({
        ...form,
        firstName: {
          ...form.firstName,
          error: true
        }
      })
      return; 
    }

    if(!form.lastName.value) {
      setForm({
        ...form,
        lastName: {
          ...form.lastName,
          error: true
        }
      })
      return; 
    }

    if(!form.lastName.value && !form.firstName.value) {
      setForm({
        ...form,
        lastName: {
          ...form.lastName,
          error: true
        },
        firstName: {
          ...form.firstName,
          error: true
        }
      })
      return;
    }


    if (form.email.value != user?.email) {
      updateUserInfo(
        form.firstName.value,
        form.lastName.value,
        form.email.value
      );
    }
    updateUserInfo(form.firstName.value, form.lastName.value);
  };

  return (
    <>
      <form
        className="bg-light_grey flex flex-col px-10"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center">
          <h3>First name*</h3>
          <div className="mt-4">
            <InputForm
              placeholder="First name"
              type="text"
              name="firstName"
              value={form.firstName.value}
              error={form.firstName.error}
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
              value={form.lastName.value}
              error={form.lastName.error}
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
              value={form.email.value}
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
