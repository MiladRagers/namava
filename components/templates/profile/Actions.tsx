import Button from "@/components/modules/auth/Button/Button";
import React from "react";

function Actions() {
  return (
    <div className="max-w-[700px] mx-auto flex items-center text-white gap-x-5 pb-20 ">
      <Button>ذخیره</Button>
      <Button className="!bg-gray-500/50 hover:!bg-white/40">بازگشت</Button>
      <Button className="border border-red-600 !bg-[#121212] text-red-600 hover:!bg-red-600 hover:!text-white">حذف پروفایل</Button>
    </div>
  );
}

export default Actions;
