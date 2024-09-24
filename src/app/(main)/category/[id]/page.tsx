import MiniSpinner from "@/src/components/modules/spinner/MiniSpinner";
import HeaderSlider from "@/src/components/templates/index/Header/Slider";
import MainSlider from "@/src/components/templates/index/mainSlider/MainSlider";
import Slider from "@/src/components/templates/index/Slider/Slider";
import {
  checkUserProfile,
  checkUserSubscription,
  getMoviesByCategory,
} from "@/src/libs/service/services";
import { TParams } from "@/src/libs/types";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";

export default async function Home({ params }: TParams) {
  const [slides, subscription, profile]: any = await Promise.all([
    getMoviesByCategory(params.id as string),
    checkUserSubscription(),
    checkUserProfile(),
  ]);

  if (slides.length === 0) {
    notFound();
  }

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
      <Suspense fallback={<MiniSpinner />}>
        <MainSlider categoryId={params.id as string} />
      </Suspense>
    </>
  );
}
