import React, { ComponentProps } from "react";

type Button = ComponentProps<"button">;

function Button({ children, className ,...rest }: Button) {
  return (
    <button
      className={`text-sm w-full  bg-namava font-IranMedium disabled:bg-namava py-3 rounded-xl !mt-10 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
