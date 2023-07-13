import { DevlinksLargeIcon, MailIcon, PassWordIcon } from "@/components";
import Link from "next/link";

const LoginPage = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex mb-10">
        <DevlinksLargeIcon />
      </div>
      <form className="flex flex-col bg-white rounded-xl h-1/2 w-[500px] p-16 text-dark_grey">
        <h3 className="text-4xl font-bold">Login</h3>
        <span className="mt-2 text text-dark_grey opacity-80 text-md">
          Add your details below to get back into the app
        </span>
        <div className="mt-10 text-sm flex flex-col gap-2 items-center w-full">
          <div className="flex flex-col justify-center">
            <span>Email address</span>
            <div className="absolute ml-2">
              <MailIcon />
            </div>
            <input
              className="px-7 py-2 rounded-lg w-[380px] border-[1px] mb-5 text-lg"
              placeholder="e.g. alex@email.com"
              type="email"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span>Password</span>
            <div className="absolute mt-5 ml-2">
              <PassWordIcon />
            </div>
            <input
              className="px-7 py-2 rounded-lg w-[380px] border-[1px] text-lg"
              placeholder="Enter your password"
              type="password"
            />
          </div>
        </div>
        <button className="w-full py-3 bg-purple mt-10 rounded-lg" type="submit">
          <span className="text-white tracking-wider">Login</span>
        </button>
        <div className="flex mt-2 justify-center w-full">
          <span className="text-grey">Don’t have an account?</span>
          <Link href="/auth/register" className="text-purple ml-2">
            Create account
          </Link>
        </div>
      </form>
    </main>
  );
};
export default LoginPage;
