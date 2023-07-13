import { DevlinksLargeIcon, MailIcon, PassWordIcon } from "@/components";
import { InputForm } from "@/components/form";
import Link from "next/link";

const LoginPage = () => {
  return (
    <main className="flex flex-col items-center 2xl:justify-center h-screen">
      <div className="flex mb-10 mt-5">
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
            <InputForm
              placeholder="Enter your email address"
              type="email"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span>Password</span>
            <div className="absolute ml-2">
              <PassWordIcon />
            </div>
            <InputForm
              placeholder="Enter your password"
              type="password"
            />
          </div>
        </div>
        <button className="w-full py-3 bg-purple mt-10 rounded-lg hover:bg-soft_purple transition-all" type="submit">
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
