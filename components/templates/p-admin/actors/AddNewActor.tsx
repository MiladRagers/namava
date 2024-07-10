import Button from "@/components/modules/auth/Button/Button";
import Input from "@/components/modules/auth/Input/Input";
import Label from "@/components/modules/auth/Label/Label";
import React from "react";
import {
  FaImage,
  FaInstagram,
  FaLink,
  FaTag,
  FaTwitter,
  FaUser,
} from "react-icons/fa6";
import { RiArticleLine } from "react-icons/ri";

function AddNewActor() {
  return (
    <div className="bg-namavaBlack rounded-lg p-6 shadow my-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 md:gap-y-6">
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="نام و نام خانوادگی" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input
            type="text"
            placeholder="نام و نام خانوادگی بازیگر را بنویسید"
          />
          <FaUser className={`text-xl ml-4`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="بیوگرافی " className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input type="text" placeholder="درباره  این بازیگر بنویسید" />
          <RiArticleLine className={`text-2xl ml-4`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="لینک " className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input type="text" placeholder="لینک بازیگر را وارد کنید" />
          <FaLink className={`text-2xl ml-4`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="توییتر" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input type="text" placeholder="درباره  این بازیگر بنویسید" />
          <FaTwitter className={`text-2xl ml-4`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="اینستاگرام" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input type="text" placeholder="درباره  این بازیگر بنویسید" />
          <FaInstagram className={`text-2xl ml-4`} />
        </div>
      </div>
      <div className="flex flex-col  gap-y-3 text-white">
        <Label title="آپلودر عکس " className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] h-[52px] px-2.5 rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input type="file" hidden id="image-uploader" />
          <label className="text-[13px] w-full" htmlFor="image-uploader">
            برای آپلود عکس کلیک کنید
          </label>
          <FaImage className={`text-2xl ml-4`} />
        </div>
      </div>
      <div className="flex items-center gap-x-8 mt-5 text-white">
        <Button>ایجاد دسته بندی</Button>
        <Button className="bg-red-700">لغو</Button>
      </div>
    </div>
  );
}

export default AddNewActor;
