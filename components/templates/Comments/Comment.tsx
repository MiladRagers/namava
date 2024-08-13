"use client";

import Chevron from "@/icons/Chevron";
import Dislike from "@/icons/Dislike";
import Information from "@/icons/Information";
import Like from "@/icons/Like";
import { TComment } from "@/src/libs/types";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function Comment({ onShow, comment }: TComment) {
  const path = usePathname();
  const [isSpoiled, setIsSpoiled] = useState(comment.isSpoiled);
  const isKid = path.includes("/kids");

  return (
    <div
      className={`text-xs ${
        isKid ? "text-[#666]" : "text-customGray"
      } pt-10 pb-5`}
    >
      <div className="flex items-center gap-x-4">
        <Image
          src="/images/user.png"
          alt="prof.jpg"
          width={400}
          height={400}
          className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-full"
        />
        <p>
          {comment.user.name} -{" "}
          {new Date(comment.createdAt).toLocaleDateString("fa-IR")}
        </p>
      </div>
      <div className="pr-14 pt-1.5">
        {isSpoiled ? (
          <div
            onClick={() => setIsSpoiled(false)}
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
        ) : (
          <>
            <p
              className={`${
                isKid ? "text-black" : "text-white"
              } text-justify text-xs/[20px]`}
            >
              {comment.content}
            </p>
            <div className="flex items-center gap-x-8 mt-6">
              <div className="flex items-center gap-x-2">
                <Like
                  onClick={() => onShow(true)}
                  fill={isKid ? "gray" : "white"}
                  className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] cursor-pointer"
                />
                <span className="font-Dana text-sm">{comment.liked.length}</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Dislike
                  onClick={() => onShow(true)}
                  fill={isKid ? "gray" : "white"}
                  className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] cursor-pointer"
                />
                <span className="font-Dana text-sm">{comment.disliked.length}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Comment;
