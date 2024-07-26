import Link from "next/link";
import React from "react";

function LastTicketItem() {
  return (
    <Link href="/p-user/tickets/1" className="text-white bg-[#121212] p-4 rounded-md flex items-center justify-between">
      <div className="space-y-3">
        <h4>سرمایه گذاری</h4>
        <div className="bg-white text-[#121212] flex-center py-2 rounded-md">
          واحد مالی
        </div>
      </div>
      <div className="text-center space-y-3">
        <h5 className="font-Dana">1403/05/02</h5>
        <p>پاسخ داده شده</p>
      </div>
    </Link>
  );
}

export default LastTicketItem;
