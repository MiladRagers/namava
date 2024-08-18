import React from "react";
import Label from "../auth/Label/Label";
import Select from "react-select";

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
  dateName?: string;
  disable?: boolean;
  multiple?: boolean;
  selected?: any;
  onSelected?: any;
};

function SelectBox({
  title,
  register,
  errors,
  name,
  options,
  dateName,
  disable,
  multiple,
  selected,
  onSelected,
}: TSelectBox) {
  if (!multiple && !selected) {
    return (
      <div className="flex w-full flex-col gap-y-3 text-white relative">
        <Label title={title} className="!text-base md:!text-lg min-h-[28px]" />
        <div
          className={`bg-[#121212]  h-[52px] px-2.5 rounded-xl flex items-center justify-between gap-x-2`}
        >
          <select
            disabled={disable}
            className="bg-[#121212] outline-none w-full text-sm md:text-base"
            {...register(`${name}`)}
            name={name}
          >
            {dateName ? (
              <option value="">{dateName}</option>
            ) : (
              <option value="">گزینه مورد نظر را انتخاب کنید</option>
            )}
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
  } else {
    const handleSelectChange = (e: any) => {
      onSelected(e);
    };
    return (
      <div className="flex w-full flex-col gap-y-3  relative">
        <Label
          title={title}
          className="!text-base md:!text-lg min-h-[28px] text-white"
        />
        <div
          className={`bg-[#121212]  h-[52px] px-2.5 rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Select
            defaultValue={selected}
            className="w-full"
            isMulti={multiple}
            options={options}
            onChange={handleSelectChange}
            placeholder="لطفا بازیگر مورد نظر را انتخاب کنید"
          />
        </div>
      </div>
    );
  }
}

export default SelectBox;
