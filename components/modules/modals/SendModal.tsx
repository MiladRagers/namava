import Message from "@/icons/Message";
import React from "react";
import { FaXmark } from "react-icons/fa6";
import Button from "../auth/Button/Button";
import Input from "../p-admin/Input";
import { useForm } from "react-hook-form";
import { Content, TContent } from "@/src/validators/frontend";
import { zodResolver } from "@hookform/resolvers/zod";

function SendModal({ onClose, action }: { onClose?: any; action: any }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TContent>({
    resolver: zodResolver(Content),
  });

  return (
    <div className="w-[350px] md:w-[500px] bg-namavaBlack relative rounded-md text-black px-4 pt-5 pb-7">
      <FaXmark
        onClick={() => onClose()}
        className="text-lg md:text-3xl absolute left-3 top-3 md:cursor-pointer text-white"
      />
      <form
        onSubmit={handleSubmit(action)}
        className="flex-center flex-col space-y-7"
      >
        <Message className="!w-[136px] !h-[137px]" />
        <Input
          type="textarea"
          register={register}
          name="content"
          errors={errors}
          placeholder="متن پاسخ خود را وارد کنید ..."
        />
        <Button
          className={`${isValid ? "" : "!bg-slate-600 "} text-white h-[44px]`}
          type="submit"
        >
          ارسال
        </Button>
      </form>
    </div>
  );
}

export default SendModal;
