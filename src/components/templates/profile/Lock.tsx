"use client";
import LockModal from "@/src/components/modules/modals/LockModal";
import React, { useEffect, useRef, useState } from "react";

function Lock() {
  const [isShowLockModal, setIsShowLockModal] = useState(false);
  const switchRef = useRef<HTMLInputElement>(null);

  const handleSwitch = (e: any) => {
    if (e.target.checked) {
      setIsShowLockModal(true);
    }
  };

  return (
    <>
      <div className="max-w-[700px] mx-auto text-white flex flex-col items-center md:items-start gap-x-3 md:gap-x-8 px-4 md:px-10 py-6 md:py-[30px] bg-namavaBlack rounded-xl my-10">
        <div className="flex w-full items-center justify-between">
          <div className="text-lg">
            <span>قفل پروفایل : </span>
            <span className="text-red-600">غیر فعال</span>
          </div>
          <div>
            <label className="switch">
              <input type="checkbox" onChange={handleSwitch} ref={switchRef} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <p className="text-sm mt-5">
          توجه داشته باشید که در صورت فعال کردن قفل پروفایل، هنگام ورود به این
          پروفایل، ثبت کد ورود الزامی خواهد بود.
        </p>
      </div>

      {isShowLockModal && (
        <LockModal onClose={setIsShowLockModal} isShow={isShowLockModal} />
      )}
    </>
  );
}

export default Lock;
