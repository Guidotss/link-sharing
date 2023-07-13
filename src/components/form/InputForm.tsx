import React, { FC } from "react";

interface InputProps {
    placeholder: string;
    type: string;

    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
    value?: string;
}

export const InputForm:FC<InputProps> = ({ placeholder, type, value, onChange }) => {
  return (
    <input
      className="px-7 py-2 rounded-lg w-[380px] border-[1px] text-lg mb-5 focus:shadow-lg focus:sadow-purple focus:shadow-purple focus:outline-none focus:border-purple  transition-all"
      placeholder={placeholder}
      type={type}
      value={value || ""}
      onChange={ onChange }
    />
  );
};
