"use client";
import LoginModal from "@/components/modules/modals/LoginModal";
import Chevron from "@/icons/Chevron";
import Dislike from "@/icons/Dislike";
import Information from "@/icons/Information";
import Like from "@/icons/Like";
import { TComment } from "@/libs/types";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

function Comment({ onShow }: TComment) {
  const path = usePathname();
  const isKid = path.includes("/kids");
  return (
    <div
      className={`text-xs ${
        isKid ? "text-[#666]" : "text-customGray"
      } pt-10 pb-5`}
    >
      <div className="flex items-center gap-x-4">
        <Image
          src="/images/prof.jpg"
          alt="prof.jpg"
          width={400}
          height={400}
          className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-full"
        />
        <p>میلاد سلامیان - یک‌شنبه ۳۰ اردیبهشت ۱۴۰۳</p>
      </div>
      <div className="pr-14 pt-1.5">
        <p
          className={`${
            isKid ? "text-black" : "text-white"
          } text-justify text-xs/[20px]`}
        >
          با سلام ، بسیار فیلم جالب و سرگرم کننده ای بود ، عوامل فوق العاده ای
          در ساخت این فیلم تلاش کردند ، تشکر ❤️
        </p>
        <div className="flex items-center gap-x-8 mt-6">
          <div className="flex items-center gap-x-2">
            <Like
              onClick={() => onShow(true)}
              fill={isKid ? "gray" : "white"}
              className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] cursor-pointer"
            />
            <span className="font-Dana text-sm">2</span>
          </div>
          <div className="flex items-center gap-x-2">
            <Dislike
              onClick={() => onShow(true)}
              fill={isKid ? "gray" : "white"}
              className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] cursor-pointer"
            />
            <span className="font-Dana text-sm">2</span>
          </div>
        </div>
        <div
          className={`!max-w-[500px] py-3 px-4 rounded-xl ${
            isKid ? "bg-[#666666]" : "bg-[#37383e] "
          } flex items-center justify-between mt-5 md:cursor-pointer`}
        >
          <div className="flex items-center gap-x-3">
            <Information />
            <p className="text-white text-xs">
              این نظر حاوی اسپویلر است و داستان فیلم را لو می‌دهد.
            </p>
          </div>
          <Chevron />
        </div>
      </div>
    </div>
  );
}

export default Comment;
