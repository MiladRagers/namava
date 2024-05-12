"use client";
import React from "react";
import SliderTitle from "./SiderTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
function MovieSlider() {
  return (
    <div>
      <SliderTitle title="ویژه" link="/" key={crypto.randomUUID()} />
      <div className="my-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          // centeredSlides={true}
          autoplay={true}
          // loop={true}
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
            <div>
              <Image
                src={"/images/jangalAsphalt.jpg"}
                alt="slide1.jpg"
                width={490}
                height={500}
                className="rounded-md min-w-[102px] md:w-auto h-[160px] md:h-auto"
              />
              <h3 className="text-xs mt-3 mr-3">جنگل آسفالت</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src={"/images/sharikJorm.jpg"}
                alt="slide1.jpg"
                width={490}
                height={500}
                className="rounded-md min-w-[102px] md:w-auto h-[160px] md:h-auto"
              />
              <h3 className="text-xs mt-3 mr-3">شریک جرم</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src={"/images/havaie.jpg"}
                alt="havaie.jpg"
                width={500}
                height={500}
                className="rounded-md min-w-[102px] md:w-auto h-[160px] md:h-auto"
              />
              <h3 className="text-xs mt-3 mr-3">هاوایی</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src={"/images/okazion.jpg"}
                alt="okazion.jpg"
                width={490}
                height={500}
                className="rounded-md min-w-[102px] md:w-auto h-[160px] md:h-auto"
              />
              <h3 className="text-xs mt-3 mr-3">اکازیون</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src={"/images/davinchesse.jpg"}
                alt="slide1.jpg"
                width={490}
                height={500}
                className="rounded-md min-w-[102px] md:w-auto h-[160px] md:h-auto"
              />
              <h3 className="text-xs mt-3 mr-3">داوینچیز</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src={"/images/d699470b-cf86-47e8-80bb-ca7e87eb022a.jpg"}
                alt="slide1.jpg"
                width={490}
                height={500}
                className="rounded-md min-w-[102px] md:w-auto h-[160px] md:h-auto"
              />
              <h3 className="text-xs mt-3 mr-3">همزاد من</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src={"/images/4f01db3a-f1de-4b11-9851-221f4d848d7b.jpg"}
                alt="slide1.jpg"
                width={490}
                height={500}
                className="rounded-md min-w-[102px] md:w-auto h-[160px] md:h-auto"
              />
              <h3 className="text-xs mt-3 mr-3">شوگان</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src={"/images/e5293b19-e395-4fd6-b668-8684007c8f31.jpg"}
                alt="slide1.jpg"
                width={490}
                height={500}
                className="rounded-md min-w-[102px] md:w-auto h-[160px] md:h-auto"
              />
              <h3 className="text-xs mt-3 mr-3">اربابان آسمان</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                src={"/images/471b0682-7f7e-4fcc-b70a-718933f6b36d.jpg"}
                alt="slide1.jpg"
                width={490}
                height={500}
                className="rounded-md min-w-[102px] md:w-auto h-[160px] md:h-auto"
              />
              <h3 className="text-xs mt-3 mr-3">کافه کنار جاده</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default MovieSlider;
