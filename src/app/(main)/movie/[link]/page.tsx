import MovieSlider from "@/components/modules/main/MovieSlider/MovieSlider";
import StarsSlider from "@/components/modules/main/StarsSlider/StarsSlider";
import Comments from "@/components/templates/Comments/Comments";
import Details from "@/components/templates/Movie/Details";
import Header from "@/components/templates/index/Header/Header";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <section className="relative">
        <Header isImage={true} isTitle img="havieee.jpg" mobileImage="okamobile.jpg" />
        <div className="absolute inset-0 title-overlay"></div>
      </section>
      <section className="text-white mt-10 container relative bottom-16 md:bottom-24 z-20 space-y-6">
        <Details />
      </section>

      <section className="text-white">
        <StarsSlider title="بازیگران فیلم هاوایی" />
        <StarsSlider title="عوامل فیلم هاوایی" />
        <MovieSlider title="بر اساس هاوایی" link="/" />
      </section>

      <section className="pb-20">
        <Comments />
      </section>
    </>
  );
}

export default page;
