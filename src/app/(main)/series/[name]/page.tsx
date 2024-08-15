import MovieSlider from "@/components/modules/main/MovieSlider/MovieSlider";
import StarsSlider from "@/components/modules/main/StarsSlider/StarsSlider";
import Comments from "@/components/templates/Comments/Comments";
import Details from "@/components/templates/Movie/Details";
import Header from "@/components/templates/index/Header/Header";
import Session from "@/components/templates/session/Session";
import Image from "next/image";
import React from "react";
import { FaChevronDown, FaYoutube } from "react-icons/fa6";

function page() {
  return (
    <>
      <section className="relative">
        {/* <Header
          isImage={true}
          isTitle
          img="/images/ben10.jpg"
          mobileImage="/images/ben10Mobile.jpg"
        /> */}
        <div className="absolute inset-0 title-overlay"></div>
      </section>
      {/* season of Season */}
      <section className="mt-10 container flex flex-col gap-y-4 md:flex-row md:items-center gap-x-4 relative bottom-6 md:bottom-28 z-20 space-y-6">
        <div className="bg-white relative group text-black flex items-center justify-center  rounded-md py-2 px-2 gap-x-4 w-[100px]">
          <p className="font-Dana text-sm md:text-base">فصل 1</p>
          <FaChevronDown className="text-base md:text-lg" />

          <div className="absolute flex py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all delay-75 justify-center bg-white top-12 right-0 z-20 w-[150px] rounded-md">
            <ul className="flex flex-col gap-y-4 justify-between cursor-pointer hover:child:text-namava">
              <li>فصل 1</li>
              <li>فصل 2</li>
              <li>فصل 3</li>
              <li>فصل 4</li>
            </ul>
          </div>
        </div>
        <div className="bg-namavaBlack rounded-md flex items-center gap-x-2 py-2 px-3 text-white text-xs md:text-sm !mt-0">
          <div className="flex items-center gap-x-2">
            <FaYoutube className="text-2xl" />
            <p>تعداد فصل ها : 4</p>
          </div>
          <span className="block w-px h-4 bg-slate-500"></span>
          <div>
            <p>وضعیت : پایان فصل 4</p>
          </div>
        </div>
      </section>

      <section className="container mb-20 grid grid-cols-1 gap-3 md:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Session/>
        <Session/>
        <Session/>
        <Session/>
        <Session/>
        <Session/>
        <Session/>
        <Session/>
      </section>
      <section className="text-white mt-10 container relative bottom-16 md:bottom-12 z-10 space-y-6">
        {/* <Details /> */}
      </section>

      <section className="text-white">
        {/* <StarsSlider title="بازیگران فیلم هاوایی" /> */}
        {/* <StarsSlider title="عوامل فیلم هاوایی" /> */}
        {/* <MovieSlider title="بر اساس هاوایی" link="/" /> */}
      </section>

      <section className="pb-20">
        {/* <Comments /> */}
      </section>
    </>
  );
}

export default page;
