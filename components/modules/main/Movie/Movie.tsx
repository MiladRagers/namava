import Heart from "@/icons/Heart";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Movie {
  image: string;
  title: string;
  link: string;
}
function Movie({ image, title, link }: Movie) {
  return (
    <Link href={link} className={`transition-all group `}>
      <div className="relative">
        <Image
          src={`/images/${image}`}
          alt="slide1.jpg"
          width={490}
          height={500}
          className="rounded-md w-full lg:w-full lg:h-[279px] md:w-auto h-[160px] md:h-auto"
        />
        <div className="flex text-xs md:text-sm transition-all group-hover:opacity-100 group-hover:visible  duration-100 opacity-0 invisible  justify-end flex-col absolute inset-0  movie-overlay rounded-md">
          <div className="pb-6 px-2 space-y-2 md:space-y-3">
            <p className="text-[13px]">
              سریال - <span className="font-Dana">1403</span>
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
  );
}

export default Movie;
