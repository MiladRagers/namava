import React from "react";
import { ImWarning } from "react-icons/im";

function page() {
  return (
    <div className="my-28 text-white">
      <h1 className="text-center text-lg md:text-xl lg:text-2xl">
        اشتراک خود را انتخاب کنید
      </h1>

      <div className="max-w-[640px] mx-auto space-y-6 mt-10 px-3">
        <div className="bg-namavaBlack flex items-center justify-between py-4 px-5 rounded-lg">
          <div className="space-y-3">
            <h3 className="text-base md:text-lg">یک ماهه</h3>

            <div className="bg-namava font-Dana text-xs md:text-sm text-white px-3 py-1 rounded-2xl">
              30 % تخفیف ویژه خرید اشتراک
            </div>
          </div>
          <div className="flex items-center flex-col gap-y-3 text-sm md:text-base">
            <span className="font-Dana text-[#ddd] relative">
              <span className="font-bold">160,000</span> هزار تومان
              <span className="block absolute w-[1.5px] h-20 md:h-28 bg-red-600/80 top-1/2 left-1/2 -translate-y-1/2 rotate-[70deg]"></span>
            </span>
            <span className="font-Dana text-namava">
              <span className="font-bold">120,000</span> هزار تومان
            </span>
          </div>
        </div>
        <div className="bg-namavaBlack flex items-center justify-between py-4 px-5 rounded-lg">
          <div className="space-y-3">
            <h3 className="text-base md:text-lg">سه ماهه</h3>

            <div className="bg-namava font-Dana text-white px-3 py-1 rounded-2xl text-xs md:text-sm">
              30 % تخفیف ویژه خرید اشتراک
            </div>
          </div>
          <div className="flex items-center flex-col gap-y-3 text-sm md:text-base">
            <span className="font-Dana text-[#ddd] relative">
              <span className="font-bold">160,000</span> هزار تومان
              <span className="block absolute w-[1.5px] h-20 md:h-28 bg-red-600/80 top-1/2 left-1/2 -translate-y-1/2 rotate-[70deg]"></span>
            </span>
            <span className="font-Dana text-namava">
              <span className="font-bold">120,000</span> هزار تومان
            </span>
          </div>
        </div>
        <div className="bg-namavaBlack flex items-center justify-between py-4 px-5 rounded-lg">
          <div className="space-y-3">
            <h3 className="text-base md:text-lg">شش ماهه</h3>

            <div className="bg-namava font-Dana text-white px-3 py-1 rounded-2xl text-xs md:text-sm">
              30 % تخفیف ویژه خرید اشتراک
            </div>
          </div>
          <div className="flex items-center flex-col gap-y-3 text-sm md:text-base">
            <span className="font-Dana text-[#ddd] relative">
              <span className="font-bold">160,000</span> هزار تومان
              <span className="block absolute w-[1.5px] h-20 md:h-28 bg-red-600/80 top-1/2 left-1/2 -translate-y-1/2 rotate-[70deg]"></span>
            </span>
            <span className="font-Dana text-namava">
              <span className="font-bold">120,000</span> هزار تومان
            </span>
          </div>
        </div>

        <p className="text-[#aaa] text-xs md:text-base">
          به مبالغ فوق ۱۰٪ بابت مالیات بر ارزش افزوده اضافه می‌شود.
        </p>
        <div className="py-4 px-5 rounded-lg bg-namavaBlack space-y-3">
          <h2 className="text-sm md:text-lg">
            با خرید اشتراک به امکانات زیر دسترسی خواهید داشت:
          </h2>
          <ul className="pr-4 list-disc text-xs/[25px] md:text-sm text-[#d2d2d2]">
            <li>
              تماشای نامحدود هزاران فیلم و سریال و انیمیشن جذاب نماوا در طول مدت
              اشتراک خریداری شده.
            </li>
          </ul>
        </div>
        <div className="py-4 px-5 rounded-lg bg-red-700 flex items-center gap-x-5">
          <ImWarning className="flex-shrink-0"/>
          <div className="space-y-3">
            <h2 className="text-sm md:text-base">
              تماشای فیلم های خارجی تنها برای کاربران داخل ایران امکان پذیر است.
            </h2>
            <h5 className="text-[#d8d7d7] text-xs/[25px] md:text-sm">
              کاربران خارج از ایران با خرید اشتراک نماوا، تنها به فیلم های
              ایرانی دسترسی خواهند داشت.
            </h5>
          </div>
        </div>
        <div className="py-4 px-5 rounded-lg bg-namava space-y-3">
          <h4 className="text-sm md:text-base">هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم.</h4>
          <div className="flex items-center justify-between text-sm">
            <a href="tel:02191000111" className="font-Dana">
              021-91000111
            </a>
            <a href="mailto:support@namava.ir">support@namava.ir</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
