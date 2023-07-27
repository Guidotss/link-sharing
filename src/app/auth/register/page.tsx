import { DevlinksLargeIcon } from "@/components";
import { RegisterForm } from "@/components/form";

const RegisterPage = () => {
  return (
    <main className="flex flex-col items-center 2xl:justify-center h-screen py-10 md:py-0">
      <div className="flex 2xl:mb-10 mb-10 md:mb-0">
        <DevlinksLargeIcon />
      </div>
      <RegisterForm />
    </main>
  );
};
export default RegisterPage;
