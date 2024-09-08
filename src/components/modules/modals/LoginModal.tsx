import React from "react";
import { FaXmark } from "react-icons/fa6";
import ModalContainer from "./ModalContainer";
import useCloseOutSideClick from "@/src/hooks/useOutSideClick";
import { TModal } from "@/src/libs/types";
import Message from "@/src/icons/Message";
import Button from "../auth/Button/Button";
import { useRouter } from "next/navigation";

function LoginModal({ isShow, onClose }: TModal) {
  const { ref } = useCloseOutSideClick(onClose, false);
  const router = useRouter();
  return (
    <ModalContainer isShow={isShow ? true : false}>
      <div
        ref={ref}
        className="w-[500px] bg-white relative rounded-md text-black px-4 pt-5 pb-7"
      >
        <FaXmark
          onClick={() => onClose(false)}
          className="text-lg md:text-3xl absolute left-3 top-3 md:cursor-pointer"
        />
        <div className="flex-center flex-col space-y-5">
          <Message className="!w-[136px] !h-[137px]" />
          <p>برای ثبت نظر، ابتدا باید وارد شوید.</p>
          <Button
            className="text-white !mt-8"
            onClick={() => router.push("/login")}
          >
            ورود / ثبت نام
          </Button>
          <Button
            className="!mt-8 bg-white text-black"
            onClick={() => onClose(false)}
          >
            بستن
          </Button>
        </div>
      </div>
    </ModalContainer>
  );
}

export default LoginModal;
