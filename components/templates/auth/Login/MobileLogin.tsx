"use client";
import Button from "@/components/modules/auth/Button/Button";
import Input from "@/components/modules/auth/Input/Input";
import Label from "@/components/modules/auth/Label/Label";
import Desc from "@/components/modules/auth/desc/desc";
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
      <Desc title="کاربر گرامی ، لطفا شما همراه خود را با دقت وارد نمایید"/>
      <div className="space-y-[24px]">
        <div className="flex flex-col gap-y-3">
          <Label title="شماره تلفن همراه" />
          <div
            className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
          >
            <Input
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
              className={isActiveMobileNumber ? "text-left" : "text-right"}
            />
            <FiPhone className={`text-xl ml-4`} />
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
        <Button>ورود</Button>
      </div>
    </>
  );
}

export default MobileLogin;
