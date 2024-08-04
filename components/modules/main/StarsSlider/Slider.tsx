"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Star from "../Star/Star";
import { Autoplay, Navigation } from "swiper/modules";

function Slider({ stars }: any) {
  return (
    <Swiper
      slidesPerView={7}
      spaceBetween={20}
      autoplay={true}
      className="mySwiper"
      modules={[Navigation, Autoplay]}
      navigation={true}
      breakpoints={{
        0: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        568: {
          slidesPerView: 4,
        },
        800: {
          slidesPerView: 6,
        },
        1260: {
          slidesPerView: 7,
        },
      }}
    >
      {stars.map((star : any) => (
        <SwiperSlide key={star._id}>
          <Star src={star.image} title={star.name} link={star.link} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
