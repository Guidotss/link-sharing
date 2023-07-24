import { FC } from "react";

interface InputProps {
  placeholder: string;
  name: string;
  type: string;
  value: string;

  errorMessage: string;
  error: boolean;

  setLoginForm?: React.Dispatch<
    React.SetStateAction<{
      email: {
        value: string;
        error: boolean;
      };
      password: {
        value: string;
        error: boolean;
      };
    }>
  >;

  setRegisterForm?: React.Dispatch<
    React.SetStateAction<{
      email: {
        value: string;
        error: boolean;
      };
      password: {
        value: string;
        error: boolean;
      };
      confirmPassword: {
        value: string;
        error: boolean;
      };
    }>
  >;

  setProfileForm?: React.Dispatch<
    React.SetStateAction<{
      firstName: {
        value: string;
        error: boolean;
      };
      lastName: {
        value: string;
        error: boolean;
      };
      email: {
        value: string;
        error: boolean;
      };
    }>
  >;
}

export const InputForm: FC<InputProps> = ({
  placeholder,
  type,
  value,
  error,
  name,
  setLoginForm,
  setRegisterForm,
  setProfileForm,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm &&
      setLoginForm((prev) => ({
        ...prev,
        [name]: {
          value: e.target.value,
          error: false,
        },
      }));

    setRegisterForm &&
      setRegisterForm((prev) => ({
        ...prev,
        [name]: {
          value: e.target.value,
          error: false,
        },
      }));

    setProfileForm &&
      setProfileForm((prev) => ({
        ...prev,
        [name]: {
          value: e.target.value,
          error: false,
        },
      }));
  };

  return (
    <input
      className={`px-7 py-2 rounded-lg w-[380px] border-[1px] text-lg mb-5 focus:shadow-lg ${
        !error
          ? "focus:sadow-purple focus:shadow-purple focus:outline-none focus:border-purple  transition-all"
          : "border-red focus:border-red focus:outline-none transition-all shadow-none"
      }`}
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      autoComplete={type === "password" ? "new-password" : "on"}
      onChange={handleChange}
    />
  );
};
