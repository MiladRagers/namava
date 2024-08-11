import Movie from "@/components/modules/main/Movie/Movie";
import { getStar, getStarMovies } from "@/src/libs/service/services";
import { TParams } from "@/src/libs/types";
import Image from "next/image";
import React from "react";

async function page({ params }: TParams) {
  const { href } = params;

  const { image, name, bio, _id } = await getStar(href as string);
  const actorMovies: any = await getStarMovies(_id);

  return (
    <div className="container text-white py-20">
      <div className="flex flex-col items-center md:items-start md:flex-row  gap-x-5 pb-16">
        <div className="shrink-0">
          <Image
            src={image}
            alt="kris"
            width={180}
            height={180}
            className="w-[180px] h-[180px] rounded-full"
          />
        </div>
        <div>
          <h1 className="text-lg md:text-2xl mt-5 md:m-0 text-center md:text-right ">
            بیوگرافی {name}
          </h1>
          <p className="text-xs/[25px] md:text-sm/[25px] mt-5 text-justify">
            {bio}
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-base md:text-lg font-IranMedium">
          فیلم های {name}
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-x-4 gap-y-16 pt-10">
          {actorMovies.map((movie: any) => (
            <Movie title={movie.title} image={movie.mainImage} isLink link={movie.link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
