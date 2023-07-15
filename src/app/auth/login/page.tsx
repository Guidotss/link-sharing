import { DevlinksLargeIcon } from "@/components"; 
import { LoginForm } from "@/components/form";


const LoginPage = () => {
  return (
    <main className="flex flex-col items-center 2xl:justify-center h-screen">
      <div className="flex mb-10 mt-5">
        <DevlinksLargeIcon />
      </div>
      <LoginForm/>
    </main>
  );
};
export default LoginPage;
