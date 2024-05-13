import React from "react";

function Desc({ title }: { title: string }) {
  return <div className="text-[#ccc] text-xs md:text-sm my-6">{title}</div>;
}

export default Desc;
