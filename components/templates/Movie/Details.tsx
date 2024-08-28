import Article from "@/icons/Article";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Details({ info }: any) {
  return (
    <>
      <h3 className="text-base md:text-lg font-IranMedium">تصاویر و جزییات</h3>
      <div className="grid gap-3 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 md:cursor-pointer">
        {info.detailImage.map((image: any) => (
          <Image
            key={image}
            src={image}
            alt={image}
            width={190}
            height={140}
            className="rounded-md"
          />
        ))}
      </div>
      <div>
        <h3 className="text-base md:text-lg font-IranMedium">اطلاعات بیشتر</h3>
        <div className="bg-namavaBlack max-w-[577px] my-5 rounded-md shadow py-6">
          <Article />
          <div className="px-5 mt-4">
            <h3 className="">
              «مرد عنکبوتی: راهی به خانه نیست»؛ یک پیتر پارکر کلاسیک اما کاملاً
              تازه
            </h3>
            <p className="min-h-[127px] mt-5 text-sm/[26px] text-[#aaa]">
              تام هالند، توبی مگوایر و اندرو گارفیلد درباره حضور مجدد در نقش مرد
              عنکبوتی صحبت می‌کنند و این که چرا «راهی به خانه نیست» یک تجربه
              احساسی برای آن‌ها بود.
            </p>

            <Link href={`/`} className="text-namava">
              ادامه مطلب
            </Link>
          </div>
        </div>

        <h3 className="text-base md:text-lg font-IranMedium">
          درباره فیلم {info.title}
        </h3>
        <p className="text-justify text-xs/6 md:text-sm/8 mt-3 text-[#ccc]">
          {info.longDesc}
        </p>
        <div className="mt-7 text-xs md:text-sm font-IranMedium space-y-3">
          <p>دسته بندی : کمدی ، ماجراجویی ، پردیس نماوا ، فیلم ایرانی</p>
          <p>صدا : {info.language}</p>
        </div>
      </div>
    </>
  );
}

export default Details;
