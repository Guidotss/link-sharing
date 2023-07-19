import { DevlinksLargeIcon, MailIcon, PassWordIcon } from "@/components";
import { RegisterForm } from "@/components/form";


const RegisterPage = () => {

  return (
    <main className="flex flex-col items-center 2xl:justify-center h-screen">
      <div className="flex 2xl:mb-10">
        <DevlinksLargeIcon />
      </div>
      <RegisterForm />
    </main>
  );
};
export default RegisterPage;