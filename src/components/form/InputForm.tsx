import React, { FC } from "react";
import { UseFormRegister, FieldErrors } from 'react-hook-form/dist/types'
import { LoginFormProps } from "./LoginForm";
import { RegisterFormProps } from "./RegisterForm";


interface InputProps {
  placeholder: string;
  name: "email" | "password" | "confirmPassword";
  type: string;
  value?: string;
  errorMessage: string; 
  error: FieldErrors<LoginFormProps> | FieldErrors<RegisterFormProps> | undefined;
  
  
  register: UseFormRegister<RegisterFormProps> | UseFormRegister<LoginFormProps>
}

export const InputForm: FC<InputProps> = ({
  placeholder,
  type,
  value,
  name, 
  errorMessage, 
  error,
  register,
  
}) => {
  return (
    <>
      <input
        className={`px-7 py-2 rounded-lg w-[380px] border-[1px] text-lg mb-5 focus:shadow-lg ${!error ? 'focus:sadow-purple focus:shadow-purple focus:outline-none focus:border-purple  transition-all' : 'border-red focus:border-red focus:outline-none transition-all shadow-none'}`}
        placeholder={placeholder}
        type={type}
        value={value}
        {
          ...register(name, {
            required: { 
              value: true,
              message: errorMessage
            },
          })
        }
      />
    </>
  );
};
