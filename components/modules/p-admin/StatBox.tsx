import React from "react";
import { HiOutlineBriefcase } from "react-icons/hi2";

type TStat = {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
};

function StatBox({ title, value, icon, color }: TStat) {
  return (
    <div className="bg-namavaBlack flex items-center gap-x-4 border border-gray-800 rounded-lg shadow px-[1.6rem] py-[1rem]">
      <div className={`flex-center w-[4rem] flex-shrink h-[4rem] rounded-full ${color}`}>
        {icon}
      </div>
      <div className="flex flex-col gap-2.5">
        <h2 className="text-lg text-gray-200">{title}</h2>
        <h1 className="font-Dana  text-gray-400">{value.toLocaleString("fa-IR")}</h1>
      </div>
    </div>
  );
}

export default StatBox;
