"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import Image from "next/image";
function Slider() {
  return (
    <div className="px-4 md:px-0 mt-5 md:mt-10 relative bottom-[47px]">
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        // centeredSlides={true}
        autoplay={true}
        // loop={true}
        className="mySwiper md:!px-[50px]"
        modules={[Navigation , Autoplay]}
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
        <SwiperSlide>
          <Image
            src={"/images/slide1.jpg"}
            alt="slide1.jpg"
            width={490}
            height={186}
            className="rounded-xl h-[150px] md:h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/slide2.jpg"}
            alt="slide2.jpg"
            width={490}
            height={186}
            className="rounded-xl h-[150px] md:h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/slide3.jpg"}
            alt="slide3.jpg"
            width={490}
            height={186}
            className="rounded-xl h-[150px] md:h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/slide4.jpg"}
            alt="slide4.jpg"
            width={490}
            className="rounded-xl h-[150px] md:h-auto"
            height={186}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/slide5.jpg"}
            alt="slide5.jpg"
            width={490}
            height={186}
            className="rounded-xl h-[150px] md:h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/slide6.jpg"}
            alt="slide6.jpg"
            width={490}
            height={186}
            className="rounded-xl h-[150px] md:h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/slide7.jpg"}
            alt="slide7.jpg"
            width={490}
            height={186}
            className="rounded-xl h-[150px] md:h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/slide8.jpg"}
            alt="slide8.jpg"
            width={490}
            height={186}
            className="rounded-xl h-[150px] md:h-auto"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
