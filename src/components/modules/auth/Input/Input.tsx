import React, { ComponentPropsWithRef } from "react";

type Input = ComponentPropsWithRef<"input">;

function Input({ className, ...rest }: Input) {
  return (
    <input
      className={`h-[52px] font-Dana  w-full text-[13px] md:text-sm lg:text-[15px] placeholder:text-gray-200 px-2.5 outline-none bg-transparent ${className}`}
      {...rest}
    />
  );
}

export default Input;
