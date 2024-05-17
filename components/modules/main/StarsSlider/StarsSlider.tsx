"use client";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Star from "../Star/Star";

interface StarsSlider {
  title: string;
}
function StarsSlider({ title }: StarsSlider) {
  return (
    <div className="container">
      <h3 className="font-IranMedium text-base md:text-lg">{title}</h3>
      <div className="my-10">
        <Swiper
          slidesPerView={3}
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
          <SwiperSlide>
            <Star src="/images/actors/ac1.jpg" title="کیلین مورفی" link="" />
          </SwiperSlide>
          <SwiperSlide>
            <Star src="/images/actors/a2.jpg" title="پل جیاماتی" link="" />
          </SwiperSlide>
          <SwiperSlide>
            <Star src="/images/actors/a6.jpg" title="آنا د آرماس" link="" />
          </SwiperSlide>
          <SwiperSlide>
            <Star src="/images/actors/ac14.jpg" title="کریس ایوانز" link="" />
          </SwiperSlide>
          <SwiperSlide>
            <Star src="/images/actors/ac16.jpg" title="رابرت داونی جونیور" link="" />
          </SwiperSlide>
          <SwiperSlide>
            <Star src="/images/actors/a5.jpg" title="مارگو رابی" link="" />
          </SwiperSlide>
          <SwiperSlide>
            <Star src="/images/actors/ac3.jpg" title="کیانو ریوز" link="" />
          </SwiperSlide>
          <SwiperSlide>
            <Star src="/images/actors/ac11.jpg" title="تام هالند" link="" />
          </SwiperSlide>
          <SwiperSlide>
            <Star src="/images/actors/a2.jpg" title="پل جیاماتی" link="" />
          </SwiperSlide>
          <SwiperSlide>
            <Star src="/images/actors/ac8.jpg" title="کیت وینسلت" link="" />
          </SwiperSlide>
          <SwiperSlide>
            <Star src="/images/actors/ac20.jpg" title="اسکارلت جوهانسن" link="" />
          </SwiperSlide>
          <SwiperSlide>
            <Star src="/images/actors/ac12.jpg" title="دوئین جانسون" link="" />
          </SwiperSlide>
          <SwiperSlide>
            <Star src="/images/actors/ac13.jpg" title="جیک جیلنهال" link="" />
          </SwiperSlide>
          <SwiperSlide>
            <Star src="/images/actors/ac19.jpg" title="مارک رافلو" link="" />
          </SwiperSlide>
          <SwiperSlide>
            <Star src="/images/actors/ac18.jpg" title="گوینت پالترو" link="" />
          </SwiperSlide>
          <SwiperSlide>
            <Star src="/images/actors/ac7.jpg" title=" ویل اسمیت" link="" />
          </SwiperSlide>
          <SwiperSlide>
            <Star src="/images/actors/ac9.jpg" title="بندیکت کامبربچ" link="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default StarsSlider;
