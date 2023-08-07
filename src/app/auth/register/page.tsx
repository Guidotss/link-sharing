import { DevlinksLargeIcon } from "@/components";
import { RegisterForm } from "@/components/form";

const RegisterPage = () => {
  return (
    <main className="flex flex-col items-center h-screen py-10 md:py-0">
      <div className="flex 2xl:mb-10 md:mb-0 mb-10  mt-5 2xl:mt-20">
        <DevlinksLargeIcon />
      </div>
      <RegisterForm />
    </main>
  );
};
export default RegisterPage;
