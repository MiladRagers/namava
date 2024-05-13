"use client";
import Button from "@/components/modules/auth/Button/Button";
import Input from "@/components/modules/auth/Input/Input";
import Label from "@/components/modules/auth/Label/Label";
import Desc from "@/components/modules/auth/desc/desc";
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
      <Desc title="لطفا اطلاعات زیر را تکمیل کنید." />
      <div className="space-y-[24px]">
        <div className="flex flex-col gap-y-3">
          <Label title="نام و نام خانوادگی" />
          <div
            className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
          >
            <Input
              type="email"
              placeholder="نام و نام خانوادگی خود وارد کنید"
            />
            <FaRegCircleUser className={`text-xl ml-4`} />
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <Label title="نام کاربری" />
          <div
            className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
          >
            <Input type="email" placeholder="نام کاربری خود را وارد کنید" />
            <FaLaptop className={`text-xl ml-4`} />
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <Label title="رمز عبور" />
          <div className="bg-[#121212] rounded-xl flex items-center justify-between">
            <Input
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
              className={isActivePassword ? "text-left" : "text-right"}
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
        <Button>ادامه</Button>

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
