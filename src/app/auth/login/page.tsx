import { DevlinksLargeIcon } from "@/components";
import { LoginForm } from "@/components/form";

const LoginPage = async () => {
  return (
    <main className="flex flex-col items-center mt-4">
      <div className="flex 2xl:mb-10 md:mb-0 mb-10  mt-5">
        <DevlinksLargeIcon />
      </div>
      <LoginForm />
    </main>
  );
};
export default LoginPage;
