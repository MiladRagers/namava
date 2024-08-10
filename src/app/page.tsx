import MovieSlider from "@/components/modules/main/MovieSlider/MovieSlider";
import HeaderSlider from "@/components/templates/index/Header/Slider";
import Slider from "@/components/templates/index/Slider/Slider";
import StarsSlider from "@/components/modules/main/StarsSlider/StarsSlider";
import Collections from "@/components/templates/index/Collections/Collections";
import { getAllSlidersMovies } from "../libs/service/services";

export default async function Home() {
  const slides = await getAllSlidersMovies();
  console.log(slides);
  

  return (
    <>
      <HeaderSlider slides={JSON.parse(JSON.stringify(slides))} />
      <Slider />
      <div className="text-white">
        <MovieSlider title="پرطرفدار ها" />
        <StarsSlider title="ستارگان" />
        <Collections title="مجموعه فیلم ها" />
      </div>
    </>
  );
}
