import React from "react";
import { HiArrowLeftOnRectangle, HiOutlineUser } from "react-icons/hi2";

function TopBar() {
  return (
    <div className="sticky z-40 top-0 border-b border-b-gray-700 bg-namavaBlack py-[0.8rem] px-[2.5rem] flex items-center justify-between flex-row-reverse gap-x-6">
      <div className="flex items-center gap-x-5">
        <HiArrowLeftOnRectangle className="text-namava text-2xl" />
        <HiOutlineUser className="text-namava text-2xl" />
      </div>
      <div className="flex items-center gap-x-4 text-gray-300">
        <img
          src="/images/user.png"
          className="w-[36px] h-[36px] rounded-full"
          alt="default-user.jpg"
        />
        <div>
          <h2>میلاد سلامیان</h2>
          <h6 className="text-xs text-gray-400">مدیریت اصلی</h6>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
