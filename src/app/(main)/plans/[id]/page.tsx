import Button from "@/components/modules/auth/Button/Button";
import PaymentGateway from "@/components/modules/plans/PaymentGateway";
import { TParams } from "@/src/libs/types";
import React from "react";

function page({ params }: TParams) {
  return (
    <div className="flex  my-28">
      <div className="bg-namavaBlack  w-full h-[320px] px-[28] rounded-md py-6 md:w-1/3 mx-auto text-white">
        <h1 className="text-base md:text-lg font-IranMedium text-center">
          یک ماهه
        </h1>
        <ul className="w-full mt-5 space-y-4 border-b border-b-slate-500 pb-4">
          <li className="flex items-center justify-between">
            <span>قیمت : </span>
            <span>160,000 تومان</span>
          </li>
          <li className="flex items-center justify-between">
            <span>تخفیف : </span>
            <span className="text-red-600">40,000 تومان</span>
          </li>
          <li className="flex items-center justify-between">
            <span> مبلغ قابل پرداخت : </span>
            <span>120,000 تومان</span>
          </li>
        </ul>
        <div className="w-full mt-5 space-y-4">
          <h3>ثبت کد تخفیف</h3>

          <div className="bg-black flex items-center justify-between rounded-md overflow-hidden">
            <input
              type="text"
              className="bg-transparent w-full pr-4 border-none outline-none"
              placeholder="لطفا کد تخفیف خود را وارد کنید"
            />
            <Button className="!w-[80px] !rounded-none">اعمال</Button>
          </div>
        </div>
      </div>
      <PaymentGateway />
    </div>
  );
}

export default page;
