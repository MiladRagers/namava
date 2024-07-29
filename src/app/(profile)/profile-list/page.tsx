import Button from "@/components/modules/auth/Button/Button";
import Logo from "@/icons/Logo";
import Plus from "@/icons/Plus";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

function ProfileList() {
  return (
    <div className="text-white">
      <div className="flex items-center justify-center relative">
        <Logo className="!w-[50px] md:!w-[80px] !h-[50px] md:!h-[80px]" />
        <div className="absolute left-5 text-sm  md:left-10 flex items-center gap-x-2">
          <FaInfoCircle />
          <span>بیشتر بدانید</span>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col mt-10 md:mt-24">
        <h1 className="text-xl md:text-3xl">چه کسی تماشا می‌کند؟</h1>
        <div className="flex-center  flex-wrap gap-y-8 gap-x-10 mt-10 md:mt-20 child:md:cursor-pointer">
          <Link href={"/profile-list-edit/1"}>
            <Image
              src="/images/user.png"
              width={150}
              height={150}
              alt="user.png"
              className="rounded-full w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
            />
            <h2 className="text-center mt-3">بزرگسال</h2>
          </Link>
          <div>
            <Image
              src="/images/kidProfile.png"
              width={150}
              height={150}
              alt="user.png"
              className="rounded-full w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
            />
            <h2 className="text-center mt-3">کودک</h2>
          </div>
          <div>
            <Image
              src="/images/customProfile.jpg"
              width={150}
              height={150}
              alt="user.png"
              className="rounded-full w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
            />
            <h2 className="text-center mt-3">میلاد</h2>
          </div>
          <Link href={"/add-profile"}>
            <div className="flex items-center justify-center bg-gray-500/40 rounded-full w-[100px] h-[100px] md:w-[150px] md:h-[150px]">
              <Plus className="w-[35px] md:w-[60px] h-[35px] md:h-[60px]" />
            </div>
            <h2 className="text-center mt-3">افزودن پروفایل</h2>
          </Link>
        </div>
        <Button className="!w-[200px] mt-20 flex items-center justify-center gap-x-2 bg-gray-500/40">
          <IoMdSettings className="text-xl" />
          <span className="text-xs">تنظیمات پروفایل</span>
        </Button>
      </div>
    </div>
  );
}

export default ProfileList;
