"use client";
import Heart from "@/icons/Heart";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface Movie {
  image: string;
  title: string;
  link: string;
  isLink?: boolean;
  type: string;
  showTime: string;
}
function Movie({ image, title, link, isLink, type, showTime }: Movie) {
  return (
    <>
      <div className={`transition-all hidden lg:block group cursor-pointer `}>
        <div className="relative">
          <Image
            src={image}
            alt="slide1.jpg"
            width={490}
            height={500}
            className="rounded-md w-full lg:w-full lg:h-[270px] object-cover md:w-auto h-[150px] md:h-auto"
          />
          <div className="flex text-xs md:text-sm transition-all group-hover:opacity-100 group-hover:visible  duration-100 opacity-0 invisible  justify-end flex-col absolute inset-0  movie-overlay rounded-md">
            <div className="pb-6 px-2 space-y-2 md:space-y-3">
              <p className="text-xs md:text-[13px]">
                {type === "film" ? "فیلم" : "سریال"} -{" "}
                <span className="font-Dana">{showTime}</span>
              </p>
              <div className="flex text-xs md:text-[13px]  gap-x-1">
                <Heart />
                <span className="font-Dana mt-[1px]">%80</span>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-xs mt-3 mr-3">{title}</h3>
      </div>
      <Link
        href={type === "film" ? `/movie/${link}` : `/series/${link}`}
        className={`transition-all block lg:hidden group cursor-pointer `}
      >
        <div className="relative">
          <Image
            src={image}
            alt="slide1.jpg"
            width={490}
            height={500}
            className="rounded-md w-full lg:w-full lg:h-[270px] object-cover md:w-auto h-[150px] md:h-auto"
          />
          <div className="flex text-xs md:text-sm transition-all group-hover:opacity-100 group-hover:visible  duration-100 opacity-0 invisible  justify-end flex-col absolute inset-0  movie-overlay rounded-md">
            <div className="pb-6 px-2 space-y-2 md:space-y-3">
              <p className="text-xs md:text-[13px]">
                {type === "film" ? "فیلم" : "سریال"} -{" "}
                <span className="font-Dana">{showTime}</span>
              </p>
              <div className="flex  gap-x-1">
                <Heart />
                <span className="font-Dana mt-[1px]">%80</span>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-xs mt-3 mr-3">{title}</h3>
      </Link>
    </>
  );
}

export default Movie;
