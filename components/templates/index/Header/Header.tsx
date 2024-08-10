"use client";
import Image from "next/image";
import React from "react";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import HeaderDetail from "./HeaderDetail";
import { usePathname } from "next/navigation";

type Header = {
  isImage?: boolean;
  isTitle?: boolean;
  isKid?: boolean;
  img?: string;
  mobileImage?: string;
  className?: string;
  info?: any;
};
function Header({
  isImage,
  isTitle,
  isKid,
  img,
  mobileImage,
  className,
  info,
}: Header) {
  const pathname = usePathname();
  const isAboutPage = pathname.includes("/about");

  return (
    <>
      <header
        className={`${className} header-video  ${
          isKid || (isAboutPage && !className)
            ? "min-h-screen md:min-h-screen"
            : "min-h-[67vh] md:min-h-[95vh]"
        }`}
      >
        {isImage ? (
          <>
            <Image
              className={`w-full title-image hidden lg:block ${
                isKid ? "mt-20 min-h-screen" : ""
              }`}
              src={`${img}`}
              alt="havieee.jpg"
              width={1920}
              height={1080}
            />
            <Image
              className="w-full title-image block lg:hidden"
              src={`${info.mobileBanner}`}
              alt="havieee.jpg"
              width={1920}
              height={1080}
            />
          </>
        ) : (
          <video className="video-player " autoPlay muted loop>
            <source src="/images/okazion.mp4" />
          </video>
        )}
        {!isAboutPage && <HeaderDetail isKid={isKid} info={info} />}
        {!isTitle && (
          <div className="absolute left-10 bottom-14 hidden md:flex items-center gap-x-3 z-20">
            <button className="flex-center py-3 px-3  bg-gray-500/35  rounded-full text-[13px]">
              <FaChevronRight className="text-[16px] text-gray-400" />
            </button>
            <button className="flex-center py-3 px-3  bg-gray-500/35  rounded-full text-[13px]">
              <FaChevronLeft className="text-[16px] text-gray-400" />
            </button>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
