import Message from "@/icons/Message";
import React from "react";
import { FaXmark } from "react-icons/fa6";
import Button from "../auth/Button/Button";

function ConfirmModal({ onClose }: any) {
  return (
    <div className="w-[350px] md:w-[500px] bg-gray-100 relative rounded-md text-black px-4 pt-5 pb-7">
      <FaXmark
        onClick={() => onClose()}
        className="text-lg md:text-3xl absolute left-3 top-3 md:cursor-pointer"
      />
      <div className="flex-center flex-col space-y-5">
        <Message className="!w-[136px] !h-[137px]" />
        <h2 className="text-lg font-IranMedium">آیا از حذف اطمینان دارید ؟</h2>
        <div className="flex items-center justify-center gap-x-3 w-full">
          <Button className="text-white !mt-8 !w-full">بله</Button>
          <Button className="!mt-8 text-white !bg-red-600 !w-full">خیر</Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
