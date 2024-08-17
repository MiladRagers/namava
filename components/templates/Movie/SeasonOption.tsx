"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

function SeasonOption({ seasons }: any) {
  const [activeSeason, setActiveSeason] = useState(1);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const { push } = useRouter();

  const chnageSeasonHandler = (seasonNumber: number) => {
    setActiveSeason(seasonNumber);
    params.set("season", String(seasonNumber));
    push(`${pathname}?${params}`);
  };
  return (
    <div className="bg-white relative group text-black flex items-center justify-center  rounded-md py-2 px-2 gap-x-4 w-[100px]">
      <p className="font-Dana text-sm md:text-base">فصل {activeSeason}</p>
      <FaChevronDown className="text-base md:text-lg" />

      <div className="absolute flex py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all delay-75 justify-center bg-white top-12 right-0 z-20 w-[150px] rounded-md">
        <ul className="flex flex-col gap-y-4 justify-between cursor-pointer hover:child:text-namava">
          {seasons.map((season: any, index: number) => (
            <li
              className={
                activeSeason === season.seasonNumber ? "text-namava" : ""
              }
              onClick={() => chnageSeasonHandler(season.seasonNumber)}
            >
              فصل {season.seasonNumber}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SeasonOption;
