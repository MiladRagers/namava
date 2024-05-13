import React, { ComponentProps } from "react";

type Input = ComponentProps<"input">;

function Input({ className, ...rest }: Input) {
  return (
    <input
      {...rest}
      className={`h-[52px] font-Dana  w-full text-[13px] md:text-sm placeholder:text-gray-200 px-2.5 outline-none bg-transparent ${className}`}
    />
  );
}

export default Input;
