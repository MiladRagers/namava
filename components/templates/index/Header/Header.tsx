"use client";
import Image from "next/image";
import React from "react";
import IMBD from "../../../../icons/IMBD";
import { GrCircleInformation } from "react-icons/gr";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";

type Header = {
  isImage?: boolean;
  isTitle?: boolean;
};
function Header({ isImage, isTitle }: Header) {
  return (
    <>
      <header className="header-video min-h-[67vh] md:min-h-[93vh]">
        {isImage ? (
          <>
            <Image
              className="w-full title-image hidden lg:block"
              src="/images/havieee.jpg"
              alt="havieee.jpg"
              width={1920}
              height={1080}
            />
            <Image
              className="w-full title-image block lg:hidden"
              src="/images/okamobile.jpg"
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
        <div className="px-[43px] top-52 md:top-28  absolute z-20">
          <Image
            src={"/images/ocazionTitle.png"}
            width={450}
            height={450}
            alt="oka"
            className="w-[125px] md:w-[300px]  mx-auto md:mx-0 "
          />
          <div className="py-6">
            <span className="block text-white text-center md:text-right text-base md:text-[22px]">
              اکازیون
            </span>
            <div className="hidden md:flex items-center gap-x-5 font-Dana text-white text-sm mt-5">
              <span className="bg-orange-400 text-sm rounded-full px-1.5">
                15+
              </span>
              <span>2024</span>
              <span>111 دقیقه</span>
              <div className="flex items-center gap-x-1">
                <IMBD />
                <span className="mt-0.5"> 7.3</span>
              </div>
            </div>
            <p className="hidden md:block max-w-[544px] text-white text-sm leading-6 mt-5">
              قصه اکازیون که در دهه ۷۰ می گذرد، داستان رحیم است که قصد دارد برای
              ادامه تحصیل به کانادا برود اما متوجه می شود ممنوع الخروج شده و این
              اتفاق زیر سر دایی محسن است، پس باید دنبال راه چاره ای باشد…
            </p>
            <p className="my-3 text-white text-xs/6 md:text-sm text-center md:text-right">
              سریال اکازیون، چهارشنبه ها ساعت ۸ صبح به صورت اختصاصی در نماوا
            </p>
            <div className="flex items-center justify-center md:justify-start gap-x-4 mt-4">
              <button className="bg-white hover:bg-namava hover:text-white flex items-center gap-x-2 justify-between text-xs py-3 px-5 rounded-xl">
                <FaPlay />
                خرید اشتراک
              </button>
              <button className=" py-3 px-5 bg-gray-500/35 hover:bg-white/40 text-white rounded-xl text-[13px]">
                پیش نمایش
              </button>
              {/* <button className="flex-center py-3 px-3  bg-gray-500/35  rounded-full text-[13px]">
              <Plus />
            </button>
            <button className="flex-center py-3 px-3  bg-gray-500/35  rounded-full text-[13px]">
              <Like />
            </button>
            <button className="flex-center py-3 px-3  bg-gray-500/35  rounded-full text-[13px]">
              <Dislike />
            </button> */}
              <button className="hidden md:flex items-center  text-sm gap-x-2 text-white hover:text-namava">
                <GrCircleInformation className="text-3xl" />
                اطلاعات بیشتر
              </button>
            </div>
            <p className="text-xs hidden md:block text-gray-50 mt-5">
              ستارگان:هادی کاظمی ، ایمان صفا ، غلامرضا نیکخواه
            </p>
          </div>
        </div>
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
