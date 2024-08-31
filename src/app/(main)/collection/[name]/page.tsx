import Movie from "@/components/modules/main/Movie/Movie";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <div className="relative collection-header text-white">
        <Image
          src="/images/collections/godzila.jpg"
          width={1200}
          height={1000}
          alt="godzila"
          className="w-full"
        />
        <div className="title-overlay absolute inset-0"></div>
        <div className="bottom-24 absolute z-30 container px-10">
          <h1 className="text-3xl">مجموعه فیلم های گودزیلا</h1>
          <p className="text-justify max-w-[673px] pt-5 text-base/[28px]">
            گودزیلا یک هیولای خیالی است که بازمانده ای از دوران ژوراسیک به حساب
            می آید و در اعماق دریا زندگی می کند. گودزیلا بر اثر تشعشعات اتمی جهش
            ژنتیکی پیدا کرده و از آن به عنوان پادشاه هیولاها یاد می کنند. این
            هیولا برای اولین بار در فیلمی ژاپنی محصول سال ۱۹۵۴ دیده شد و بعدها
            بارها با فیلم های ژاپنی و آمریکایی بر پرده سینماها حضور پیدا کرد.
          </p>
        </div>
      </div>
      <div className="container grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-x-4 gap-y-16 pt-10 text-white pb-20">
        {/* <Movie title="جنگل آسفالت" image="godzi1.jpg" link="" />
        <Movie title="هاوایی" image="godzi2.jpg" link="" />
        <Movie title="شریک جرم" image="godzi9.jpg" link="" />
        <Movie title="اکازیون" image="godzi4.jpg" link="" />
        <Movie
          title="شوگان"
          image="godzi5.jpg"
          link=""
        />
        <Movie
          title="اربابان آسمان"
          image="godzi6.jpg"
          link=""
        />
        <Movie
          title="کافه کنار جاده"
          image="godzi7.jpg"
          link=""
        /> */}
      </div>
    </>
  );
}

export default page;
