"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ArticleBox from "./ArticleBox";

function ArticleSlider({ articles }: any) {
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
      {articles.map((article: any) => (
        <SwiperSlide key={article._id}>
          <ArticleBox
            title={article.title}
            createdAt={new Date(article.createdAt).toLocaleDateString("fa-IR")}
            image={article.image}
            readingTime={5}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ArticleSlider;
