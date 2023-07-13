import { DevlinksLargeIcon, MailIcon, PassWordIcon } from "@/components";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex mb-10">
        <DevlinksLargeIcon />
      </div>
      <form className="flex flex-col bg-white rounded-xl h-1/2 w-[500px] p-16 text-dark_grey">
        <h3 className="text-4xl font-bold">Create account</h3>
        <span className="mt-2 text text-dark_grey opacity-80 text-md">
          Let’s get you started sharing your links!
        </span>
        <div className="mt-10 text-sm flex flex-col gap-2 items-center w-full">
          <div className="flex flex-col justify-center">
            <span>Email address</span>
            <div className="absolute ml-2">
              <MailIcon />
            </div>
            <input
              className="px-7 py-2 rounded-lg w-[380px] border-[1px] mb-5 text-lg focus:shadow-lg focus:shadow-purple focus:outline-purple focus:border-purple  transition-all"
              placeholder="e.g. alex@email.com"
              type="email"
            />
          </div>
          <div className="flex flex-col justify-center focus:shadow-lg">
            <span>Create password</span>
            <div className="absolute ml-2">
              <PassWordIcon />
            </div>
            <input
              className="px-7 py-2 rounded-lg w-[380px] border-[1px] text-lg mb-5 focus:shadow-lg focus:sadow-purple focus:shadow-purple focus:outline-none focus:border-purple  transition-all"
              placeholder="At least 8 characters"
              type="password"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span>Confirm password</span>
            <div className="absolute mt-5 ml-2">
              <PassWordIcon />
            </div>
            <input
              className="px-7 py-2 rounded-lg w-[380px] border-[1px] text-lg"
              placeholder="At least 8 characters"
              type="password"
            />
          </div>
        </div>
        <button className="w-full py-3 bg-purple mt-10 rounded-lg hover:bg-soft_purple transition-all" type="submit">
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