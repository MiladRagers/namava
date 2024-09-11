import React from "react";
import Bookmark from "@/src/components/templates/bookmarks/Bookmarks";
import { getUserBookmarks } from "@/src/libs/service/services";
async function Bookmarks() {
  const bookmarks: any = await getUserBookmarks();

  const kidBookmarks = bookmarks.filter(
    (bookmark: any) => bookmark.movie.contentType === "kid"
  );

  return (
    <div className="py-24 container text-white">
      <Bookmark bookmarks={JSON.parse(JSON.stringify(kidBookmarks))} />
    </div>
  );
}

export default Bookmarks;
