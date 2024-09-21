import useCloseOutSideClick from "@/src/hooks/useOutSideClick";
import { addPasswordInProfile } from "@/src/libs/actions/profile";
import { TModal } from "@/src/libs/types";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaXmark } from "react-icons/fa6";
import Button from "../auth/Button/Button";
import Spinner from "../spinner/Spinner";
import ModalContainer from "./ModalContainer";

function LockModal({
  onClose,
  isShow,
  password,
  onPassword,
  title,
  desc,
  onAction
}: TModal) {
  const { ref } = useCloseOutSideClick(onClose, false);
  const [isLoading, setIsLoading] = useState(false);

  
  return (
    <ModalContainer isShow={isShow ? true : false}>
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
          {title}
        </h3>
        <h3 className="text-center mt-5 text-red-300">
          {desc}
        </h3>
        <input
          type="password"
          value={password}
          onChange={(e) => onPassword(e.target.value)}
          className="outline-none w-full px-3 py-3.5 text-black rounded-xl mt-5 text-left"
          dir="ltr"
        />
        <div className="w-full mt-8 flex items-center gap-x-5">
          <Button className="!font-Iran" onClick={onAction}>
            {isLoading ? <Spinner /> : "تایید کد"}
          </Button>
          <Button onClick={() => onClose(false)} className="!font-Iran !bg-gray-500/50 hover:bg-white/40">
            بازگشت
          </Button>
        </div>
      </div>
    </ModalContainer>
  );
}

export default LockModal;
