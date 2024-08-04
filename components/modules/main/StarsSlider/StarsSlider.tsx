import React from "react";
import Slider from "./Slider";
import { getStars } from "@/src/libs/service/services";

interface StarsSlider {
  title: string;
}
async function StarsSlider({ title }: StarsSlider) {
  const allStars = await getStars();
  return (
    <div className="container">
      <h3 className="font-IranMedium text-base md:text-lg">{title}</h3>
      <div className="my-10">
        <Slider stars={JSON.parse(JSON.stringify(allStars))} />
      </div>
    </div>
  );
}

export default StarsSlider;
