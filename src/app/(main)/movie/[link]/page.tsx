import MovieSlider from "@/components/modules/main/MovieSlider/MovieSlider";
import StarsSlider from "@/components/modules/main/StarsSlider/StarsSlider";
import Comments from "@/components/templates/Comments/Comments";
import Details from "@/components/templates/Movie/Details";
import Header from "@/components/templates/index/Header/Header";
import { getMovie, getRealedMovies } from "@/src/libs/service/services";
import { TParams } from "@/src/libs/types";
import { authUser } from "@/src/utils/serverHelper";
import React from "react";

async function page({ params }: TParams) {
  const [movie, userInfo]: [movie: any, userInfo: any] = await Promise.all([
    getMovie(params.link),
    authUser(),
  ]);

  const realatedMovies = await getRealedMovies(movie.category, movie._id);

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
      <section className="text-white mt-[50px] container relative bottom-16 md:bottom-24 z-20 space-y-6">
        <Details info={movie} />
      </section>

      <section className="text-white">
        <StarsSlider
          allStars={JSON.parse(JSON.stringify(movie.actors))}
          title={`بازیگران فیلم ${movie.title}`}
        />
        {/* <StarsSlider title="عوامل فیلم هاوایی" /> */}
        <MovieSlider
          movies={JSON.parse(JSON.stringify(realatedMovies))}
          title={`بر اساس ${movie.title}`}
          link="/"
        />
      </section>

      <section className="pb-20">
        <Comments
          user={userInfo ? JSON.parse(JSON.stringify(userInfo._id)) : null}
          movieId={JSON.parse(JSON.stringify(movie._id))}
          comments={JSON.parse(JSON.stringify(movie.comments))}
        />
      </section>
    </>
  );
}

export default page;
