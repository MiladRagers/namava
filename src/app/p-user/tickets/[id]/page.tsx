import AnswerBox from "@/src/components/templates/p-admin/tickets/AnswerBox";
import React from "react";

function page() {
  return (
    <div className="bg-namavaBlack text-white rounded-md  p-[18px] shadow h-full">
      <h3 className="text-xl font-DanaDemiBold border-b border-b-gray-500 pb-4">
        چگونه اشتراک بخریم ؟
      </h3>
      {/* start question box */}
      <div className="mt-7 space-y-5">
        <AnswerBox isFromUserPanel={true} />
      </div>
      {/* start answer box  */}
      <div className="mt-5 space-y-5">
        <AnswerBox isFromUserPanel={false} />
      </div>

      {/* reply answer */}

      <form id="reply-ticket" className="mt-10">
        <textarea
          rows={6}
          className="block bg-[#121212] w-full p-3 bg-n md:p-5 text-sm md:text-base text-slate-500 dark:text-gray-500 focus:text-zinc-700 dark:focus:text-white  dark:bg-gray-700 border border-transparent focus:border-gray-200 dark:focus:border-slate rounded-2xl placeholder:font-danaLight transition-colors"
          name="text"
          placeholder="پاسخ ..."
        ></textarea>
        <div className="flex gap-x-2 justify-end mt-2.5">
          <button
            className="bg-blue-600 text-white py-2 px-5 rounded-md"
            type="submit"
          >
            ارسال
          </button>
        </div>
      </form>
      <div className="bg-red-700 text-white font-DanaDemiBold flex items-center justify-center gap-x-1.5 rounded-lg text-sm md:text-lg py-8 mt-5">
        این چت در تاریخ <strong>1403/04/12</strong> به شکل اتوماتیک بسته شد
      </div>
    </div>
  );
}

export default page;
