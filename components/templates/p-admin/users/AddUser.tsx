import Button from "@/components/modules/auth/Button/Button";
import Input from "@/components/modules/auth/Input/Input";
import Label from "@/components/modules/auth/Label/Label";
import React from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { FaEnvelope, FaInfo, FaLock, FaPhone, FaUser } from "react-icons/fa6";

function AddUser() {
  return (
    <div className="bg-namavaBlack rounded-lg p-6 shadow my-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 md:gap-y-6">
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="نام و نام خانوادگی" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input type="text" placeholder="نام و نام خانوادگی کاربر را وارد کنید" />
          <FaUser className={`text-xl ml-4`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="نام کاربری" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input type="text" placeholder="نام کاربری کاربر را وارد کنید" />
          <FaUserAstronaut className={`text-xl ml-4`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="شماره تلفن" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input type="email" placeholder="شماره تلفن کاربر را وارد کنید" />
          <FaPhone className={`text-xl ml-4`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="ایمیل" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input type="email" placeholder="ایمیل کاربر را وارد کنید" />
          <FaEnvelope className={`text-xl ml-4`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="رمز عبور" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input type="password" placeholder="رمز عبور کاربر را وارد کنید" />
          <FaLock className={`text-xl ml-4`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="بیوگرافی خلاصه" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input type="password" placeholder="درباره کاربر بنویسید " />
          <FaInfo className={`text-xl ml-4`} />
        </div>
      </div>
      <div className="flex items-center gap-x-8 mt-5 text-white">
        <Button>ایجاد کاربر</Button>
        <Button className="bg-red-700">لغو</Button>
        
      </div>
    </div>
  );
}

export default AddUser;
