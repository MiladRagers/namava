"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function MainSlider() {
  return (
    <>
      <Swiper pagination={{ clickable: true }} modules={[Pagination]}>
        <SwiperSlide>
          <Image
            src={"/images/article/shogan.jpg"}
            alt="shogan.jpg"
            className="rounded-t-md"
            width={1920}
            height={1080}
          />
          <div className="px-4 py-3 space-y-4 md:space-y-2 bg-namavaBlack rounded-b-md">
            <h2 className="text-white text-sm md:text-base font-IranMedium">
              «شوگان»؛ نگاه تازه‌ به یک داستان ماندگار
            </h2>
            <div className="text-[#ebebeb] text-[10px] md:text-[13px] flex items-center gap-x-4">
              <div>
                <span>نویسنده : </span>
                <span>علی افتخاری</span>
              </div>
              <span className="w-px h-3.5 bg-[#aaa]"></span>
              <div>28 اسفند 1402</div>
              <span className="w-px h-3.5 bg-[#aaa]"></span>
              <div>
                <span>زمان مطالعه : </span>
                <span>10 دقیقه</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/article/article2.jpg"}
            alt="shogan.jpg"
            className="rounded-t-md"
            width={1920}
            height={1080}
          />
          <div className="px-4 py-3 space-y-4 md:space-y-2 bg-namavaBlack rounded-b-md">
            <h2 className="text-white text-sm md:text-base font-IranMedium">
              «شوگان»؛ نگاه تازه‌ به یک داستان ماندگار
            </h2>
            <div className="text-[#ebebeb] text-[10px] md:text-[13px] flex items-center gap-x-2 md:gap-x-4">
              <div>
                <span>نویسنده : </span>
                <span>علی افتخاری</span>
              </div>
              <span className="w-px h-3.5 bg-[#aaa]"></span>
              <div>28 اسفند 1402</div>
              <span className="w-px h-3.5 bg-[#aaa]"></span>
              <div>
                <span>زمان مطالعه : </span>
                <span>10 دقیقه</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default MainSlider;
