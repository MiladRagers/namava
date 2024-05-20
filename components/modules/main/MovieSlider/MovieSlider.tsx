"use client";
import React, { useState } from "react";
import SliderTitle from "./SiderTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { GrCircleInformation } from "react-icons/gr";
import { FaPlay } from "react-icons/fa6";
import IMBD from "@/icons/IMBD";
import Heart from "@/icons/Heart";
import MicroPhone from "@/icons/MicroPhone";

function MovieSlider({ title }: { title: string }) {
  const [movieId, setMovieId] = useState<number | null>(null);
  return (
    <div>
      <div className="container">
        <SliderTitle title={title} link="/" key={crypto.randomUUID()} />
        <div className="my-10  md:h-[21rem]">
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
            <SwiperSlide onClick={() => setMovieId(1)}>
              <div
                className={`transition-all group ${
                  movieId === 1 ? "md:pt-[20px]" : ""
                }`}
              >
                <div className="relative">
                  <Image
                    src={"/images/jangalAsphalt.jpg"}
                    alt="slide1.jpg"
                    width={490}
                    height={500}
                    className="rounded-md min-w-[102px] lg:w-[190px] lg:[279px] md:w-auto h-[160px] md:h-auto"
                  />
                  <div className="flex transition-all group-hover:opacity-100 group-hover:visible  duration-100 opacity-0 invisible  justify-end flex-col absolute text-sm inset-0 movie-overlay rounded-md">
                    <div className="pb-6 px-2 space-y-3">
                      <p className="text-[13px]">
                        سریال - <span className="font-Dana">1403</span>
                      </p>
                      <div className="flex  gap-x-1">
                        <Heart />
                        <span className="font-Dana mt-[1px]">%80</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xs mt-3 mr-3">جنگل آسفالت</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide onClick={() => setMovieId(2)}>
              <div
                className={`transition-all group ${
                  movieId === 2 ? "md:pt-[20px]" : ""
                }`}
              >
                <div className="relative">
                  <Image
                    src={"/images/sharikJorm.jpg"}
                    alt="slide1.jpg"
                    width={490}
                    height={500}
                    className="rounded-md min-w-[102px] lg:w-[190px] lg:[279px] md:w-auto h-[160px] md:h-auto"
                  />
                  <div className="flex transition-all group-hover:opacity-100 group-hover:visible  duration-100 opacity-0 invisible  justify-end flex-col absolute text-sm inset-0 movie-overlay rounded-md">
                    <div className="pb-6 px-2 space-y-3">
                      <p className="text-[13px]">
                        فیلم - <span className="font-Dana">1403</span>
                      </p>
                      <div className="flex  gap-x-1">
                        <Heart />
                        <span className="font-Dana mt-[1px]">%80</span>
                      </div>
                      <div className="flex  gap-x-1">
                        <IMBD />
                        <span className="font-Dana mt-[1px]">9.5</span>
                      </div>
                      <div className="flex  gap-x-1">
                        <MicroPhone />
                        <span className="font-Dana mt-[1px]">
                          زیرنویس انگلیسی
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xs mt-3 mr-3">شریک جرم</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide onClick={() => setMovieId(3)}>
              <div
                className={`transition-all ${
                  movieId === 3 ? "md:pt-[20px]" : ""
                }`}
              >
                <Image
                  src={"/images/havaie.jpg"}
                  alt="havaie.jpg"
                  width={500}
                  height={500}
                  className="rounded-md min-w-[102px] lg:w-[190px] lg:[279px] md:w-auto h-[160px] md:h-auto"
                />
                <h3 className="text-xs mt-3 mr-3">هاوایی</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide onClick={() => setMovieId(4)}>
              <div
                className={`transition-all ${
                  movieId === 4 ? "md:pt-[20px]" : ""
                }`}
              >
                <Image
                  src={"/images/okazion.jpg"}
                  alt="okazion.jpg"
                  width={490}
                  height={500}
                  className="rounded-md min-w-[102px] lg:w-[190px] lg:[279px] md:w-auto h-[160px] md:h-auto"
                />
                <h3 className="text-xs mt-3 mr-3">اکازیون</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide onClick={() => setMovieId(5)}>
              <div
                className={`transition-all ${
                  movieId === 5 ? "md:pt-[20px]" : ""
                }`}
              >
                <Image
                  src={"/images/davinchesse.jpg"}
                  alt="slide1.jpg"
                  width={490}
                  height={500}
                  className="rounded-md min-w-[102px] lg:w-[190px] lg:[279px] md:w-auto h-[160px] md:h-auto"
                />
                <h3 className="text-xs mt-3 mr-3">داوینچیز</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide onClick={() => setMovieId(6)}>
              <div
                className={`transition-all ${
                  movieId === 6 ? "md:pt-[20px]" : ""
                }`}
              >
                <Image
                  src={"/images/d699470b-cf86-47e8-80bb-ca7e87eb022a.jpg"}
                  alt="slide1.jpg"
                  width={490}
                  height={500}
                  className="rounded-md min-w-[102px] lg:w-[190px] lg:[279px] md:w-auto h-[160px] md:h-auto"
                />
                <h3 className="text-xs mt-3 mr-3">همزاد من</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide onClick={() => setMovieId(7)}>
              <div
                className={`transition-all ${
                  movieId === 7 ? "md:pt-[20px]" : ""
                }`}
              >
                <Image
                  src={"/images/4f01db3a-f1de-4b11-9851-221f4d848d7b.jpg"}
                  alt="slide1.jpg"
                  width={490}
                  height={500}
                  className="rounded-md min-w-[102px] lg:w-[190px] lg:[279px] md:w-auto h-[160px] md:h-auto"
                />
                <h3 className="text-xs mt-3 mr-3">شوگان</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide onClick={() => setMovieId(8)}>
              <div
                className={`transition-all ${
                  movieId === 8 ? "md:pt-[20px]" : ""
                }`}
              >
                <Image
                  src={"/images/e5293b19-e395-4fd6-b668-8684007c8f31.jpg"}
                  alt="slide1.jpg"
                  width={490}
                  height={500}
                  className="rounded-md min-w-[102px] lg:w-[190px] lg:[279px] md:w-auto h-[160px] md:h-auto"
                />
                <h3 className="text-xs mt-3 mr-3">اربابان آسمان</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide onClick={() => setMovieId(9)}>
              <div
                className={`transition-all ${
                  movieId === 9 ? "md:pt-[20px]" : ""
                }`}
              >
                <Image
                  src={"/images/471b0682-7f7e-4fcc-b70a-718933f6b36d.jpg"}
                  alt="slide1.jpg"
                  width={490}
                  height={500}
                  className="rounded-md min-w-[102px] lg:w-[190px] lg:[279px] md:w-auto h-[160px] md:h-auto"
                />
                <h3 className="text-xs mt-3 mr-3">کافه کنار جاده</h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {movieId && (
        <div className="my-10 hidden md:block">
          <div className="flex items-end justify-between flex-row-reverse relative movie-perview">
            <Image
              className="md:h-[539px] aspect-video  w-[75%]  static"
              src="/images/films/havaie.jpg"
              width={1519}
              height={534}
              alt="havaie"
            />
            <div className="w-[25%]  z-20 right-10 md:h-[539px] rigth-side">
              <div className="relative top-[23%] right-10">
                <span className="block text-white text-center md:text-right text-base md:text-[22px]">
                  اکازیون
                </span>
                <div className="hidden md:flex items-center gap-x-5 font-Dana text-white text-sm mt-5">
                  <span className="bg-orange-400 text-sm rounded-full px-1.5">
                    15+
                  </span>
                  <span>2024</span>
                  <span>111 دقیقه</span>
                  <div className="flex items-center gap-x-1">
                    <IMBD />
                    <span className="mt-0.5"> 7.3</span>
                  </div>
                </div>
                <p className="hidden md:block static w-[614px]  text-white text-xs leading-6 mt-5">
                  قصه اکازیون که در دهه ۷۰ می گذرد، داستان رحیم است که قصد دارد
                  برای ادامه تحصیل به کانادا برود اما متوجه می شود ممنوع الخروج
                  شده و این اتفاق زیر سر دایی محسن است، پس باید دنبال راه چاره
                  ای باشد…
                </p>
                <p className="my-3 text-white text-xs/6  text-center md:text-right">
                  اکازیون، چهارشنبه ها ساعت ۸ صبح به صورت اختصاصی در نماوا
                </p>
                <div className="flex items-center justify-center md:justify-start gap-x-4 mt-4">
                  <button className="bg-white text-namavaBlack hover:bg-namava hover:text-white flex items-center gap-x-2 justify-between text-xs py-3 px-5 rounded-xl">
                    <FaPlay />
                    خرید اشتراک
                  </button>
                  <button className="hidden md:flex items-center  text-sm gap-x-2 text-white hover:text-namava">
                    <GrCircleInformation className="text-3xl" />
                    اطلاعات بیشتر
                  </button>
                </div>
                <p className="text-xs hidden md:block text-[#ccc] mt-5">
                  ستارگان:هادی کاظمی ، ایمان صفا ، غلامرضا نیکخواه
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieSlider;
