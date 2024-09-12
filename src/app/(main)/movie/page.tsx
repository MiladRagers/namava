import MovieSlider from "@/src/components/modules/main/MovieSlider/MovieSlider";
import Header from "@/src/components/templates/index/Header/Header";
import Slider from "@/src/components/templates/index/Slider/Slider";
import StarsSlider from "@/src/components/modules/main/StarsSlider/StarsSlider";
import Collections from "@/src/components/templates/index/Collections/Collections";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <div className="text-white">
        {/* <MovieSlider title="پرطرفدار ها" />
        <StarsSlider title="ستارگان" />
        <Collections title="مجموعه فیلم ها" /> */}
      </div>
    </>
  );
}
