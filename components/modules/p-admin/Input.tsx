import React from "react";
import Label from "../auth/Label/Label";
import { FaImage } from "react-icons/fa6";

type TInput = {
  title: string;
  register: any;
  errors: any;
  icon?: React.ReactNode;
  placeholder?: string;
  name: string;
  multiple?: boolean;
  type: "text" | "number" | "email" | "password" | "file" | "textarea";
};
function Input({
  title,
  register,
  errors,
  icon,
  placeholder,
  name,
  type,
  multiple,
}: TInput) {
  if (type !== "file" && type !== "textarea") {
    return (
      <div className="flex flex-col gap-y-3 text-white relative">
        <Label title={title} className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2 px-3 md:pl-4 md:pr-2`}
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
          <span className="absolute top-24 text-xs md:text-sm text-red-600">
            {errors[name].message}
          </span>
        )}
      </div>
    );
  } else if (type === "file") {
    return (
      <div className="flex flex-col  gap-y-3 text-white relative">
        <Label title={title} className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] h-[52px] px-2.5 rounded-xl flex items-center justify-between gap-x-2`}
        >
          <input
            name={name}
            {...register(`${name}`, {
              required: "لطفا تصویر را آپلود کنید",
            })}
            type="file"
            hidden
            id={`image-uploader-${name}`}
            multiple={multiple ? true : false}
          />
          <label
            className="text-[13px] w-full"
            htmlFor={`image-uploader-${name}`}
          >
            برای آپلود {title} کلیک کنید
          </label>
          {icon ? icon : <FaImage className={`text-2xl`} />}
        </div>
        {errors[name] && (
          <span className="absolute top-24 text-xs md:text-sm text-red-600">
            {errors[name].message}
          </span>
        )}
      </div>
    );
  } else if (type === "textarea") {
    return (
      <div className="flex flex-col gap-y-3 text-white relative">
        <Label title={title} className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center pt-4 justify-between gap-x-2 px-2 md:pl-4 md:pr-2`}
        >
          <textarea
            className="h-[52px] font-Dana  w-full text-[13px] h-[200px] md:text-sm lg:text-[15px] placeholder:text-gray-200 px-2.5 outline-none bg-transparent"
            name={name}
            {...register(`${name}`)}
            placeholder={placeholder}
          />
        </div>
        {errors[name] && (
          <span className="absolute top-24 text-xs md:text-sm text-red-600">
            {errors[name].message}
          </span>
        )}
      </div>
    );
  }
}

export default Input;
