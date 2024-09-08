import KidSlider from "@/src/components/modules/kid/KidSlider/KidSlider";
import AnimsSlider from "@/src/components/templates/kid/AnimSlider/AnimsSlider";
import { getAllCollectionSlider } from "@/src/libs/service/services";
import React from "react";

async function Kids() {
  const [collections] = await Promise.all([getAllCollectionSlider("kid")]);
  return (
    <div>
      <AnimsSlider collections={JSON.parse(JSON.stringify(collections))} />
      <div className="space-y-12">
        <KidSlider title="تازه های کودک" />
        <KidSlider title="اکشن ها" />
        <KidSlider title="ماجراجویی" />
        <KidSlider title="علمی تخیلی" />
      </div>
    </div>
  );
}

export default Kids;
