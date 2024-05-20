import Movie from "@/components/modules/main/Movie/Movie";
import Filter from "@/components/templates/search/Filter";
import SearchBox from "@/components/templates/search/Search";
import SearchMovie from "@/icons/SearchMovie";
import React from "react";

function SearchPage() {
  return (
    <div className="flex container pt-24 pb-20 gap-x-8 min-h-screen text-white">
      <Filter className="hidden md:block" />
      <div className="w-full  md:mr-[350px]">
        <SearchBox />
        <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-16 pt-10">
          <Movie title="جنگل آسفالت" image="jangalAsphalt.jpg" link="" />
          <Movie title="هاوایی" image="havaie.jpg" link="" />
          <Movie title="شریک جرم" image="sharikJorm.jpg" link="" />
          <Movie title="اکازیون" image="okazion.jpg" link="" />
          <Movie
            title="شوگان"
            image="4f01db3a-f1de-4b11-9851-221f4d848d7b.jpg"
            link=""
          />
          <Movie
            title="اربابان آسمان"
            image="e5293b19-e395-4fd6-b668-8684007c8f31.jpg"
            link=""
          />
          <Movie
            title="کافه کنار جاده"
            image="471b0682-7f7e-4fcc-b70a-718933f6b36d.jpg"
            link=""
          />
          <Movie title="دینامیت" image="dinamit.jpg" link="" />
          <Movie title="هاوایی" image="havaie.jpg" link="" />
          <Movie title="شریک جرم" image="sharikJorm.jpg" link="" />
        </div>
        <div className="flex-center flex-col gap-y-4 mt-10">
          <SearchMovie />
          <p className="text-[#bab8b8] max-w-[400px] text-sm/6 text-center px-[18px]">
            عنوان فیلم، سریال یا بازیگر مورد نظر خود را جستجو کنید و یا از طریق
            فیلتر‌های موجود، فیلم و سریال مورد علاقه خود را پیدا کنید.
          </p>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: "جستجو",
  };
}

export default SearchPage;
