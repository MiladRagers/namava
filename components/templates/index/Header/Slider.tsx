"use client";
import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import Header from "./Header";
import { Swiper, SwiperSlide } from "swiper/react";

function Slider({ slides }: any) {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        modules={[EffectFade, Navigation , Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={true}
      >
        {slides.map((slide: any) => (
          <SwiperSlide key={slide._id}>
            <Header img={slide.deskBanner} isImage info={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
