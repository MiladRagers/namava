"use client";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Collection from "./Collection";

interface Collections {
  title: string;
}
function Collections({ title }: Collections) {
  return (
    <div className="container">
      <h3 className="font-IranMedium text-base md:text-lg">{title}</h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        autoplay={true}
        className="mySwiper my-5"
        modules={[Navigation, Autoplay]}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          568: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <Collection image="/images/godzila.jpg" title="گودزیلا" link="" />
        </SwiperSlide>
        <SwiperSlide>
          <Collection image="/images/impossible.jpg" title="گودزیلا" link="" />
        </SwiperSlide>
        <SwiperSlide>
          <Collection image="/images/marvel.jpg" title="مارول" link="" />
        </SwiperSlide>
        <SwiperSlide>
          <Collection image="/images/batman.jpg" title="بتمن" link="" />
        </SwiperSlide>
        <SwiperSlide>
          <Collection
            image="/images/spiderman.jpg"
            title="مرد عنکبوتی"
            link=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Collection image="/images/rambo.jpg" title="رامبو" link="" />
        </SwiperSlide>
        <SwiperSlide>
          <Collection image="/images/terminator.jpg" title="نابودگر" link="" />
        </SwiperSlide>
        <SwiperSlide>
          <Collection image="/images/matrix.jpg" title="ماتریکس" link="" />
        </SwiperSlide>
        <SwiperSlide>
          <Collection image="/images/starWar.jpg" title="جنگ ستارگان" link="" />
        </SwiperSlide>
        <SwiperSlide>
          <Collection
            image="/images/mortalCombat.jpg"
            title="مورتال کمبت"
            link=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Collection image="/images/fast.jpg" title="سریع و خشن" link="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Collections;
