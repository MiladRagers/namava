"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { BiSolidChevronDown } from "react-icons/bi";
import FilterItem from "./FilterItem";
import { genres, voiceType } from "../../../public/db";
import { country } from "../../../public/db";

function Filter() {
  const [curOpen, setCurOpen] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const handleTypeChange = (slug: string, e: any) => {
    if (e.target.checked) {
      params.append("type", slug);
    } else {
      params.delete("type", slug);
    }

    router.replace(`${pathname}?${params}`);
  };

  return (
    <div className="w-[300px] hidden md:block fixed  bg-[#37383e] rounded-xl  py-4 px-6">
      <section className="flex items-center justify-between">
        <span className="text-white">فیلترها</span>
        <span
          className="text-namava text-sm"
          onClick={() => router.replace(pathname)}
        >
          حذف همه
        </span>
      </section>
      <section className="flex items-center gap-x-6  mt-3 border-b pb-3 border-b-gray-500">
        <div className="flex items-center gap-x-2">
          <input
            id="film"
            type="checkbox"
            className="film-checkbox"
            checked={searchParams.getAll("type").includes("film")}
            onChange={(e) => handleTypeChange("film", e)}
          />
          <label htmlFor="film">فیلم</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            id="series"
            type="checkbox"
            className="series-checkbox"
            checked={searchParams.getAll("type").includes("series")}
            onChange={(e) => handleTypeChange("series", e)}
          />
          <label htmlFor="series">سریال</label>
        </div>
      </section>
      {/* start filtering section */}
      <section className="divide-y-[1px] divide-gray-500 child:cursor-pointer">
        <FilterItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          items={genres}
          title="ژانر ها"
          slug="genre"
        />
        <FilterItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          items={country}
          title="کشور سازنده"
          slug="country"
        />
        <FilterItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          items={voiceType}
          title="صدا و زیر نویس"
          slug="voice"
        />
        <div className="flex items-center justify-between py-4">
          <span>سال ساخت</span>
          <span>
            <BiSolidChevronDown className="text-xl font-bold" />
          </span>
        </div>
        <div className="flex items-center justify-between py-4">
          <span>مرتب سازی</span>
          <span>
            <BiSolidChevronDown className="text-xl font-bold" />
          </span>
        </div>
      </section>
    </div>
  );
}

export default Filter;
