"use client";
import Apple from "@/icons/Apple";
import Bazar from "@/icons/Bazar";
import Google from "@/icons/Google";
import Instagram from "@/icons/Instagram";
import Logo from "@/icons/Logo";
import Telegram from "@/icons/Telegram";
import Tiwter from "@/icons/Tiwter";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaChevronUp } from "react-icons/fa6";

function Footer() {
  const pathname = usePathname();
  if (pathname.includes("/login") || pathname.includes("/register") || pathname.includes("forgot")) {
    return null;
  }

  return (
    <>
      <div className="text-[#ccc]  sticky bottom-0 z-30 my-auto h-[40px] hidden md:flex-center bg-namavaBlack">
        <ul className="text-xs flex font-IranMedium  items-center justify-around flex-grow">
          <li className="hover:text-white">
            <Link href={""}>اپلیکیشن ها</Link>
          </li>
          <li className="hover:text-white">
            <Link href={""}>فرصت های شغلی</Link>
          </li>
          <li className="hover:text-white">
            <Link href={""}>تبلیغات در نماوا</Link>
          </li>
          <li className="hover:text-white">
            <Link href={""}>خرید اشتراک</Link>
          </li>
          <li className="hover:text-white">
            <Link href={""}>کارت هدیه</Link>
          </li>
          <li className="hover:text-white">
            <Link href={""}>سوالات متداول</Link>
          </li>
          <li className="hover:text-white">
            <Link href={""}>درباره نماوا</Link>
          </li>
          <li className="hover:text-white">
            <Link href={""} className="flex items-center gap-x-2">
              سایر لینک ها
              <FaChevronUp className="font-bold text-white" />
            </Link>
          </li>
        </ul>
      </div>
      <footer className="md:px-[160px] pb-4 bg-[#1A1A1A]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="py-4 px-2.5 md:px-6  bg-namavaBlack rounded-md mt-5 w-full flex flex-wrap gap-y-4 items-center justify-between">
              <div className="flex items-center gap-x-4">
                <div className="w-[74px] h-[74px] flex-center namava-logo">
                  <Logo className="lg:w-[50px] lg:h-[30px]" />
                </div>
                <span className="text-white font-IranMedium text-sm md:text-base">
                  دانلود اپلیکیشن
                </span>
              </div>
              <div className="flex items-center  gap-x-3 md:gap-x-4">
                <div className="bg-[#37383e]  p-1.5 rounded-md flex items-center gap-x-1.5 md:gap-x-2 text-white">
                  <Bazar />
                  <div className="flex flex-col">
                    <span className="text-[9px] text-gray-100">دریافت</span>
                    <span className="text-[12px] font-IranMedium line-clamp-1">
                      بازار
                    </span>
                  </div>
                </div>
                <div className="bg-[#37383e]  p-1.5 rounded-md flex items-center gap-x-1.5 md:gap-x-2 text-white">
                  <Apple />
                  <div className="flex flex-col">
                    <span className="text-[9px] text-gray-100">دریافت از</span>
                    <span className="text-[12px] font-IranMedium line-clamp-1">
                      سیب اپ
                    </span>
                  </div>
                </div>
                <div className="bg-[#37383e]  p-1.5 rounded-md flex items-center gap-x-1.5 md:gap-x-2 text-white">
                  <Google />
                  <div className="flex flex-col">
                    <span className="text-[9px] text-gray-100">دریافت از</span>
                    <span className="text-[12px] font-IranMedium line-clamp-1">
                      گوگل پلی
                    </span>
                  </div>
                </div>
                <span className="font-IranMedium hidden md:hidden text-[#6eb8ff] text-sm">
                  بیشتر
                </span>
              </div>
            </div>
          </div>
          <div className="py-6 flex flex-wrap gap-y-6 items-center justify-between border-b border-b-[#37383e]">
            <section>
              <h4 className="text-white font-IranMedium text-xs">
                درباره نماوا
              </h4>
              <p className="text-[#aaaaaa] text-xs/[26px] mt-2 max-w-[812px]">
                سرزمین شاتل در سایت نماوا امکان پخش آنلاین فیلم‌ها و سریال‌های
                محبوبتان را در اختیار شما کاربران گرامی قرار می‌دهد. مشاهده
                پیش‌نمایش فیلم و سریال‌ها، جستجوی سریع مجموعه انتخابی، دانلود
                درون‌برنامه‌ای، حساب چند کاربره، تنظیمات کودک، پخش زنده
                رویدادهای ورزشی و فرهنگی و آرشیوی کامل از پرطرفدارترین فیلم‌ها و
                سریال‌ها از جمله قابلیت‌های نماوا، به‌روزترین سایت تماشای فیلم و
                سریال است. نماوا این امکان را برای کاربران خود فراهم کرده است تا
                در سریع‌ترین زمان ممکن و تنها با چند کلیک، سریال‌ها و فیلم‌های
                مورد علاقه خود را به صورت آنلاین و آفلاین مشاهده کنند.
              </p>
            </section>
            <section className="flex items-center flex-row-reverse gap-x-6">
              <div className="bg-[#ccc] w-[100px] h-[100px] rounded-md flex-center">
                <Image
                  src={"/images/81.png"}
                  alt="enamad.png"
                  width={80}
                  height={80}
                />
              </div>
              <div className="bg-[#ccc] w-[100px] h-[100px] rounded-md flex-center">
                <Image
                  src={"/images/enamad.png"}
                  alt="enamad.png"
                  width={80}
                  height={80}
                />
              </div>
            </section>
          </div>
          <div className="py-4 flex items-center justify-between flex-col md:flex-row  gap-y-4 md:gap-y-0">
            <p className="text-[10px]/[22px] text-[#aaa]">
              خدمات ارائه شده در نماوا، دارای مجوزهای لازم از مراجع مربوطه است و
              هر گونه بهره‌برداری و سوءاستفاده از محتوای نماوا، پیگرد قانونی
              دارد.
            </p>
            <div className="flex items-center gap-x-7">
              <Link href={"https://twitter.com/Namava_ir"}>
                <Tiwter className="hover:fill-namava transition-all" />
              </Link>
              <Link href={"https://instagram.com/namava_ir"}>
                <Instagram className="hover:fill-namava transition-all" />
              </Link>
              <Link href={"https://telegram.me/namava_ir"}>
                <Telegram className="hover:fill-namava transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
