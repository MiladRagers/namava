import React from "react";
import Label from "../auth/Label/Label";
import InputElem from "@/components/modules/auth/Input/Input";

type TInput = {
  title: string;
  register: any;
  errors: any;
  icon: React.ReactNode;
  placeholder: string;
  name: string;
  type: "text" | "number" |"email" |"password";
};
function Input({
  title,
  register,
  errors,
  icon,
  placeholder,
  name,
  type,
}: TInput) {
  return (
    <div className="flex flex-col gap-y-3 text-white relative">
      <Label title={title} className="!text-base md:!text-lg" />
      <div
        className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2 px-2 md:px-4`}
      >
        <input
          className="h-[52px] font-Dana  w-full text-[13px] md:text-sm lg:text-[15px] placeholder:text-gray-200 px-2.5 outline-none bg-transparent"
          name={name}
          {...register(`${name}`)}
          type={type}
          placeholder={placeholder}
        />
        {icon}
      </div>
      {errors[name] && (
        <span className="absolute top-24 text-xs md:text-sm text-red-600">{errors[name].message}</span>
      )}
    </div>
  );
}

export default Input;
