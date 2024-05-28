import React from "react";
import Overlay from "../Overlay/Overlay";
import { FaXmark } from "react-icons/fa6";
import useCloseOutSideClick from "@/hooks/useOutSideClick";
import Button from "../auth/Button/Button";

type LockModal = {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  isShow: Boolean;
};

function LockModal({ onClose, isShow }: LockModal) {
  const { ref } = useCloseOutSideClick(onClose, false);
  return (
    <div
      className={`bg-black/50 fixed inset-0 flex-center z-50 transition-all ${
        isShow ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        ref={ref}
        className="w-[500px] bg-[#37383E] rounded-md text-white px-4 pt-5 pb-7"
      >
        <div className="flex items-center justify-center relative border-b border-b-gray-500 pb-5">
          <span>قفل پروفایل</span>
          <FaXmark
            onClick={() => onClose(false)}
            className="text-lg md:text-3xl absolute left-0 md:cursor-pointer"
          />
        </div>
        <h3 className="text-center mt-5">
          لطفا یک قفل چهار رقمی به عنوان رمز پروفایل انتخاب کنید.
        </h3>
        <h3 className="text-center mt-5 text-red-300">
          هنگام ورود به پروفایل این رمز از شما دریافت خواهد شد.
        </h3>
        <input type="password" className="outline-none w-full px-3 py-3.5 text-black rounded-xl mt-5 text-left" dir="ltr" />
        <div className="w-full mt-8 flex items-center gap-x-5">
            <Button className="!font-Iran">تایید کد</Button>
            <Button className="!font-Iran !bg-gray-500/50 hover:bg-white/40">بازگشت</Button>
        </div>
      </div>
    </div>
  );
}

export default LockModal;
