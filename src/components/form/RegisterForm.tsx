"use client"
import Link from "next/link";
import { useForm } from "react-hook-form";
import { InputForm } from "./InputForm";
import { MailIcon, PassWordIcon } from "../ui";

export type RegisterFormProps = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const RegisterForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<RegisterFormProps>();

  const handleRegister = () => {}

  return (
    <form className="flex flex-col bg-white rounded-xl h-1/2 w-[500px] p-16 text-dark_grey" onSubmit={handleSubmit(handleRegister)}>
      <h3 className="text-4xl font-bold">Create account</h3>
      <span className="mt-2 text text-dark_grey opacity-80 text-md">
        Let’s get you started sharing your links!
      </span>
      <div className="2xl:mt-10 mt-8 text-sm flex flex-col gap-2 items-center w-full">
        <div className="flex flex-col justify-center">
          <span>Email address</span>
          <div className="absolute ml-2">
            <MailIcon />
          </div>
          <InputForm
            placeholder="Enter your email address"
            type="email"
            name="email"
            register={register}
            errorMessage={"Can't be empty"}
            error={errors.email}
          />
          {errors.email && (
            <span className="text-red text-sm absolute ml-64">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col justify-center focus:shadow-lg">
          <span>Create password</span>
          <div className="absolute ml-2">
            <PassWordIcon />
          </div>
          <InputForm
            placeholder="At least 8 characters"
            type="password"
            name="password"
            register={register}
            errorMessage={"Can't be empty"}
            error={errors.password}
          />
          {errors.email && (
            <span className="text-red text-sm absolute ml-64">
              {errors.password?.message}
            </span>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <span>Confirm password</span>
          <div className="absolute ml-2">
            <PassWordIcon />
          </div>
          <InputForm
            placeholder="At least 8 characters"
            type="password"
            name="confirmPassword"
            register={register}
            errorMessage={"Can't be empty"}
            error={errors.confirmPassword}
          />
          {errors.email && (
            <span className="text-red text-sm absolute ml-64">
              {errors.confirmPassword?.message}
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
