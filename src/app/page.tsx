import MovieSlider from "@/components/modules/main/MovieSlider/MovieSlider";
import HeaderSlider from "@/components/templates/index/Header/Slider";
import Slider from "@/components/templates/index/Slider/Slider";
import StarsSlider from "@/components/modules/main/StarsSlider/StarsSlider";
import Collections from "@/components/templates/index/Collections/Collections";
import { getAllSlidersMovies, getStars } from "../libs/service/services";

export default async function Home() {
  const [slides, allStars] = await Promise.all([
    getAllSlidersMovies(),
    getStars(),
  ]);

  return (
    <>
      <HeaderSlider slides={JSON.parse(JSON.stringify(slides))} />
      <Slider />
      <div className="text-white">
        <MovieSlider title="پرطرفدار ها" />
        <StarsSlider allStars={allStars} title="ستارگان" />
        <Collections title="مجموعه فیلم ها" />
      </div>
    </>
  );
}
