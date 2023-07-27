"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context";
import { InputForm } from "./InputForm";
import { MailIcon, PassWordIcon } from "../ui";

export const RegisterForm = () => {
  const { register } = useContext(AuthContext);
  const router = useRouter();
  const [form, setForm] = useState({
    email: {
      value: "",
      error: false,
    },
    password: {
      value: "",
      error: false,
    },
    confirmPassword: {
      value: "",
      error: false,
    },
  });

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.email.value) {
      setForm((prev) => ({
        ...prev,
        email: { value: prev.email.value, error: true },
      }));
    }
    if (!form.password.value) {
      setForm((prev) => ({
        ...prev,
        password: { value: prev.password.value, error: true },
      }));
    }
    if (!form.confirmPassword.value) {
      setForm((prev) => ({
        ...prev,
        confirmPassword: { value: prev.confirmPassword.value, error: true },
      }));
    }

    if (form.password.value !== form.confirmPassword.value) {
      setForm((prev) => ({
        ...prev,
        confirmPassword: { value: prev.confirmPassword.value, error: true },
      }));
    }

    const ok = await register(form.email.value, form.password.value);
    if (!ok) {
      setForm((prev) => ({
        ...prev,
        password: { value: prev.password.value, error: true },
      }));
      return;
    }
    router.push("/");
  };

  return (
    <form
      className="flex flex-col bg-white rounded-xl h-1/2 md:w-[500px] md:p-16 text-dark_grey"
      onSubmit={handleRegister}
    >
      <h3 className="text-4xl font-bold">Create account</h3>
      <span className="mt-2 text text-dark_grey opacity-80 text-md">
        Let’s get you started sharing your links!
      </span>
      <div className="2xl:mt-10 mt-8 text-sm flex flex-col gap-2 items-center w-full">
        <div className="flex flex-col justify-center">
          <span className={`${form.email.error ? "text-red" : ""}`}>
            Email address
          </span>
          <div className="absolute ml-2">
            <MailIcon />
          </div>
          <InputForm
            placeholder="Enter your email address"
            type="email"
            name="email"
            errorMessage={"Can't be empty"}
            value={form.email.value}
            error={form.email.error}
            setRegisterForm={setForm}
          />
          {form.email.error && (
            <span className="text-red text-sm absolute ml-64">
              Cant be empty
            </span>
          )}
        </div>
        <div className="flex flex-col justify-center focus:shadow-lg">
          <span className={`${form.password.error ? "text-red" : ""}`}>
            Create password
          </span>
          <div className="absolute ml-2">
            <PassWordIcon />
          </div>
          <InputForm
            placeholder="At least 8 characters"
            type="password"
            name="password"
            value={form.password.value}
            error={form.password.error}
            setRegisterForm={setForm}
            errorMessage={"Can't be empty"}
          />
          {form.password.error && (
            <span className="text-red text-sm absolute ml-64">
              Cant be empty
            </span>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <span className={`${form.confirmPassword.error ? "text-red" : ""}`}>
            Confirm password
          </span>
          <div className="absolute ml-2">
            <PassWordIcon />
          </div>
          <InputForm
            placeholder="At least 8 characters"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword.value}
            errorMessage={"Can't be empty"}
            error={form.confirmPassword.error}
            setRegisterForm={setForm}
          />
          {form.confirmPassword.error && (
            <span className="text-red text-sm absolute ml-64">
              Cant be empty
            </span>
          )}
        </div>
      </div>
      <button
        className="w-full py-3 bg-purple 2xl:mt-10 rounded-lg hover:bg-soft_purple transition-all"
        type="submit"
      >
        <span className="text-white tracking-wider">Create new account</span>
      </button>
      <div className="flex mt-2 justify-center w-full">
        <span className="text-grey">Already have an account?</span>
        <Link href="/auth/login" className="text-purple ml-2">
          Login
        </Link>
      </div>
    </form>
  );
};
