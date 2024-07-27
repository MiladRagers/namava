import MovieSlider from "@/components/modules/main/MovieSlider/MovieSlider";
import Header from "@/components/templates/index/Header/Header";
import Slider from "@/components/templates/index/Slider/Slider";
import StarsSlider from "@/components/modules/main/StarsSlider/StarsSlider";
import Collections from "@/components/templates/index/Collections/Collections";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <div className="text-white">
        <MovieSlider title="پرطرفدار ها" />
        <StarsSlider title="ستارگان" />
        <Collections title="مجموعه فیلم ها" />
      </div>
    </>
  );
}
