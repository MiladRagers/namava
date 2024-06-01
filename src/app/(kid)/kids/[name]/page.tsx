import MovieSlider from "@/components/modules/main/MovieSlider/MovieSlider";
import Header from "@/components/templates/index/Header/Header";
import Image from "next/image";
import React from "react";

function KidSinglePage() {
  return (
    <>
      <section className="relative">
        <Header
          isImage={true}
          isTitle
          isKid
          img="tomAndJery.jpg"
          mobileImage={"tomMobile.jpg"}
        />
        <div className="absolute inset-0 title-overlay"></div>
      </section>

      <section className="py-10">
        <MovieSlider title="براساس تام و جری" />
      </section>
    </>
  );
}

export default KidSinglePage;
