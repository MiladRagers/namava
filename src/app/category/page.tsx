import CategoryCard from "@/components/templates/category/CategoryCard";
import React from "react";

function Categories() {
  return (
    <div className="text-white container pt-20 pb-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
        <CategoryCard image="iranian.jpg" title="ایرانی" link="" />
        <CategoryCard image="animation.jpg" title="انیمه و انیمیشن" link="" />
        <CategoryCard image="namava.jpg" title="دوبله نماوا" link="" />
        <CategoryCard image="pardis.jpg" title="پردیس نماوا" link="" />
        <CategoryCard image="korean.jpg" title="کره ای" link="" />
        <CategoryCard image="indian.jpg" title="هندی" link="" />
        <CategoryCard image="turkish.jpg" title="ترکی" link="" />
        <CategoryCard image="best.jpg" title="برترین ها" link="" />
        <CategoryCard image="oskar.jpg" title="اسکار" link="" />
        <CategoryCard image="treaning.jpg" title="آموزش و سرگرمی" link="" />
        <CategoryCard image="action.jpg" title="اکشن" link="" />
        <CategoryCard image="comedy.jpg" title="کمدی" link="" />
        <CategoryCard image="scare.jpg" title="ترسناک" link="" />
        <CategoryCard image="lovely.jpg" title="عاشقانه" link="" />
        <CategoryCard image="drum.jpg" title="درام" link="" />
        <CategoryCard image="science.jpg" title="علمی تخیلی" link="" />
        <CategoryCard image="crime.jpg" title="جنایی" link="" />
        <CategoryCard image="kid.jpg" title="کودک" link="" />
        <CategoryCard image="storley.jpg" title="ماجراجویی" link="" />
        <CategoryCard image="classic.jpg" title="کلاسیک" link="" />
      </div>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: "دسته بندی ها",
  };
}

export default Categories;
