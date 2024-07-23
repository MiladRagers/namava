import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import LastTicketItem from "./LastTicketItem";

function LastTickets() {
  return (
    <div className="bg-namavaBlack rounded-md border  border-gray-800 shadow py-4 md:pb-6 md:pt-5 px-3 md:px-6">
      <div className="text-white flex items-center justify-between border-b border-gray-600 pb-1">
        <span className="pb-2 font-IranMedium">تیکت های اخیر</span>
        <span className="flex items-center gap-x-2 text-namava text-sm">
          همه تیکت ها
          <IoMdArrowRoundBack className="text-lg" />
        </span>
      </div>
      <div className="overflow-hidden max-h-[225px] md:max-h-[365px] recent-box overflow-y-auto">
        <div className="my-4 space-y-4">
          <LastTicketItem />
          <LastTicketItem />
          <LastTicketItem />
          <LastTicketItem />
        </div>
      </div>
    </div>
  );
}

export default LastTickets;
