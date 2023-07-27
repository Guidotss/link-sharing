"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context";
import { InputForm } from "./InputForm";
import { MailIcon, PassWordIcon } from "../ui";

export const LoginForm = () => {
  const { login } = useContext(AuthContext);
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
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    const ok = await login(form.email.value, form.password.value);
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
      className="flex flex-col bg-white rounded-xl h-1/2 md:w-[500px] w-[460px] md:p-16 p-6 px-14 text-dark_gre "
      onSubmit={handleSubmit}
    >
      <h3 className="text-4xl font-bold">Login</h3>
      <span className="mt-2 text text-dark_grey opacity-80 text-md">
        Add your details below to get back into the app
      </span>
      <div className="mt-10 text-sm flex flex-col gap-2 items-center w-full">
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
            value={form.email.value}
            error={form.email.error}
            errorMessage={"Can't be empty"}
            setLoginForm={setForm}
          />
          {form.email.error && (
            <span className="text-red text-sm absolute ml-64">
              Cant be empty
            </span>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <span className={`${form.password.error ? "text-red" : ""}`}>
            Password
          </span>
          <div className="absolute ml-2">
            <PassWordIcon />
          </div>

          <InputForm
            placeholder="Enter your password"
            type="password"
            name="password"
            value={form.password.value}
            errorMessage={"Please check again"}
            error={form.password.error}
            setLoginForm={setForm}
          />
          {form.password.error && (
            <span className="text-red text-sm absolute ml-64">
              Please check again
            </span>
          )}
        </div>
      </div>
      <button
        className="md:w-full w-[350px] py-3 bg-purple mt-10 rounded-lg hover:bg-soft_purple transition-all"
        type="submit"
      >
        <span className="text-white tracking-wider">Login</span>
      </button>
      <div className="flex mt-2 justify-center md:w-full w-[350px]">
        <span className="text-grey">Don’t have an account?</span>
        <Link href="/auth/register" className="text-purple ml-2">
          Create account
        </Link>
      </div>
    </form>
  );
};
