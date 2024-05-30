"use client";
import Movie from "@/components/modules/main/Movie/Movie";
import React, { useState } from "react";

function Bookmarks() {
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
    </>
  );
}

export default Bookmarks;
