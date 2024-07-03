"use client";
import Logo from "@/icons/Logo";
import Link from "next/link";
import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { FaPerson } from "react-icons/fa6";
import {
  HiOutlineHomeModern,
  HiOutlineNewspaper,
  HiOutlineSquare2Stack,
  HiUser,
  HiXMark,
} from "react-icons/hi2";
import { GoCommentDiscussion } from "react-icons/go";
import { IoImageOutline, IoTicketOutline } from "react-icons/io5";
import { MdOutlineShoppingCart, MdContentPaste } from "react-icons/md";
import { RiMenuSearchLine } from "react-icons/ri";
import { useAdminPanel } from "@/src/context/AdminPanelProvider";
import Overlay from "../Overlay/Overlay";

function Sidebar() {
  const { isShowMenu, toggleMenu } = useAdminPanel();
  return (
    <>
      <div className="md:w-[260px] bg-namavaBlack">
        <div
          className={`fixed ${
            isShowMenu ? "right-0" : "right-[-260px] "
          } md:right-0 overflow-y-auto z-40 bottom-0 transition-all top-0  border-l bg-namavaBlack border-l-gray-700 w-[260px] gap-2  flex flex-col  md:py-[1.2rem] p-2 md:px-[1rem] text-lg`}
        >
          <div className="px-[13px] flex border-b md:border-0 border-b-gray-600 items-center justify-between md:mx-auto">
            <Logo />
            <HiXMark
              className="block md:hidden text-white text-lg font-bold"
              onClick={() => toggleMenu()}
            />
          </div>
          <div>
            <ul className="text-[#4b5563] space-y-2">
              <li className="group">
                <Link href="/dashboard" className="nav-item">
                  <HiOutlineHomeModern className="text-[#9ca3af] text-2xl group-hover:text-namava icon" />
                  <span>داشبورد</span>
                </Link>
              </li>
              <li className="group">
                <Link href="/product" className="nav-item">
                  <AiOutlineProduct className="text-[#9ca3af] text-2xl group-hover:text-namava icon" />
                  <span>فیلم و سریال ها</span>
                </Link>
              </li>
              <li className="group">
                <Link href="/category" className="nav-item">
                  <HiOutlineSquare2Stack className="text-[#9ca3af] text-2xl group-hover:text-namava icon" />
                  <span>دسته بندی ها</span>
                </Link>
              </li>
              <li className="group">
                <Link href="/category" className="nav-item">
                  <HiUser className="text-[#9ca3af] text-2xl group-hover:text-namava icon" />
                  <span>کاربران</span>
                </Link>
              </li>
              <li className="group">
                <Link href="/slider" className="nav-item">
                  <IoImageOutline className="text-[#9ca3af] text-2xl group-hover:text-namava icon" />
                  <span>اسلایدر ها</span>
                </Link>
              </li>
              <li className="group">
                <Link href="/article" className="nav-item">
                  <HiOutlineNewspaper className="text-[#9ca3af] text-2xl group-hover:text-namava icon" />
                  <span>مقاله ها</span>
                </Link>
              </li>
              <li className="group">
                <Link href="/orders" className="nav-item">
                  <MdOutlineShoppingCart className="text-[#9ca3af] text-2xl group-hover:text-namava icon" />
                  <span>اشتراک ها</span>
                </Link>
              </li>
              <li className="group">
                <Link href="/orders" className="nav-item">
                  <FaPerson className="text-[#9ca3af] text-2xl group-hover:text-namava icon" />
                  <span>بازیگران</span>
                </Link>
              </li>
              <li className="group">
                <Link href="/orders" className="nav-item">
                  <RiMenuSearchLine className="text-[#9ca3af] text-2xl group-hover:text-namava icon" />
                  <span>منو ها</span>
                </Link>
              </li>
              <li className="group">
                <Link href="/orders" className="nav-item">
                  <GoCommentDiscussion className="text-[#9ca3af] text-2xl group-hover:text-namava icon" />
                  <span>کامنت ها</span>
                </Link>
              </li>
              <li className="group">
                <Link href="/orders" className="nav-item">
                  <IoTicketOutline className="text-[#9ca3af] text-2xl group-hover:text-namava icon" />
                  <span>تیکت ها</span>
                </Link>
              </li>
              <li className="group">
                <Link href="/orders" className="nav-item">
                  <MdContentPaste className="text-[#9ca3af] text-2xl group-hover:text-namava icon" />
                  <span>محتوا استاتیک</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Overlay isOpen={isShowMenu} onClose={toggleMenu} />
    </>
  );
}

export default Sidebar;
