import Button from "@/components/modules/auth/Button/Button";
import Logo from "@/icons/Logo";
import Image from "next/image";
import React from "react";
import { FaPencil } from "react-icons/fa6";

function AddProfile() {

  return (
    <div className="text-white">
      <div className="flex items-center justify-center flex-col space-y-4">
        <Logo className="!w-[50px] md:!w-[80px] !h-[50px] md:!h-[80px]" />
        <h1 className="text-lg md:text-2xl text-center">افزودن پروفایل</h1>
      </div>
      <div className="max-w-[700px] mx-auto">
        <div className="flex items-center md:items-start gap-x-3 md:gap-x-8 px-4 md:px-10 py-6 md:py-[30px] bg-namavaBlack rounded-xl mt-10">
          <div className="relative flex-center md:group cursor-pointer w-[100px] md:w-[150px] h-[100px] md:h-[150px]">
            <Image
              src="/images/user.svg"
              alt="user.svg"
              width={150}
              height={150}
              className="rounded-full"
            />
            <div className="absolute opacity-0  group-hover:opacity-100 group-hover:visible transition-all invisible bg-black/50 inset-0 rounded-full flex-center">
              <FaPencil className="text-lg" />
            </div>
          </div>
          <div className="grow md:pt-4 space-y-5">
            <input
              type="text"
              placeholder="نام پروفایل"
              className="w-full text-sm md:text-base outline-none bg-gray-500/30 h-[52px] rounded-xl px-4 placeholder:text-white"
            />
            <span className="text-[#6eb8ff] block text-xs md:text-base font-IranMedium">
              انتخاب تصویر
            </span>
            <div className="flex items-center gap-x-2">
              <input id={"kid"} type="checkbox" className="film-checkbox" />
              <label className="text-xs" htmlFor={"kid"}>
                پروفایل کودک
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-10 px-4 md:px-0">
          <Button>ذخیره</Button>
          <Button className="!bg-gray-500/40">لغو</Button>
        </div>
      </div>
    </div>
  );
}

export default AddProfile;
