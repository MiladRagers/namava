import React from "react";
import Bookmark from "@/src/components/templates/bookmarks/Bookmarks";
import { getUserBookmarks } from "@/src/libs/service/services";
async function Bookmarks() {
  const bookmarks = await getUserBookmarks();
  return (
    <div className="py-24 container text-white">
      <Bookmark bookmarks={JSON.parse(JSON.stringify(bookmarks))} />
    </div>
  );
}

export default Bookmarks;
