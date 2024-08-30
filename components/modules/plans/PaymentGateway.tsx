"use client";
import { banks } from "@/public/db";
import React, { useState } from "react";
import Bank from "./Bank";
import Button from "../auth/Button/Button";

function PaymentGateway() {
  const [activeBank, setActiveBank] = useState("");
  return (
    <div className="bg-namavaBlack  w-full px-[28] rounded-md py-6 md:w-1/3 mx-auto text-white">
      <h2 className="text-base md:text-lg font-IranMedium text-center">
        درگاه پرداخت :
      </h2>
      <div className="space-y-4 mt-6">
        {banks.map((bank) => (
          <Bank
            onSelect={setActiveBank}
            selected={activeBank}
            key={bank.id}
            {...bank}
          />
        ))}

        <div className="flex items-center justify-between mt-6">
          <span> مبلغ قابل پرداخت : </span>
          <span className="text-sm text-namava">120,000 تومان</span>
        </div>

        <Button className="!mt-8">ادامه و پرداخت</Button>
      </div>
    </div>
  );
}

export default PaymentGateway;
