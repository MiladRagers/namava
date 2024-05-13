"use client";
import Remember from "@/icons/Remember";
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa6";
import { FiEye, FiEyeOff } from "react-icons/fi";

function ChangePassword() {
  const [isActiveMobileNumber, setIsActiveMobileNumber] = useState(false);
  const [isShowPass, setIsShowPassord] = useState(true);
  const [isActivePassword, setIsActivePassword] = useState(false);
  return (
    <>
      <div className="flex items-center gap-x-4 mt-5">
        <Remember/>
        <span className="text-white text-sm md:text-base">
          بازیابی رمز عبور
        </span>
      </div>
      <p className="text-[#ccc] text-xs md:text-sm my-6">
        لطفا اطلاعات زیر را تکمیل کنید
      </p>
      <div className="space-y-[24px]">
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
        <button
          className="text-sm w-full  bg-namava font-IranMedium disabled:bg-namava py-3 rounded-xl !mt-10"
          disabled
        >
          تایید
        </button>
      </div>
    </>
  );
}

export default ChangePassword;
