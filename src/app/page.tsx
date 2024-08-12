import MovieSlider from "@/components/modules/main/MovieSlider/MovieSlider";
import HeaderSlider from "@/components/templates/index/Header/Slider";
import Slider from "@/components/templates/index/Slider/Slider";
import StarsSlider from "@/components/modules/main/StarsSlider/StarsSlider";
import Collections from "@/components/templates/index/Collections/Collections";
import {
  getAllSlidersMovies,
  getCategory,
  getMovies,
  getStars,
} from "../libs/service/services";

export default async function Home() {
  const [slides, allStars, movies] = await Promise.all([
    getAllSlidersMovies(),
    getStars(),
    getMovies(),
  ]);

  return (
    <>
      <HeaderSlider slides={JSON.parse(JSON.stringify(slides))} />
      <Slider />
      <div className="text-white">
        {Object.keys(movies).map(async (category, index) => {
          const mainCategory = await getCategory(
            movies[category][0].category.parrent
          );

          return (
            <div key={category}>
              <MovieSlider
                movies={JSON.parse(JSON.stringify(movies[category]))}
                title={`${category} | ${mainCategory.title}`}
              />
            </div>
          );
        })}
        <StarsSlider allStars={allStars} title="ستارگان" />
        <Collections title="مجموعه فیلم ها" />
      </div>
    </>
  );
}
