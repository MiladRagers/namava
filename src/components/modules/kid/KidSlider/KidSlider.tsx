"use client"
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderTitle from "./../../main/MovieSlider/SiderTitle";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Heart from "@/src/icons/Heart";
function KidSlider({ title }: { title: string }) {
  return (
    <div>
      <div className="container">
        <SliderTitle title={title}   key={crypto.randomUUID()} />
        <div className="pt-5 md:h-[21rem]">
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
              <div
                className={`transition-all group`}
              >
                <div className="relative text-white">
                  <Image
                    src={"/images/anim/jery.jpg"}
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
                <h3 className="text-xs mt-3 mr-3">تام و جری</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`transition-all group`}
              >
                <div className="relative text-white">
                  <Image
                    src={"/images/anim/pinkLeo.jpg"}
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
                <h3 className="text-xs mt-3 mr-3">تام و جری</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`transition-all group`}
              >
                <div className="relative text-white">
                  <Image
                    src={"/images/anim/increadibles.jpg"}
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
                <h3 className="text-xs mt-3 mr-3">تام و جری</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`transition-all group`}
              >
                <div className="relative text-white">
                  <Image
                    src={"/images/anim/hach.jpg"}
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
                <h3 className="text-xs mt-3 mr-3">تام و جری</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`transition-all group`}
              >
                <div className="relative text-white">
                  <Image
                    src={"/images/anim/fish.jpg"}
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
                <h3 className="text-xs mt-3 mr-3">تام و جری</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`transition-all group`}
              >
                <div className="relative text-white">
                  <Image
                    src={"/images/anim/car4.jpg"}
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
                <h3 className="text-xs mt-3 mr-3">تام و جری</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`transition-all group`}
              >
                <div className="relative text-white">
                  <Image
                    src={"/images/anim/car3.jpg"}
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
                <h3 className="text-xs mt-3 mr-3">تام و جری</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`transition-all group`}
              >
                <div className="relative text-white">
                  <Image
                    src={"/images/anim/car.jpg"}
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
                <h3 className="text-xs mt-3 mr-3">تام و جری</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`transition-all group`}
              >
                <div className="relative text-white">
                  <Image
                    src={"/images/anim/bobPro.jpg"}
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
                <h3 className="text-xs mt-3 mr-3">تام و جری</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`transition-all group`}
              >
                <div className="relative text-white">
                  <Image
                    src={"/images/anim/bob.jpg"}
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
                <h3 className="text-xs mt-3 mr-3">تام و جری</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`transition-all group`}
              >
                <div className="relative text-white">
                  <Image
                    src={"/images/anim/angrybeard.jpg"}
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
                <h3 className="text-xs mt-3 mr-3">تام و جری</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`transition-all group`}
              >
                <div className="relative text-white">
                  <Image
                    src={"/images/anim/angry.jpg"}
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
                <h3 className="text-xs mt-3 mr-3">تام و جری</h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default KidSlider;
