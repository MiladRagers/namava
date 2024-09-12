import MovieSlider from "@/src/components/modules/main/MovieSlider/MovieSlider";
import AnimsSlider from "@/src/components/templates/kid/AnimSlider/AnimsSlider";
import { getAllCollectionSlider, getMovies } from "@/src/libs/service/services";
import React from "react";

async function Kids() {
  const [collections, movies] = await Promise.all([
    getAllCollectionSlider("kid"),
    getMovies("kid"),
  ]);

  return (
    <div>
      <AnimsSlider collections={JSON.parse(JSON.stringify(collections))} />
      <div className="space-y-12">
        {Object.keys(movies).map(async (category, index) => {
          return (
            <div key={category}>
              <MovieSlider
                movies={JSON.parse(JSON.stringify(movies[category]))}
                userBookmarks={[]}
                title={`${category}`}
                user={[]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Kids;
