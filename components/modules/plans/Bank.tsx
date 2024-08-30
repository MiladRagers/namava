import React from "react";

function Bank({ icon, name, onSelect, selected }: any) {
  return (
    <div
      className={`bg-black cursor-pointer text-white flex items-center ${
        name === selected ? "border border-white" : ""
      } gap-x-4 rounded-md py-3 px-4`}
      onClick={() => onSelect(name)}
    >
      <img
        className="w-[32px] object-cover h-[32px]"
        src={`/images/banks/${icon}`}
      />
      <span className="text-sm">{name}</span>
    </div>
  );
}

export default Bank;
