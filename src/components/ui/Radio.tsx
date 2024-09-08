import React from "react";
import Label from "../auth/Label/Label";

type TOption = {
  name: string;
  id: string;
  isActive: boolean;
};

type TRadio = {
  title: string;
  options: TOption[];
  register: any;
  errors: any;
  icon: React.ReactNode;
  name: string;
  onType?: any;
};

function Radio({
  title,
  options,
  register,
  errors,
  icon,
  name,
  onType,
}: TRadio) {
  return (
    <div className="flex  flex-col gap-y-3 text-white relative">
      <Label title={title} className="!text-base md:!text-lg" />
      <div
        className={`bg-[#121212] rounded-xl flex items-center p-[14px] pl-2 justify-between gap-x-2`}
      >
        <div className="text-white text-sm flex items-center gap-x-4 pr-2">
          {options.map((option) => (
            <div className="flex items-center gap-x-2" key={option.id}>
              <label htmlFor={option.id}>{option.name}</label>
              <input
                {...register(`${name}`)}
                defaultChecked={option.isActive ? true : false}
                type="radio"
                value={option.id}
                id={option.id}
                onInput={() => onType?.(option.id)}
              />
            </div>
          ))}
        </div>
        {icon}
      </div>

      {errors[name] && (
        <span className="absolute top-24 text-xs md:text-sm text-red-600">
          {errors[name].message}
        </span>
      )}
    </div>
  );
}

export default Radio;
