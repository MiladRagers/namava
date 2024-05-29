import Movie from "@/components/modules/main/Movie/Movie";
import Image from "next/image";
import React from "react";

function page({ params }: any) {
  return (
    <div className="container text-white py-20">
      <div className="flex flex-col items-center md:items-start md:flex-row  gap-x-5 pb-16">
        <div className="shrink-0">
          <Image
            src="/images/actors/ac14.jpg"
            alt="kris"
            width={180}
            height={180}
            className="w-[180px] h-[180px] rounded-full"
          />
        </div>
        <div>
          <h1 className="text-lg md:text-2xl mt-5 md:m-0 text-center md:text-right ">بیوگرافی Chris Evans</h1>
          <p className="text-xs/[25px] md:text-sm/[25px] mt-5 text-justify">
            کریس ایوانز بازیگر آمریکایی متولد ۱۳ ژوئن ۱۹۸۳ در ماساچوست است. او
            با حضور در نقش جانی استورم در فیلم ۴ شگفت انگیز تبدیل به چهره ایی
            مشهور شد. در سال ۲۰۰۰ با بازی در یک سریال به نام جنس مخالف در
            تلویزیون‌ها ظاهر شد و حضور کوتاهی در فراری داشت. پس از آن او سال
            ۲۰۰۴ در فیلم‌های نمره کامل و موبایل حضور داشت اما وقتی او به شهرت
            رسید که در فیلم ۴ شگفت‌انگیز در نقش مشعل انسان، جانی استورم نقش
            آفرینی کرد. او در قسمت دوم این فیلم هم حضور داشت. ایوانز پس از مشعل
            انسان در سال ۲۰۱۱ برای بار دوم نقش یک ابرقهرمان دیگر کاپیتان آمریکا
            را بر عهده گرفت و توانست جای پای بیشتری در هالییوود باز کند.ایوانز
            با همین نقش کاپیتان آمریکا در سال ۲۰۱۲ در فیلم انتقام جویان که تبدیل
            به سومین فیلم پرفروش تاریخ در ان زمان شد حضور داشت. پس از آن هم در
            فیلم کاپیتان آمریکا: سرباز زمستان نقش آفرینی کرد. در سال ۲۰۱۵ او در
            فیلم انتقام جویان: عصر اولتران حضور داشت و هم اکنون وی برای فیلم
            کاپیتان آمریکا: جنگ داخلی در نقش کاپیتان آمریکا/ استیو راجرز مقابل
            دوربین فیلمبرداری می‌رود.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-base md:text-lg font-IranMedium">فیلم های کریس ایوانز</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-x-4 gap-y-16 pt-10">
          <Movie title="جنگل آسفالت" image="jangalAsphalt.jpg" link="" />
          <Movie title="هاوایی" image="havaie.jpg" link="" />
          <Movie title="شریک جرم" image="sharikJorm.jpg" link="" />
          <Movie title="اکازیون" image="okazion.jpg" link="" />
          <Movie
            title="شوگان"
            image="4f01db3a-f1de-4b11-9851-221f4d848d7b.jpg"
            link=""
          />
          <Movie
            title="اربابان آسمان"
            image="e5293b19-e395-4fd6-b668-8684007c8f31.jpg"
            link=""
          />
          <Movie
            title="کافه کنار جاده"
            image="471b0682-7f7e-4fcc-b70a-718933f6b36d.jpg"
            link=""
          />
          <Movie title="دینامیت" image="dinamit.jpg" link="" />
          <Movie title="هاوایی" image="havaie.jpg" link="" />
          <Movie title="شریک جرم" image="sharikJorm.jpg" link="" />
        </div>
      </div>
    </div>
  );
}

export default page;
