import React from "react";

type TCheckbox = {
  title: string;
  id: string;
  register: any;
  name: string;
};

function Checkbox({ title, id, register, name }: TCheckbox) {
  return (
    <div className="flex items-center gap-x-3">
      <label htmlFor={id} className="text-white">
        {title}
      </label>
      <input className="accent-indigo-600 w-4 h-4" {...register(`${name}`)} type="checkbox" name={name} id={id} />
    </div>
  );
}

export default Checkbox;
