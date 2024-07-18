import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa6";

function Session() {
  return (
    <>
      <div className="md:cursor-pointer hidden md:block">
        <div className="relative group">
          <Image
            src="/images/session1.jpg"
            alt="session1"
            width={1920}
            height={1080}
            className="w-full rounded-md"
          />
          <div className="absolute z-20 bottom-4 px-4 right-0 left-0 flex items-center justify-between">
            <span className="bg-zinc-900 text-white text-sm px-2 py-1 rounded-md font-Dana">
              20 دقیقه
            </span>
            <FaPlay className="text-[#aaa] text-xl show-hover" />
          </div>

          <div className="bg-black/50 absolute inset-0 show-hover"></div>
        </div>
        <div className="mt-2 space-y-3">
          <h3 className="text-white">بن تن: بیگانه تمام عیار - فصل ۴ قسمت ۱</h3>
          <p className="text-xs/[25px] text-[#aaaaaa]">
            اولد جرج که یک شوالیه بزرگ است، در موقعیت قبلی خود قرار می گیرد و به
            شوالیه ها دستور می دهد تا همه بیگانگان را از بین ببرند و...
          </p>
        </div>
      </div>
      <div className="md:hidden flex items-center h-[108px] rounded-md overflow-hidden">
        <div className="w-full h-full bg-[#222327] py-4 pr-4 space-y-3">
          <h3 className="text-[13px] text-white font-Dana">بن ۱۰ - فصل ۴ قسمت ۱</h3>
          <h5 className="font-Dana text-[#aaa] text-[13px]">22 دقیقه</h5>
        </div>
        <div className="w-full h-full  py-4 pl-4 relative">
          <Image
            src="/images/session1.jpg"
            alt="session1"
            fill
            className="object-cover rounded-md"
          />
          <div className="absolute w-[68px] right-0 top-0 bottom-0 session-overlay"></div>
        </div>
      </div>
    </>
  );
}

export default Session;
