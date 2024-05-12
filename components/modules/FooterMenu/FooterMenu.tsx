import Link from "next/link";
import React from "react";
import More from "@/icons/More";
import Folder from "@/icons/Folder";
import Category from "@/icons/Category";
import Magni from "@/icons/Magni";
import Home from "@/icons/Home";

function FooterMenu() {
  return (
    <div className="block md:hidden sticky bottom-0 h-[60px] left-0 right-0 px-4 py-2 z-30 footer-menu bg-namavaBlack">
      <ul className="flex items-center justify-between  ">
        <li>
          <Link
            href=""
            className="flex items-center flex-col text-lg relative "
          >
            <Home />
            <span className="block text-[10px] mb-2 text-gray-400 absolute -bottom-8">
              خانه
            </span>
          </Link>
        </li>
        <li>
          <Link
            href=""
            className="flex items-center flex-col text-lg relative "
          >
            <Magni />
            <span className="block text-[10px] mb-2 text-gray-400 absolute -bottom-8">
              جستجو
            </span>
          </Link>
        </li>
        <li>
          <Link
            href=""
            className="flex items-center flex-col text-lg relative "
          >
            <Category />
            <span className="block text-[10px] mb-2 text-gray-400 absolute -bottom-8 w-[50px]">
              دسته بندی
            </span>
          </Link>
        </li>
        <li>
          <Link
            href=""
            className="flex items-center flex-col text-lg relative "
          >
            <Folder />
            <span className="block text-[10px] w-[40px] mb-2 text-gray-400 absolute -bottom-8">
              لیست من
            </span>
          </Link>
        </li>
        <li>
          <Link
            href=""
            className="flex items-center flex-col text-lg relative "
          >
            <More />
            <span className="block text-[10px] mb-2 text-gray-400 absolute -bottom-8">
              بیشتر
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default FooterMenu;
