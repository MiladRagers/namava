import KidSlider from "@/src/components/modules/kid/KidSlider/KidSlider";
import AnimsSlider from "@/src/components/templates/kid/AnimSlider/AnimsSlider";
import React from "react";

function Kids() {
  return (
    <div>
      <AnimsSlider />
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
