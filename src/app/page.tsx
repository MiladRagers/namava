import HeaderSlider from "@/src/components/templates/index/Header/Slider";
import Slider from "@/src/components/templates/index/Slider/Slider";
import { Suspense } from "react";
import MainSlider from "../components/templates/index/mainSlider/MainSlider";
import Loading from "../icons/Loading";
import {
  checkUserProfile,
  checkUserSubscription,
  getAllSlidersMovies,
} from "../libs/service/services";
import { redirect } from "next/navigation";

export default async function Home() {
  const [slides, subscription, profile]: any = await Promise.all([
    getAllSlidersMovies(),
    checkUserSubscription(),
    checkUserProfile(),
  ]);

  if (profile.type === "kid") {
    redirect("/kids");
  }

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
