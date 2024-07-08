import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function Pagination() {
  return (
    <div className="flex items-center justify-between text-white rounded-b-md bg-[#363636] px-10 py-4 border-t border-zinc-400">
      <p className="font-Dana">
        <span className="font-bold">1</span> تا{" "}
        <span className="font-bold">2</span> - از{" "}
        <span className="font-bold">20</span> تا
      </p>
      <div className="flex items-center gap-x-2">
        <button className="flex-center font-IranMedium w-[80px] hover:bg-namava transition-all gap-x-2 py-1 rounded-md flex items-center">
          <HiChevronRight />
          بعدی
        </button>
        <button className="flex-center font-IranMedium w-[80px] hover:bg-namava transition-all gap-x-2 py-1 rounded-md flex items-center">
          قبلی
          <HiChevronLeft />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
