import MovieSlider from "@/components/modules/main/MovieSlider/MovieSlider";
import StarsSlider from "@/components/modules/main/StarsSlider/StarsSlider";
import Comments from "@/components/templates/Comments/Comments";
import Details from "@/components/templates/Movie/Details";
import Header from "@/components/templates/index/Header/Header";
import { getMovie } from "@/src/libs/service/services";
import { TParams } from "@/src/libs/types";
import React from "react";

async function page({ params }: TParams) {
  const movie = await getMovie(params.link);
  console.log(movie);

  return (
    <>
      <section className="relative">
        <Header
          isImage={true}
          isTitle
          img={movie.deskBanner}
          mobileImage={movie.mobileBanner}
          info={JSON.parse(JSON.stringify(movie))}
        />
        <div className="absolute inset-0 title-overlay"></div>
      </section>
      <section className="text-white mt-10 container relative bottom-16 md:bottom-24 z-20 space-y-6">
        <Details info={movie} />
      </section>

      <section className="text-white">
        <StarsSlider title={`بازیگران فیلم ${movie.title}`} />
        {/* <StarsSlider title="عوامل فیلم هاوایی" /> */}
        <MovieSlider title={`بر اساس ${movie.title}`} link="/" />
      </section>

      <section className="pb-20">
        <Comments />
      </section>
    </>
  );
}

export default page;
