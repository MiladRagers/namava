import Button from "@/src/components/modules/auth/Button/Button";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="bg-namavaBlack rounded-md p-6 text-white">
      <div className="flex items-center justify-between">
        <h1 className="text-xl text-green-600">اطلاعات اشتراک فعال</h1>
      </div>
      <div className="mt-8">
        <ul className="space-y-5 text-base">
          <li>
            <span className="text-[#d4d4d4]">تاریخ فعال سازی : </span>
            <span>1403/03/19 </span>
          </li>
          <li>
            <span className="text-[#d4d4d4]">تاریخ اتمام : </span>
            <span>1403/06/1</span>
          </li>

          <li>
            <span className="text-[#d4d4d4]">تعداد روز های باقی مانده : </span>
            <span>90 روز</span>
          </li>
          <li>
            <span className="text-[#d4d4d4]">خریدار : </span>
            <span>میلاد سلامیان</span>
          </li>
          <li>
            <span className="text-[#d4d4d4]">ایمیل : </span>
            <span>milad@gmail.com</span>
          </li>
        </ul>

        <div className="flex-center flex-col gap-y-12 mt-16">
          <p>شما در حال حاضر اشتراک فعالی ندارید.</p>
          <Link href={"/plans"}>
            <Button className="!w-[200px]">خرید اشتراک</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
