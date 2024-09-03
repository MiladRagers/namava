"use client";

import ActiveLike from "@/icons/ActiveLike";
import Chevron from "@/icons/Chevron";
import Dislike from "@/icons/Dislike";
import Information from "@/icons/Information";
import Like from "@/icons/Like";
import { likeComment } from "@/src/libs/actions/comment";
import { TComment } from "@/src/libs/types";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function Comment({ onShow, comment, user }: TComment) {
  console.log(comment);

  const [isSpoiled, setIsSpoiled] = useState(comment.isSpoiled);
  const [liked, setLiked] = useState(comment.liked.includes(user));
  const [disliked, setDisliked] = useState(comment.disliked.includes(user));
  const path = usePathname();
  const isKid = path.includes("/kids");

  const handleLike = async (commentId: string) => {
    if (!user) {
      return onShow(true);
    }
    await likeComment(commentId, user);
    setLiked(!liked);
    if (disliked) setDisliked(false);
  };

  const handleDislike = async (commentId: string) => {
    if (!user) {
      return onShow(true);
    }
  };

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
                {liked ? (
                  <ActiveLike onClick={() => handleLike(comment._id)} />
                ) : (
                  <Like
                    onClick={() => handleLike(comment._id)}
                    fill={isKid ? "gray" : "white"}
                    className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] cursor-pointer"
                  />
                )}
                <span className="font-Dana text-sm">
                  {comment.liked.length}
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <Dislike
                  onClick={() => handleDislike(comment._id)}
                  fill={isKid ? "gray" : "white"}
                  className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] cursor-pointer"
                />
                <span className="font-Dana text-sm">
                  {comment.disliked.length}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Comment;
