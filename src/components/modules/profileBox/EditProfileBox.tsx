import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPencil } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";

function EditProfileBox({ profile }: any) {
  return (
    <Link href={`/profile-list-edit/${profile._id}`}>
      <div className="relative flex-center">
        <Image
          src={profile.image}
          width={150}
          height={150}
          alt={profile.name}
          className="rounded-full w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
        />
        <div className="absolute  bg-black/50 inset-0 rounded-full flex-center">
          <FaPencil className="text-3xl" />
        </div>
        {profile.password && (
          <div className="absolute -right-1 bottom-0 w-10 h-10 bg-namavaBlack rounded-full flex-center">
            <IoIosLock className="text-xl" />
          </div>
        )}
      </div>
      <h2 className="text-center mt-3">{profile.name}</h2>
    </Link>
  );
}

export default EditProfileBox;
