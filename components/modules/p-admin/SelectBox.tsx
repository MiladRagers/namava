import React from "react";
import Label from "../auth/Label/Label";

type TOption = {
  id: any;
  value: string;
  label: string;
};

type TSelectBox = {
  title: string;
  register: any;
  errors: any;
  name: string;
  options: TOption[];
};

function SelectBox({ title, register, errors, name, options }: TSelectBox) {
  return (
    <div className="flex flex-col gap-y-3 text-white relative">
      <Label title={title} className="!text-base md:!text-lg" />
      <div
        className={`bg-[#121212]  h-[52px] px-2.5 rounded-xl flex items-center justify-between gap-x-2`}
      >
        <select
          className="bg-[#121212] outline-none w-full text-sm md:text-base"
          {...register(`${name}`)}
          name={name}
        >
          <option value="">گزینه مورد نظر را انتخاب کنید</option>
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {errors[name] && (
        <span className="absolute top-24 text-xs md:text-sm text-red-600">
          {errors[name].message}
        </span>
      )}
    </div>
  );
}

export default SelectBox;
