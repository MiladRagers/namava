"use client";
import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Navigation } from "swiper/modules";
import Header from "./Header";
import { Swiper, SwiperSlide } from "swiper/react";

function Slider({ slides }: any) {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        modules={[EffectFade, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide: any) => (
          <SwiperSlide>
            <Header img={slide.deskBanner} isImage info={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
