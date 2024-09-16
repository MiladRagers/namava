"use client";
import { answerToTicket } from "@/src/libs/actions/ticket";
import { ILastTicket } from "@/src/libs/types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "../../modules/auth/Button/Button";
import Spinner from "../../modules/spinner/Spinner";

function SendAnswerToTicket({ ticketInfo }: { ticketInfo: ILastTicket }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const sendTicketAnswer = async (data: any) => {
    setIsLoading(true);
    const answerObj = {
      ...data,
      ...ticketInfo,
      replyTo: ticketInfo._id,
      body: data.body,
    };
    const res = await answerToTicket(answerObj);
    setIsLoading(false);

    if (res?.status === 201) {
      reset();
      return toast.success(`${res?.message}`);
    }
    reset();
    return toast.error(`${res?.message}`);
  };
  return (
    <form
      onSubmit={handleSubmit(sendTicketAnswer)}
      id="reply-ticket"
      className="mt-10"
    >
      <textarea
        rows={8}
        {...register("body", {
          required: "لطفا متن خود را بنویسید",
        })}
        className="block w-full p-3 md:p-5 text-sm md:text-base bg-[#121212]  border border-transparent focus:border-gray-200  rounded-2xl transition-colors"
        name="body"
        placeholder="پاسخ ..."
        disabled={isLoading}
      ></textarea>
      {errors.body && (
        <span className={` text-xs md:text-sm text-red-600`}>
          {errors?.body?.message as string}
        </span>
      )}
      <div className="flex gap-x-2 justify-end mt-2.5">
        <Button disabled={isLoading} className="!w-full md:!w-[10%]">
          {isLoading ? <Spinner /> : "ارسال"}
        </Button>
      </div>
    </form>
  );
}

export default SendAnswerToTicket;
