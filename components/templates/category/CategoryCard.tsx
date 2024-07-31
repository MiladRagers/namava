import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryCard {
  title: string;
  image: string;
  link: string;
}

function CategoryCard({ title, image, link }: CategoryCard) {
  console.log(link);
  
  return (
    <div className="relative flex items-center">
      <Link href={`${link}`}>
        <Image
          src={image}
          alt={image}
          width={900}
          height={900}
          className="rounded-md"
        />
      </Link>
      <span className="text-sm category-title md:text-xl lg:text-2xl absolute right-3 md:right-6 max-w-[73.9px] md:max-w-[190px]">{title}</span>
    </div>
  );
}

export default CategoryCard;
