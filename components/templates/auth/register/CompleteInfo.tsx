"use client";
import OtpIcon from "@/icons/OtpIcon";
import Link from "next/link";
import React, { useState } from "react";
import { FaLaptop, FaRegCircleUser } from "react-icons/fa6";
import { FiEye, FiEyeOff } from "react-icons/fi";

function CompleteInfo() {
  const [isActivePassword, setIsActivePassword] = useState(false);
  const [isShowPass, setIsShowPassord] = useState(true);
  return (
    <>
      <div className="flex items-center gap-x-4 mt-5">
        <OtpIcon />
        <span className="text-white text-sm md:text-base">ثبت نام</span>
      </div>
      <p className="text-[#ccc] text-xs md:text-sm my-6">
        لطفا اطلاعات زیر را تکمیل کنید.
      </p>
      <div className="space-y-[24px]">
        <div className="flex flex-col gap-y-3">
          <label className="text-xs md:text-sm font-IranMedium">
            نام و نام خانوادگی
          </label>
          <div
            className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
          >
            <input
              type="email"
              placeholder="نام و نام خانوادگی خود وارد کنید"
              className={`h-[52px] font-Dana w-full text-[13px] md:text-sm placeholder:text-gray-200 px-2.5 outline-none bg-transparent`}
            />
            <FaRegCircleUser className={`text-xl ml-4`} />
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <label className="text-xs md:text-sm font-IranMedium">
            نام کاربری
          </label>
          <div
            className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
          >
            <input
              type="email"
              placeholder="نام کاربری خود را وارد کنید"
              className={`h-[52px] font-Dana w-full text-[13px] md:text-sm placeholder:text-gray-200 px-2.5 outline-none bg-transparent`}
            />
            <FaLaptop className={`text-xl ml-4`} />
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <label className="text-xs md:text-sm font-IranMedium">رمز عبور</label>
          <div className="bg-[#121212] rounded-xl flex items-center justify-between">
            <input
              type={isShowPass ? "password" : "text"}
              onChange={(e) => {
                if (e.target.value.trim()) {
                  setIsActivePassword(true);
                } else {
                  setIsActivePassword(false);
                }
              }}
              dir={isActivePassword ? "ltr" : "rtl"}
              placeholder="رمز عبور خود را وارد کنید."
              className={`h-[52px] ${
                isActivePassword ? "text-left" : "text-right"
              } appearance-none  font-Dana w-full text-[13px]  md:text-sm placeholder:text-gray-200 px-2.5 outline-none bg-transparent`}
            />
            {isShowPass ? (
              <FiEye
                onClick={() => setIsShowPassord(false)}
                className="text-xl ml-4"
              />
            ) : (
              <FiEyeOff
                onClick={() => setIsShowPassord(true)}
                className="text-xl ml-4 cursor-pointer"
              />
            )}
          </div>
        </div>

        <div className="text-xs md:text-base">
          <p>رمز عبور باید دارای شرایط زیر باشد</p>
          <ul className="list-disc pr-5 pt-4 text-xs md:text-sm space-y-2 text-gray-300">
            <li>رمز باید 8 کاراکتر یا بیشتر باشد</li>
            <li>رمز باید ترکیبی از حروف و اعداد باشد</li>
          </ul>
        </div>
        <button
          className="text-sm w-full  bg-namava font-IranMedium disabled:bg-namava py-3 rounded-xl !mt-10"
          disabled
        >
          ادامه
        </button>

        <p className="text-sm md:text-center">
          با زدن دکمه ادامه{" "}
          <Link href={""} className="text-namava">
            شرایط و قوانین سایت
          </Link>{" "}
          را میپذیرم.
        </p>
      </div>
    </>
  );
}

export default CompleteInfo;
