"use client"
import { sidebarLinks } from "@/public/db";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FiLogOut } from "react-icons/fi";

function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="hidden lg:block w-[480px] h-[565px] bg-namavaBlack text-white shadow  rounded-md p-4 sticky top-0">
      <div className="flex items-center gap-x-4 border-b-2 border-b-gray-500 pb-2">
        <div className="w-[55px] h-[55px] flex-center rounded-full">
          <img
            src={`/images/user.png`}
            alt="user.png"
            className="w-[50px] h-[50px] rounded-full"
          />
        </div>
        <div className="flex  flex-col gap-y-1 font-DanaDemiBold">
          <span className="text-namava">حساب کاربری من</span>
          <span className="">میلاد سلامیان</span>
        </div>
      </div>
      <ul className="space-y-3 py-3 border-b-2 border-b-gray-500">
        {sidebarLinks.map((sidebar) => (
          <li key={sidebar.id} className="group hover:bg-zinc-700 rounded-md">
            <Link
              href={sidebar.link}
              className={`user-link font-DanaMedium p-2 rounded-md flex items-center gap-x-3 ${
                sidebar.link === pathname ? "active-menu" : ""
              }`}
            >
              {sidebar.icon}
              {sidebar.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-2 cursor-pointer">
        <span className="flex  gap-x-4 font-DanaMedium p-2 rounded-md">
          <FiLogOut className="text-[22px]" />
          خروج
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
