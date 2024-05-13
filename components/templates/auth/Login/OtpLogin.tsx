"use client";
import Button from "@/components/modules/auth/Button/Button";
import Input from "@/components/modules/auth/Input/Input";
import Label from "@/components/modules/auth/Label/Label";
import Desc from "@/components/modules/auth/desc/desc";
import OtpIcon from "@/icons/OtpIcon";
import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";

function SendOtpCode() {
  const [isActiveMobileNumber, setIsActiveMobileNumber] = useState(false);
  return (
    <>
      <div className="flex items-center gap-x-4 mt-5">
        <OtpIcon />
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
        <Button>ارسال کد</Button>
      </div>
    </>
  );
}

export default SendOtpCode;
