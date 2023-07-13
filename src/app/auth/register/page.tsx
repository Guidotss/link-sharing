import { DevlinksLargeIcon, MailIcon, PassWordIcon } from "@/components";
import { InputForm } from "@/components/form";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <main className="flex flex-col items-center 2xl:justify-center h-screen">
      <div className="flex 2xl:mb-10">
        <DevlinksLargeIcon />
      </div>
      <form className="flex flex-col bg-white rounded-xl h-1/2 w-[500px] p-16 text-dark_grey">
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
            />
          </div>
          <div className="flex flex-col justify-center focus:shadow-lg">
            <span>Create password</span>
            <div className="absolute ml-2">
              <PassWordIcon />
            </div>
            <InputForm
              placeholder="At least 8 characters"
              type="password"
            /> 
          </div>
          <div className="flex flex-col justify-center">
            <span>Confirm password</span>
            <div className="absolute ml-2">
              <PassWordIcon />
            </div>
            <InputForm
              placeholder="At least 8 characters"
              type="password"
            />
          </div>
        </div>
        <button className="w-full py-3 bg-purple 2xl:mt-10 rounded-lg hover:bg-soft_purple transition-all" type="submit">
          <span className="text-white tracking-wider">Create new account</span>
        </button>
        <div className="flex mt-2 justify-center w-full">
          <span className="text-grey">Already have an account?</span>
          <Link href="/auth/login" className="text-purple ml-2">
            Login
          </Link>
        </div>
      </form>
    </main>
  );
};
export default RegisterPage;