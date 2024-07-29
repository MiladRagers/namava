import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLock } from "react-icons/bi";

function ProfileBox({ image, name, isLock }: any) {
  return (
    <Link href={"/profile-list"} className="flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <Image
          src={image}
          alt={image}
          width={1920}
          height={1080}
          className="rounded-full h-[30px] w-[30px]"
        />
        <span>{name}</span>
      </div>
      {isLock && <BiLock className="text-base text-gray-600" />}
    </Link>
  );
}

export default ProfileBox;
