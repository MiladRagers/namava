import MovieSlider from "@/components/modules/main/MovieSlider/MovieSlider";
import Header from "../../components/templates/index/Header/Header";
import Slider from "../../components/templates/index/Slider/Slider";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <div className="container text-white pb-10">
        <MovieSlider />
      </div>
    </>
  );
}
