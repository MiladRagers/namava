import MovieSlider from "@/components/modules/main/MovieSlider/MovieSlider";
import LoginModal from "@/components/modules/modals/LoginModal";
import Comments from "@/components/templates/Comments/Comments";
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

      {/* animation comments */}
      <section className="pb-20">
        <Comments isKid />
      </section>
    </>
  );
}

export default KidSinglePage;
