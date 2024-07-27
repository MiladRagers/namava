import CategoryCard from "@/components/templates/category/CategoryCard";
import React from "react";

function Categories() {
  return (
    <div className="text-white container pt-20 pb-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
        <CategoryCard image="iranian.jpg" title="ایرانی" link="/category/1" />
        <CategoryCard image="animation.jpg" title="انیمه و انیمیشن" link="/category/1" />
        <CategoryCard image="namava.jpg" title="دوبله نماوا" link="/category/1" />
        <CategoryCard image="pardis.jpg" title="پردیس نماوا" link="/category/1" />
        <CategoryCard image="korean.jpg" title="کره ای" link="/category/1" />
        <CategoryCard image="indian.jpg" title="هندی" link="/category/1" />
        <CategoryCard image="turkish.jpg" title="ترکی" link="/category/1" />
        <CategoryCard image="best.jpg" title="برترین ها" link="/category/1" />
        <CategoryCard image="oskar.jpg" title="اسکار" link="/category/1" />
        <CategoryCard image="treaning.jpg" title="آموزش و سرگرمی" link="/category/1" />
        <CategoryCard image="action.jpg" title="اکشن" link="/category/1" />
        <CategoryCard image="comedy.jpg" title="کمدی" link="/category/1" />
        <CategoryCard image="scare.jpg" title="ترسناک" link="/category/1" />
        <CategoryCard image="lovely.jpg" title="عاشقانه" link="/category/1" />
        <CategoryCard image="drum.jpg" title="درام" link="/category/1" />
        <CategoryCard image="science.jpg" title="علمی تخیلی" link="/category/1" />
        <CategoryCard image="crime.jpg" title="جنایی" link="/category/1" />
        <CategoryCard image="kid.jpg" title="کودک" link="/category/1" />
        <CategoryCard image="storley.jpg" title="ماجراجویی" link="/category/1" />
        <CategoryCard image="classic.jpg" title="کلاسیک" link="/category/1" />
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
