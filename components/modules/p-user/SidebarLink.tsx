"use client";
import { sidebarLinks } from "@/public/db";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function SidebarLink() {
  const pathname = usePathname();
  return (
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
  );
}

export default SidebarLink;
