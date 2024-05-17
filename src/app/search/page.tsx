import Filter from "@/components/templates/search/Filter";
import Search from "@/icons/Search";
import SearchMovie from "@/icons/SearchMovie";
import React from "react";


function page() {
  return (
    <div className="flex container pt-24 pb-20 gap-x-8 min-h-screen text-white">
      <Filter />
      <div className="w-full h-96 md:mr-[350px]">
        <div className="bg-[#37383e] w-full py-4 px-6 rounded-xl flex items-center gap-x-2">
          <Search className="!w-[30px] !h-[30px]" />
          <input
            type="text"
            placeholder="فیلم ، سریال ، بازیگر و ژانر"
            className="bg-transparent outline-none text-[#cccc] w-full"
          />
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

export default page;
