import Button from "@/components/modules/auth/Button/Button";
import Logo from "@/icons/Logo";
import Image from "next/image";
import React from "react";
import { FaPencil } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";

function EditProfile() {
  return (
    <div className="text-white">
      <div className="flex items-center justify-center">
        <Logo className="!w-[50px] md:!w-[80px] !h-[50px] md:!h-[80px]" />
      </div>
      <div className="flex items-center justify-center flex-col mt-10 md:mt-24">
        <h1 className="text-xl md:text-3xl">
          کدام پروفایل را میخواهید ویرایش کنید؟
        </h1>
        <div className="flex items-center justify-center  flex-wrap gap-y-8 gap-x-10 mt-10 md:mt-20 child:md:cursor-pointer">
          <div>
            <div className="relative flex-center">
              <Image
                src="/images/user.png"
                width={150}
                height={150}
                alt="user.png"
                className="rounded-full w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
              />
              <div className="absolute  bg-black/50 inset-0 rounded-full flex-center">
                <FaPencil className="text-3xl" />
              </div>
            </div>
            <h2 className="text-center mt-3">بزرگسال</h2>
          </div>
          <div>
            <div className="relative flex-center">
              <Image
                src="/images/kidProfile.png"
                width={150}
                height={150}
                alt="user.png"
                className="rounded-full w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
              />
              <div className="absolute  bg-black/50 inset-0 rounded-full flex-center">
                <FaPencil className="text-3xl" />
              </div>
            </div>
            <h2 className="text-center mt-3">کودک</h2>
          </div>
          <div>
            <div className="relative flex-center">
              <Image
                src="/images/customProfile.jpg"
                width={150}
                height={150}
                alt="user.png"
                className="rounded-full w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
              />
              <div className="absolute  bg-black/50 inset-0 rounded-full flex-center">
                <FaPencil className="text-3xl" />
              </div>
              <div className="absolute -right-1 bottom-0 w-10 h-10 bg-namavaBlack rounded-full flex-center">
                <IoIosLock className="text-xl" />
              </div>
            </div>
            <h2 className="text-center mt-3">میلاد</h2>
          </div>
        </div>
        <Button className="max-w-[200px] !bg-gray-500/40 mt-20 flex items-center justify-center gap-x-2 bg-gray-500/40">
          <span className="text-xs">بازگشت</span>
        </Button>
      </div>
    </div>
  );
}

export default EditProfile;
