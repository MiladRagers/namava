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
          width={30}
          height={30}
          className="rounded-full"
        />
        <span>{name}</span>
      </div>
      {isLock && <BiLock className="text-base text-gray-600" />}
    </Link>
  );
}

export default ProfileBox;
