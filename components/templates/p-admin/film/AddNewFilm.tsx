import Button from "@/components/modules/auth/Button/Button";
import Input from "@/components/modules/auth/Input/Input";
import Label from "@/components/modules/auth/Label/Label";
import React from "react";
import { BiCameraMovie } from "react-icons/bi";
import { FaImage, FaRegFileImage, FaRegImages } from "react-icons/fa6";
import { LuCalendarRange } from "react-icons/lu";
import { MdAccessTime, MdOutlineWbIncandescent } from "react-icons/md";
import { RiArticleLine, RiImageAddFill, RiMovie2Line } from "react-icons/ri";

function AddNewFilm() {
  return (
    <div className="bg-namavaBlack rounded-lg p-6 shadow my-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 md:gap-y-6">
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="نام اثر" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center justify-between gap-x-2 pl-2`}
        >
          <Input type="text" placeholder="نام اثر را وارد کنید" />
          <RiMovie2Line className={`text-2xl`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="رده سنی" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center justify-between pl-2 gap-x-2`}
        >
          <Input type="text" placeholder="رده سنی مورد نظر را وارد کنید" />
          <LuCalendarRange className={`text-2xl`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="رده سنی" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center pl-2 justify-between gap-x-2`}
        >
          <Input type="text" placeholder="مدت زمان اثر را وارد کنید" />
          <MdAccessTime className={`text-2xl`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="درباره اثر (خلاصه)" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center pl-2 justify-between gap-x-2`}
        >
          <Input
            type="text"
            placeholder="در مورد اثر به شکل خلاصه توضیح دهید"
          />
          <MdOutlineWbIncandescent className={`text-2xl`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="زمان پخش" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center pl-2 justify-between gap-x-2`}
        >
          <Input type="text" placeholder="زمان پخش اثر را بنویسید" />
          <MdOutlineWbIncandescent className={`text-2xl`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="دسته بندی اثر" className="!text-base md:!text-lg" />
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
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="نوع اثر" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center pl-2 justify-between gap-x-2`}
        >
          <div className="text-white text-sm flex items-center gap-x-4 pr-2">
            <div className="flex items-center gap-x-2">
              <label htmlFor="فیلم">فیلم</label>
              <Input name="type" type="radio" id="film" />
            </div>
            <div className="flex items-center gap-x-2">
              <label htmlFor="سریال">سریال</label>
              <Input name="type" type="radio" id="series" />
            </div>
          </div>
          <BiCameraMovie className={`text-2xl`} />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 text-white">
        <Label title="توضیحات اثر" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] rounded-xl flex items-center pl-2 justify-between gap-x-2`}
        >
          <Input type="text" placeholder="توضیحات اثر را بنویسید" />
          <RiArticleLine className={`text-2xl`} />
        </div>
      </div>
      <div className="flex flex-col  gap-y-3 text-white">
        <Label title="تصویر اصلی" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] h-[52px] px-2.5 rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input type="file" hidden id="image-uploader" />
          <label className="text-[13px] w-full" htmlFor="image-uploader">
            برای آپلود تصویر اصلی کلیک کنید
          </label>
          <FaImage className={`text-2xl`} />
        </div>
      </div>
      <div className="flex flex-col  gap-y-3 text-white">
        <Label title="بنر دسکتاپ" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] h-[52px] px-2.5 rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input type="file" hidden id="image-uploader" />
          <label className="text-[13px] w-full" htmlFor="image-uploader">
            برای آپلود بنر دسکتاپ کلیک کنید
          </label>
          <RiImageAddFill className={`text-2xl`} />
        </div>
      </div>
      <div className="flex flex-col  gap-y-3 text-white">
        <Label title="بنر موبایل" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] h-[52px] px-2.5 rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input type="file" hidden id="image-uploader" />
          <label className="text-[13px] w-full" htmlFor="image-uploader">
            برای آپلود بنر موبایل کلیک کنید
          </label>
          <FaRegFileImage className={`text-2xl`} />
        </div>
      </div>
      <div className="flex flex-col  gap-y-3 text-white">
        <Label title="بنر موبایل" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212] h-[52px] px-2.5 rounded-xl flex items-center justify-between gap-x-2`}
        >
          <Input multiple type="file" hidden id="image-uploader" />
          <label className="text-[13px] w-full" htmlFor="image-uploader">
            برای آپلود جزییات (چند تصویر) کلیک کنید
          </label>
          <FaRegImages className={`text-2xl`} />
        </div>
      </div>
      <div className="flex items-center gap-x-8 mt-5 text-white">
        <Button>ایجاد اثر</Button>
        <Button className="bg-amber-500">صفحه سریال</Button>
      </div>
      <div className="flex items-center gap-x-8 mt-5 text-white">
      <Button className="bg-red-700">لغو</Button>
        <div className="w-full"></div>
      </div>

    </div>
  );
}

export default AddNewFilm;
