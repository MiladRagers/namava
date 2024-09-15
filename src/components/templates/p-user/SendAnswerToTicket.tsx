"use client";
import React from "react";
import { useForm } from "react-hook-form";

function SendAnswerToTicket() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const sendTicketAnswer = async (data: any) => {};
  return (
    <form
      onSubmit={handleSubmit(sendTicketAnswer)}
      id="reply-ticket"
      className="mt-10"
    >
      <textarea
      rows={8}
        className="block w-full p-3 md:p-5 text-sm md:text-base bg-[#121212]  border border-transparent focus:border-gray-200  rounded-2xl transition-colors"
        name="text"
        placeholder="پاسخ ..."
      ></textarea>
      <div className="flex gap-x-2 justify-end mt-2.5">
        <button
          className="bg-blue-600 text-white py-2 px-5 rounded-md shadow-blue"
          type="submit"
        >
          ارسال
        </button>
      </div>
    </form>
  );
}

export default SendAnswerToTicket;
