import MovieSlider from "@/components/modules/main/MovieSlider/MovieSlider";
import HeaderSlider from "@/components/templates/index/Header/Slider";
import Slider from "@/components/templates/index/Slider/Slider";
import StarsSlider from "@/components/modules/main/StarsSlider/StarsSlider";
import Collections from "@/components/templates/index/Collections/Collections";
import {
  getAllCollectionSlider,
  getAllSlidersMovies,
  getMovies,
  getStars,
} from "../libs/service/services";

export default async function Home() {
  const [slides, allStars, movies, collections] = await Promise.all([
    getAllSlidersMovies(),
    getStars(),
    getMovies(),
    getAllCollectionSlider(),
  ]);

  return (
    <>
      <HeaderSlider slides={JSON.parse(JSON.stringify(slides))} />
      <Slider />
      <div className="text-white">
        {Object.keys(movies).map(async (category, index) => {
          return (
            <div key={category}>
              <MovieSlider
                movies={JSON.parse(JSON.stringify(movies[category]))}
                title={`${category}`}
              />
            </div>
          );
        })}
        <StarsSlider allStars={allStars} title="ستارگان" />
        <Collections
          collections={JSON.parse(JSON.stringify(collections))}
          title="مجموعه فیلم ها"
        />
      </div>
    </>
  );
}
