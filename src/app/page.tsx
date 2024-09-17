import HeaderSlider from "@/src/components/templates/index/Header/Slider";
import Slider from "@/src/components/templates/index/Slider/Slider";
import { Suspense } from "react";
import MainSlider from "../components/templates/index/mainSlider/MainSlider";
import Loading from "../icons/Loading";
import {
  checkUserSubscription,
  getAllSlidersMovies
} from "../libs/service/services";
import { authUser } from "../utils/serverHelper";

export default async function Home() {
  const [slides, subscription]: any = await Promise.all([
    getAllSlidersMovies(),
    checkUserSubscription(),
    authUser(),
  ]);

  return (
    <>
      <HeaderSlider
        subscription={JSON.parse(JSON.stringify(subscription))}
        slides={JSON.parse(JSON.stringify(slides))}
      />
      <Slider slides={JSON.parse(JSON.stringify(slides))} />
      <Suspense fallback={<Loading />}>
        <MainSlider />
      </Suspense>
    </>
  );
}
