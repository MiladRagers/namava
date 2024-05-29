"use client";
import Image from "next/image";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

function AnimsSlider() {
  return (
    <div className="py-20 container">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        // centeredSlides={true}
        autoplay={true}
        // loop={true}
        className="mySwiper h-[18rem]"
        modules={[Navigation, Autoplay]}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          568: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 4,
          },
          1260: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide>
          <Image
            src="/images/cartoon/cars.jpg"
            alt="cars"
            width={500}
            height={500}
            className="w-[267px] anim-collection h-[267px] rounded-full shadow-sm"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/cartoon/digimon.jpg"
            alt="cars"
            width={500}
            height={500}
            className="w-[267px] anim-collection h-[267px] rounded-full shadow-sm"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/cartoon/elsa.jpg"
            alt="cars"
            width={500}
            height={500}
            className="w-[267px] anim-collection h-[267px] rounded-full shadow-sm"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/cartoon/dogs.jpg"
            alt="cars"
            width={500}
            height={500}
            className="w-[267px] anim-collection h-[267px] rounded-full shadow-sm"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/cartoon/garfield.jpg"
            alt="cars"
            width={500}
            height={500}
            className="w-[267px] anim-collection h-[267px] rounded-full shadow-sm"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/cartoon/hach.jpg"
            alt="cars"
            width={500}
            height={500}
            className="w-[267px] anim-collection h-[267px] rounded-full shadow-sm"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/cartoon/vampire.jpg"
            alt="cars"
            width={500}
            height={500}
            className="w-[267px] anim-collection h-[267px] rounded-full shadow-sm"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/cartoon/toys.jpg"
            alt="cars"
            width={500}
            height={500}
            className="w-[267px] anim-collection h-[267px] rounded-full shadow-sm"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default AnimsSlider;
