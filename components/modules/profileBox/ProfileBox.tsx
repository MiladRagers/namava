import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProfileBox({ profile }: any) {
  return (
    <Link href={`/${profile._id}`}>
      <Image
        src={profile.image}
        width={1920}
        height={1080}
        alt={profile.image}
        className="rounded-full w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
      />
      <h2 className="text-center mt-3">{profile.name}</h2>
    </Link>
  );
}

export default ProfileBox;
