import Button from "@/components/modules/auth/Button/Button";
import Input from "@/components/modules/auth/Input/Input";
import Label from "@/components/modules/auth/Label/Label";
import React from "react";
import { FaLink } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { FiVideo } from "react-icons/fi";
import { MdAccessTime, MdOutlineWbIncandescent } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";

function AddNewSession() {
  return (
    <div className="bg-namavaBlack rounded-lg p-6 shadow my-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 md:gap-y-6">
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="نام قسمت" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2 px-2 md:px-4`}
        >
          <Input type="text" placeholder="نام قسمت را وارد کنید" />
          <RiMovie2Line className={`text-2xl`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="زمان" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center px-2 md:px-4 justify-between gap-x-2`}
        >
          <Input type="text" placeholder="مدت زمان قسمت را وارد کنید" />
          <MdAccessTime className={`text-2xl`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="لینک " className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl px-2 md:px-4 flex items-center justify-between gap-x-2`}
        >
          <Input type="text" placeholder="لینک قسمت را وارد کنید" />
          <FaLink className={`text-2xl`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="درباره قسمت (خلاصه)" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center px-2 md:px-4 justify-between gap-x-2`}
        >
          <Input
            type="text"
            placeholder="در مورد قسمت به شکل خلاصه توضیح دهید"
          />
          <MdOutlineWbIncandescent className={`text-2xl`} />
        </div>
      </div>
      <div className="flex flex-col  gap-y-3 text-white">
        <Label title="بنر اصلی" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] h-[52px] px-2 md:px-4 rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input type="file" hidden id="image-uploader" />
          <label className="text-[13px] w-full" htmlFor="image-uploader">
            برای آپلود بنر اصلی کلیک کنید
          </label>
          <FaImage className={`text-2xl`} />
        </div>
      </div>
      <div className="flex flex-col  gap-y-3 text-white">
        <Label title="ویدیو" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] h-[52px] px-2 md:px-4 rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input type="file" hidden id="image-uploader"  />
          <label className="text-[13px] w-full" htmlFor="image-uploader">
            برای آپلود ویدیو کلیک کنید
          </label>
          <FiVideo className={`text-2xl`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="نام سریال" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212]  h-[52px] px-2.5 rounded-xl flex items-center justify-between gap-x-2`}
        >
          <select className="bg-[#121212] outline-none w-full">
            <option value="-1">نام سریال را انتخاب کنید</option>
            <option value="1">جومونگ</option>
            <option value="2">کاپیتان</option>
            <option value="3">بن تن</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="نام فصل" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212]  h-[52px] px-2.5 rounded-xl flex items-center justify-between gap-x-2`}
        >
          <select className="bg-[#121212] outline-none w-full">
            <option value="-1">فصل سریال را انتخاب کنید</option>
            <option value="1">فصل 1</option>
            <option value="2">فصل 2</option>
            <option value="3">فصل 3</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-x-8 mt-5 text-white">
        <Button>ایجاد اثر</Button>
        <Button className="bg-red-700">لغو</Button>
      </div>
    </div>
  );
}

export default AddNewSession;
