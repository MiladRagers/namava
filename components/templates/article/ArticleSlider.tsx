"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ArticleBox from "./ArticleBox";

function ArticleSlider() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      autoplay={true}
      loop={true}
      className="mySwiper"
      navigation={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        568: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1260: {
          slidesPerView: 4,
        },
      }}
    >
      <SwiperSlide>
        <ArticleBox
          title="«شوگان»؛ نگاه تازه‌ به یک داستان ماندگار"
          createdAt="25 تیر 1403"
          image="ar1.jpg"
          readingTime={5}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ArticleBox
          title="«شوگان»؛ نگاه تازه‌ به یک داستان ماندگار"
          createdAt="25 تیر 1403"
          image="ar2.jpg"
          readingTime={5}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ArticleBox
          title="«شوگان»؛ نگاه تازه‌ به یک داستان ماندگار"
          createdAt="25 تیر 1403"
          image="ar3.jpg"
          readingTime={5}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ArticleBox
          title="«شوگان»؛ نگاه تازه‌ به یک داستان ماندگار"
          createdAt="25 تیر 1403"
          image="ar4.jpg"
          readingTime={5}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ArticleBox
          title="«شوگان»؛ نگاه تازه‌ به یک داستان ماندگار"
          createdAt="25 تیر 1403"
          image="ar5.jpg"
          readingTime={5}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default ArticleSlider;
