"use client";
import Mobile from "@/icons/Mobile";
import React, { useState } from "react";
import { FiEye, FiEyeOff, FiPhone } from "react-icons/fi";

function MobileLogin() {
  const [isActiveMobileNumber, setIsActiveMobileNumber] = useState(false);
  const [isActivePassword, setIsActivePassword] = useState(false);
  const [isShowPass, setIsShowPassord] = useState(true);
  return (
    <>
      <div className="flex items-center gap-x-4 mt-5">
        <Mobile />
        <span className="text-white text-sm md:text-base">
          ورود از طریق شماره تلفن همراه
        </span>
      </div>
      <p className="text-[#ccc] text-xs md:text-sm my-6">
        کاربر گرامی ، لطفا شما همراه خود را با دقت وارد نمایید
      </p>
      <div className="space-y-[24px]">
        <div className="flex flex-col gap-y-3">
          <label className="text-xs md:text-sm font-IranMedium">
            شماره تلفن همراه
          </label>
          <div
            className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
          >
            <input
              type="text"
              minLength={11}
              maxLength={11}
              placeholder="شماره تلفن همراه خود را انتخاب کنید. "
              onChange={(e) => {
                if (e.target.value.trim()) {
                  setIsActiveMobileNumber(true);
                } else {
                  setIsActiveMobileNumber(false);
                }
              }}
              dir={isActiveMobileNumber ? "ltr" : "rtl"}
              className={`h-[52px] font-Dana ${
                isActiveMobileNumber ? "text-left" : "text-right"
              }  w-full text-[13px] md:text-sm placeholder:text-gray-200 px-2.5 outline-none bg-transparent`}
            />
            <FiPhone className={`text-xl ml-4`} />
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
        <button
          className="text-sm w-full  bg-namava font-IranMedium disabled:bg-namava py-3 rounded-xl !mt-10"
          disabled
        >
          ورود
        </button>
      </div>
    </>
  );
}

export default MobileLogin;
