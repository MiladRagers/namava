import Image from "next/image";
import React from "react";

function Details() {
  return (
    <>
      <h3 className="text-base md:text-lg font-IranMedium">تصاویر و جزییات</h3>
      <div className="grid gap-3 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 md:cursor-pointer">
        <Image
          src="/images/amin.jpg"
          alt="amin1.jpg"
          width={190}
          height={140}
          className="rounded-md"
        />
        <Image
          src="/images/amin2.jpg"
          alt="amin2.jpg"
          width={190}
          height={140}
          className="rounded-md"
        />
        <Image
          src="/images/amin3.png"
          alt="amin3.jpg"
          width={190}
          height={140}
          className="rounded-md"
        />
        <Image
          src="/images/amin4.png"
          alt="amin4.jpg"
          width={190}
          height={140}
          className="rounded-md"
        />
        <Image
          src="/images/amin5.jpg"
          alt="amin5.jpg"
          width={190}
          height={140}
          className="rounded-md"
        />
        <Image
          src="/images/amin6.png"
          alt="amin6.jpg"
          width={190}
          height={140}
          className="rounded-md"
        />
      </div>
      <div>
        <h3 className="text-base md:text-lg font-IranMedium">
          درباره فیلم هاوایی
        </h3>
        <p className="text-justify text-xs/6 md:text-sm/8 mt-3 text-[#ccc]">
          هاوایی فیلمی کمدی و ماجراجویی با هنرنمایی امین حیایی، امیر جعفری،
          ریحانه پارسا، یزدان فتوحی، سالار کریمخانی به نویسندگی حمید اکبری
          خامنه، کارگردانی بهمن گودرزی و تهیه کنندگی مرتضی شایسته محصول سال ۱۳۹۹
          کشور ایران است. با خرید بلیت می توانید فیلم هاوایی را به صورت آنلاین
          در نماوا تماشا فرمایید.
        </p>
        <div className="mt-7 text-xs md:text-sm font-IranMedium space-y-3">
          <p>دسته بندی : کمدی ، ماجراجویی ، پردیس نماوا ، فیلم ایرانی</p>
          <p>صدا : فارسی</p>
        </div>
      </div>
    </>
  );
}

export default Details;
