import React from "react";

function Title({ name }: { name: string }) {
  return <div className="text-lg md:text-xl lg:text-3xl font-bold text-gray-300">{name}</div>;
}

export default Title;
