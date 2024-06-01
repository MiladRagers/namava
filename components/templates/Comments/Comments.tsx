import Button from "@/components/modules/auth/Button/Button";
import Message from "@/icons/Message";
import Send from "@/icons/Send";
import Image from "next/image";
import React from "react";
import Comment from "./Comment";

function Comments() {
  return (
    <div className="w-full px-6 py-10 xl:max-w-[1000px] bg-namavaBlack rounded-lg mx-auto">
      <h3 className="text-center text-xl text-white font-IranMedium">
        نظرات کاربران
      </h3>
      <div className="flex flex-col md:flex-row items-center gap-y-4 gap-x-9 rounded-lg mx-auto mt-10 w-full  md:w-[484px] bg-[#37383e] p-4">
        <div className="flex items-center">
          <Message />
          <p className="text-white text-xs">برای ثبت نظر ابتدا وارد شوید.</p>
        </div>
        <div className="flex items-center gap-x-4">
          <Button className="!m-0 bg-white !w-[108px] text-xs">ثبت نام</Button>
          <Button className="!m-0 !w-[108px] text-xs !bg-gray-500/50 hover:bg-white/40 text-white">
            ورود
          </Button>
        </div>
      </div>

      <div className="w-full flex items-center gap-x-3 mt-10">
        <Image
          src="/images/user.png"
          width={400}
          height={400}
          className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-full"
          alt="user.png"
        />
        <input
          placeholder="نظرتان درباره این فیلم چیست ؟"
          className="w-full h-[52px]  outline-none placeholder:text-namavaBlack text-xs md:text-sm px-6 py-3 rounded-xl"
        />
        <Send  />
      </div>
      <div className="text-white pt-5 pr-14">
        <div className="flex items-center gap-x-2">
          <input id="spoil" type="checkbox" className="film-checkbox" />
          <label className="text-xs" htmlFor="spoil">
            این نظر حاوی اسپویلر است و داستان فیلم را لو می‌دهد.
          </label>
        </div>
      </div>

      <div className="divide-y divide-gray-700">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
}

export default Comments;
