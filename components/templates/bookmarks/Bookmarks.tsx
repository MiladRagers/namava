"use client";
import Movie from "@/components/modules/main/Movie/Movie";
import React, { useState } from "react";

function Bookmarks({ bookmarks }: any) {
  const [showStatus, setShowStatus] = useState("bookmark");
  return (
    <>
      {/* bookmark header */}
      <div className="flex items-center gap-x-6">
        <div
          className={`bookmarkItem ${
            showStatus === "bookmark" ? "bookmark--active" : ""
          }`}
          onClick={() => setShowStatus("bookmark")}
        >
          نشان شده ها
        </div>
        <div
          className={`bookmarkItem ${
            showStatus === "wish" ? "bookmark--active" : ""
          }`}
          onClick={() => setShowStatus("wish")}
        >
          علاقه مندی ها
        </div>
      </div>

      {/* bookmark body */}
      <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-x-4 gap-y-16 pt-10">
        {showStatus === "bookmark" &&
          bookmarks.map((bookmark: any) => (
            <Movie
              key={bookmark.movie._id}
              title={bookmark.movie.title}
              image={bookmark.movie.mainImage}
              link={bookmark.movie.link}
              type={bookmark.movie.type}
              showTime={bookmark.movie.showTime}
              isLink
            />
          ))}
      </div>
    </>
  );
}

export default Bookmarks;
