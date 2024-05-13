"use client";
import Button from "@/components/modules/auth/Button/Button";
import Input from "@/components/modules/auth/Input/Input";
import Label from "@/components/modules/auth/Label/Label";
import Desc from "@/components/modules/auth/desc/desc";
import Remember from "@/icons/Remember";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

function ChangePassword() {
  const [isShowPass, setIsShowPassord] = useState(true);
  const [isActivePassword, setIsActivePassword] = useState(false);
  return (
    <>
      <div className="flex items-center gap-x-4 mt-5">
        <Remember />
        <span className="text-white text-sm md:text-base">
          بازیابی رمز عبور
        </span>
      </div>
      <Desc title="لطفا اطلاعات زیر را تکمیل کنید"/>
      <div className="space-y-[24px]">
        <div className="flex flex-col gap-y-3">
          <Label title="رمز عبور"/>
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
        <Button>تایید</Button>
      </div>
    </>
  );
}

export default ChangePassword;
