import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Star {
  src: string;
  title: string;
  link: string;
}
function Star({ src, title, link }: Star) {
  return (
    <Link href={link} className="block rounded-full w-[90px] h-[90px] sm:w-[140px] sm:h-[140px] md:w-[190px] md:h-[190px]" title={title}>
      <Image
        src={src}
        width={400}
        height={500}
        alt={title}
        className="rounded-full w-[90px] h-[90px] sm:w-[140px] sm:h-[140px] md:w-[190px] md:h-[190px]"
      />
      <h3 className="text-center mt-3 text-xs md:text-sm">{title}</h3>
    </Link>
  );
}

export default Star;
