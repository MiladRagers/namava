import { TWish } from "@/src/libs/types";
import { formatDate } from "@/src/utils/funcs";
import Link from "next/link";
import React from "react";

function LastFavItem({ movie }: { movie: TWish }) {
  return (
    <Link
      href={`/${movie.type === "film" ? "movie" : "series"}/${movie.link}`}
      className="text-white bg-[#121212] p-4 rounded-md flex items-center justify-between"
    >
      <div className="space-y-3">
        <h4>{movie.title}</h4>
        <div className="bg-white w-[90px] text-[#121212] flex-center py-2 rounded-md">
          {movie.category.title}
        </div>
      </div>
      <div className="text-center space-y-3">
        <h5 className="font-Dana">{formatDate(movie.createdAt)}</h5>
        <p>
          سال ساخت : <span className="font-Dana">{movie.showTime}</span>
        </p>
      </div>
    </Link>
  );
}

export default LastFavItem;
