import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

function LastFavList() {
  return (
    <div className="bg-namavaBlack rounded-md border border-gray-800 shadow py-4 md:py-6 px-3 md:px-6">
      <div className="text-white flex items-center justify-between border-b border-gray-600 pb-1">
        <span className="pb-2 font-IranMedium">مورد علاقه های اخیر</span>
        <span className="flex items-center gap-x-2 text-namava text-sm">
          همه مورد علاقه ها
          <IoMdArrowRoundBack className="text-lg" />
        </span>
      </div>
    </div>
  );
}

export default LastFavList;
