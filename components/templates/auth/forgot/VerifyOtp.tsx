"use client";
import Button from "@/components/modules/auth/Button/Button";
import Input from "@/components/modules/auth/Input/Input";
import Label from "@/components/modules/auth/Label/Label";
import Desc from "@/components/modules/auth/desc/desc";
import Remember from "@/icons/Remember";
import React, { useState } from "react";
import { FiCode } from "react-icons/fi";

function VerifyOtp() {
  const [isActiveMobileNumber, setIsActiveMobileNumber] = useState(false);
  return (
    <>
      <div className="flex items-center gap-x-4 mt-5">
        <Remember />
        <span className="text-white text-sm md:text-base">
          بازیابی رمز عبور
        </span>
      </div>
      <Desc title="یک کد به شماره 09336084013 ارسال شد ، لطفا کد را وارد کنید."/>
      <div className="space-y-[24px]">
        <div className="flex flex-col gap-y-3">
          <Label title="کد فعال سازی" />
          <div
            className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
          >
            <Input
              type="text"
              minLength={11}
              maxLength={11}
              placeholder="کد فعال سازی را وارد نمایید"
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
            <FiCode className={`text-xl ml-4`} />
          </div>
        </div>
        <Button>ارسال مجدد</Button>
        <Button>ورود</Button>
      </div>
    </>
  );
}

export default VerifyOtp;
