import Filter from "@/components/templates/search/Filter";
import SearchBox from "@/components/templates/search/Search";
import SearchMovie from "@/icons/SearchMovie";
import React from "react";

function SearchPage() {
  return (
    <div className="flex container pt-24 pb-20 gap-x-8 min-h-screen text-white">
      <Filter />
      <div className="w-full h-96 md:mr-[350px]">
        <SearchBox />
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
