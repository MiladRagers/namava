"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../icons/Logo";
import Search from "../../../icons/Search";
import Link from "next/link";
import Image from "next/image";
import { HiMiniBars3 } from "react-icons/hi2";
import Overlay from "../Overlay/Overlay";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import { IoHome, IoHomeOutline } from "react-icons/io5";
import { FiFilm, FiYoutube } from "react-icons/fi";
import { LuBaby, LuPopcorn } from "react-icons/lu";
import { PiFilmReel } from "react-icons/pi";
import { GiFilmStrip } from "react-icons/gi";
import { TbLogin2 } from "react-icons/tb";
import { CiShoppingBasket } from "react-icons/ci";

function Navbar() {
  let navBar = useRef<any>();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    let lastScroll = 0;
    const scrollHandler = () => {
      let newScroll = document.documentElement.scrollTop;

      if (newScroll === 0) {
        navBar.current.style.backgroundColor = "transparent";
      } else if (newScroll > lastScroll) {
        navBar.current.style.top = "-80px";
        navBar.current.style.backgroundColor = "#121212";
      } else {
        navBar.current.style.top = "0px";
      }
      lastScroll = newScroll;
    };
    document.addEventListener("scroll", scrollHandler);

    return () => document.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <div
        ref={navBar}
        className={`fixed  z-40  right-0  transition-all duration-500 left-0 py-2 px-[20px] lg:px-[43px] flex items-center justify-between`}
      >
        <div className="flex items-center md:gap-x-5 lg:gap-x-8">
          <div className="flex items-center gap-x-2">
            <HiMiniBars3
              className="text-white text-2xl block md:hidden"
              onClick={() => setIsOpen(true)}
            />
            <Logo />
          </div>
          <ul className="hidden md:flex child:block items-center md:gap-x-5 lg:gap-x-8 text-xs text-white hover:child:text-namava">
            <li>
              <Link href={"/"} className="active">
                خانه
              </Link>
            </li>
            <li>
              <Link href={"/"}>فیلم ها</Link>
            </li>
            <li>
              <Link href={"/"}>سریال ها</Link>
            </li>
            <li>
              <Link href={"/"}>دسته بندی</Link>
            </li>
            <li>
              <Link href={"/"}>دسته بندی</Link>
            </li>
            <li>
              <Link href={"/"}>کودکان</Link>
            </li>
            <li>
              <Link href={"/"}>پردیس نماوا</Link>
            </li>
            <li>
              <Link href={"/"}>نماوا مگ</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-5">
          <Search />
          <Link href={""}>
            <Image
              src={"/images/user.png"}
              alt="user.png"
              width={40}
              height={40}
              className="rounded-full w-[30px] h-[30px] lg:w-10 lg:h-10"
            />
          </Link>
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={`block md:hidden fixed top-0 bottom-0 ${
          isOpen ? "right-0" : "-right-64"
        } w-64 bg-namavaBlack z-50 px-4 py-2 transition-all`}
      >
        <div className="flex items-center justify-between border-b-2 border-b-gray-600">
          <Logo />
          <FaXmark className="text-white" onClick={() => setIsOpen(false)} />
        </div>
        <div>
          <div className="bg-white flex items-center justify-between p-1 mt-5 rounded-sm">
            <input
              type="text"
              placeholder="جستجو کنید"
              className="bg-none outline-none border-none text-[13px] "
            />
            <button className="bg-namavaBlack text-white p-1 rounded-sm">
              <FaMagnifyingGlass />
            </button>
          </div>
        </div>
        <div className="my-5 border-b-2 border-b-gray-600 pb-5">
          <ul className="text-white space-y-6">
            <li>
              <Link href="" className="flex items-center gap-x-3 text-lg">
                <IoHomeOutline />
                <span className="text-sm">خانه</span>
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-x-3 text-lg">
                <FiFilm />
                <span className="text-sm">فیلم ها</span>
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-x-3 text-lg">
                <FiYoutube />
                <span className="text-sm">سریال ها</span>
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-x-3 text-lg">
                <LuPopcorn />
                <span className="text-sm">تازه ها</span>
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-x-3 text-lg">
                <LuBaby />
                <span className="text-sm">کودکان</span>
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-x-3 text-lg">
                <PiFilmReel />
                <span className="text-sm">پردیس</span>
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center gap-x-3 text-lg">
                <GiFilmStrip />
                <span className="text-sm">نماوا مگ</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="text-white space-y-6">
            <li>
              <Link href={""} className="flex items-center gap-x-2 text-2xl">
                <TbLogin2 />
                <span className="text-sm">ورود | ثبت نام</span>
              </Link>
            </li>
            <li>
              <Link href={""} className="flex items-center gap-x-2 text-2xl">
                <CiShoppingBasket />
                <span className="text-sm">خرید اشتراک</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Overlay isOpen={isOpen} onClose={setIsOpen} />
    </>
  );
}

export default Navbar;
