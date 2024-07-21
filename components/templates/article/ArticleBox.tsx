import Image from "next/image";
import React from "react";

type TArticle = {
  title: string;
  image: string;
  createdAt: string;
  readingTime: number;
};

function ArticleBox({ title, image, createdAt, readingTime }: TArticle) {
  return (
    <div className="shadow-2xl">
      <Image
        src={`/images/article/${image}`}
        alt={image}
        width={1920}
        height={1080}
        className="rounded-t-md"
      />
      <div className="bg-namavaBlack rounded-b-md p-3 text-white text-sm space-y-2">
        <div className="font-Dana text-xs text-[#aaa] flex items-center justify-between">
          <span>{createdAt}</span>
          <span>{readingTime} دقیقه</span>
        </div>
        <h2 className="line-clamp-1">{title}</h2>
      </div>
    </div>
  );
}

export default ArticleBox;
