"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";
function Slider({ slides }: any) {
  return (
    <div className="px-4 md:px-0 mt-5 md:mt-10 relative bottom-[47px]">
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        // centeredSlides={true}
        autoplay={true}
        // loop={true}
        className="mySwiper md:!px-[50px]"
        modules={[Navigation, Autoplay]}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          568: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {[...slides]
          .reverse()

          .map((slide: any) => (
            <SwiperSlide key={slide._id}>
              <Link
                href={`/${slide.type === "film" ? "movie" : "series"}/${
                  slide.link
                }`}
                className="relative"
              >
                <Image
                  src={slide.deskBanner}
                  alt="slide1.jpg"
                  width={490}
                  height={186}
                  className="rounded-xl h-[150px] md:h-auto"
                />

                <div className="absolute inset-0 bg-black/25"></div>
                <h3 className="absolute z-20 text-white bottom-6 right-6">
                  {slide.title}
                </h3>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Slider;
