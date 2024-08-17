import MovieSlider from "@/components/modules/main/MovieSlider/MovieSlider";
import StarsSlider from "@/components/modules/main/StarsSlider/StarsSlider";
import Comments from "@/components/templates/Comments/Comments";
import Details from "@/components/templates/Movie/Details";
import SeasonOption from "@/components/templates/Movie/SeasonOption";
import Header from "@/components/templates/index/Header/Header";
import Session from "@/components/templates/session/Session";
import {
  getMovie,
  getRealedMovies,
  getSpecificSeasons,
} from "@/src/libs/service/services";
import { TParams } from "@/src/libs/types";
import { authUser } from "@/src/utils/serverHelper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronDown, FaYoutube } from "react-icons/fa6";

async function page({ params }: TParams) {
  const [movie, userInfo]: [movie: any, userInfo: any] = await Promise.all([
    getMovie(params.link),
    authUser(),
  ]);

  const [seasons, realatedMovies]: any = await Promise.all([
    getSpecificSeasons(movie._id),
    getRealedMovies(movie.category, movie._id),
  ]);

  console.log(seasons);

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
      {/* season of Season */}
      <section className="mt-10 container flex flex-col gap-y-4 md:flex-row md:items-center gap-x-4 relative bottom-6 md:bottom-28 z-20 space-y-6">
        <SeasonOption seasons={JSON.parse(JSON.stringify(seasons))} />
        <div className="bg-namavaBlack rounded-md flex items-center gap-x-2 py-2 px-3 text-white text-xs md:text-sm !mt-0">
          <div className="flex items-center gap-x-2">
            <FaYoutube className="text-2xl" />
            <p>تعداد فصل ها : {movie.season}</p>
          </div>
          <span className="block w-px h-4 bg-slate-500"></span>
          <div>
            <p>وضعیت : پایان فصل {movie.season}</p>
          </div>
        </div>
      </section>

      <section className="container mb-20 grid grid-cols-1 gap-3 md:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Session />
        <Session />
        <Session />
        <Session />
        <Session />
        <Session />
        <Session />
        <Session />
      </section>
      <section className="text-white mt-10 container relative bottom-16 md:bottom-12 z-10 space-y-6">
        {/* <Details /> */}
      </section>

      <section className="text-white">
        {/* <StarsSlider title="بازیگران فیلم هاوایی" /> */}
        {/* <StarsSlider title="عوامل فیلم هاوایی" /> */}
        {/* <MovieSlider title="بر اساس هاوایی" link="/" /> */}
      </section>

      <section className="pb-20">{/* <Comments /> */}</section>
    </>
  );
}

export default page;
