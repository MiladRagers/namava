import React from "react";
import Bookmark from "@/src/components/templates/bookmarks/Bookmarks";
import {
  getAllUserLikesMovie,
  getUserBookmarks,
} from "@/src/libs/service/services";
async function Bookmarks() {
  const [bookmarks, likesMovies] = await Promise.all([
    getUserBookmarks(),
    getAllUserLikesMovie(),
  ]);
  
  return (
    <div className="py-24 container text-white">
      <Bookmark
        bookmarks={JSON.parse(JSON.stringify(bookmarks))}
        likesMovies={JSON.parse(JSON.stringify(likesMovies))}
      />
    </div>
  );
}

export default Bookmarks;
