"use client";
import Button from "@/components/modules/auth/Button/Button";
import Input from "@/components/modules/auth/Input/Input";
import Label from "@/components/modules/auth/Label/Label";
import Desc from "@/components/modules/auth/desc/desc";
import Email from "@/icons/Email";
import Mobile from "@/icons/Mobile";
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa6";
import { FiEye, FiEyeOff, FiPhone } from "react-icons/fi";

function EmailLogin() {
  const [isActivePassword, setIsActivePassword] = useState(false);
  const [isShowPass, setIsShowPassord] = useState(true);
  return (
    <>
      <div className="flex items-center gap-x-4 mt-5">
        <Email />
        <span className="text-white text-sm md:text-base">
          ورود از طریق ایمیل
        </span>
      </div>
      <Desc title="کاربر گرامی ، لطفا شما ایمیل خود را با دقت وارد نمایید" />
      <div className="space-y-[24px]">
        <div className="flex flex-col gap-y-3">
          <Label title="ایمیل" />
          <div
            className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
          >
            <Input type="email" placeholder="ایمیل خود را وارد کنید" />
            <FaEnvelope className={`text-xl ml-4`} />
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

export default EmailLogin;
