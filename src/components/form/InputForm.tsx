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
}

export const InputForm: FC<InputProps> = ({
  placeholder,
  type,
  value,
  error,
  name,
  setLoginForm,
  setRegisterForm,
}) => {
  return (
    <>
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
        onChange={(e) => {
          {
            setLoginForm
              ? setLoginForm((prev) => ({
                  ...prev,
                  [e.target.name]: {
                    value: e.target.value,
                    error: false,
                  },
                }))
              : setRegisterForm!((prev) => ({
                  ...prev,
                  [e.target.name]: {
                    value: e.target.value,
                    error: false,
                  },
                }));
          }
        }}
      />
    </>
  );
};
