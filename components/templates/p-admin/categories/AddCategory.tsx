import Button from "@/components/modules/auth/Button/Button";
import Input from "@/components/modules/auth/Input/Input";
import Label from "@/components/modules/auth/Label/Label";
import React from "react";
import { FaImage, FaLink, FaTag, FaVuejs } from "react-icons/fa6";
import { RiArticleLine } from "react-icons/ri";

function AddCategories() {
  return (
    <div className="bg-namavaBlack rounded-lg p-6 shadow my-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 md:gap-y-6">
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="عنوان" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input type="text" placeholder="عنوان دسته بندی را وارد کنید" />
          <FaVuejs className={`text-xl ml-4`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="لینک " className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input type="text" placeholder="لینک دسته بندی را وارد کنید" />
          <FaLink className={`text-2xl ml-4`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="توضیحات " className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input type="text" placeholder="درباره دسته بندی بنویسید" />
          <RiArticleLine className={`text-2xl ml-4`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="پرنت دسته بندی" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212]  h-[52px] px-2.5 rounded-xl flex items-center justify-between gap-x-2`}
        >
          <select className="bg-[#121212] outline-none w-full">
            <option value="-1">پرنت دسته بندی را انتخاب کنید</option>
            <option value="1">اکشن</option>
            <option value="2">کمدی</option>
            <option value="3">علمی تخیلی</option>
          </select>
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
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="تگ ها" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input type="text" placeholder="تگ های دسته بندی را بنویسید" />
          <FaTag className={`text-2xl ml-4`} />
        </div>
      </div>
      <div className="flex items-center gap-x-8 mt-5 text-white">
        <Button>ایجاد دسته بندی</Button>
        <Button className="bg-red-700">لغو</Button>
      </div>
    </div>
  );
}

export default AddCategories;
