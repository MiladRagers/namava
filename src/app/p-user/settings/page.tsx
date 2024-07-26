import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="bg-namavaBlack p-8 w-full  rounded-md md:w-1/2 mx-auto text-white">
      <ul className="w-full text-sm space-y-6">
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <Image
              src={"/images/user.png"}
              alt="user.png"
              width={1920}
              height={1080}
              className="w-[60px] h-[60px] rounded-full"
            />
            <span>
              بزرگسال <span className="text-[#aaa]">(پیش فرض)</span>
            </span>
          </div>
          <Link href={"/profile-list-edit/1"} className="text-namava">ویرایش پروفایل</Link>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <Image
              src={"/images/user.png"}
              alt="user.png"
              width={1920}
              height={1080}
              className="w-[60px] h-[60px] rounded-full"
            />
            <span>
              بزرگسال <span className="text-[#aaa]">(پیش فرض)</span>
            </span>
          </div>
          <Link href={"/profile-list-edit/1"} className="text-namava">ویرایش پروفایل</Link>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <Image
              src={"/images/user.png"}
              alt="user.png"
              width={1920}
              height={1080}
              className="w-[60px] h-[60px] rounded-full"
            />
            <span>
              بزرگسال <span className="text-[#aaa]">(پیش فرض)</span>
            </span>
          </div>
          <Link href={"/profile-list-edit/1"} className="text-namava">ویرایش پروفایل</Link>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <Image
              src={"/images/user.png"}
              alt="user.png"
              width={1920}
              height={1080}
              className="w-[60px] h-[60px] rounded-full"
            />
            <span>
              بزرگسال <span className="text-[#aaa]">(پیش فرض)</span>
            </span>
          </div>
          <Link href={"/profile-list-edit/1"} className="text-namava">ویرایش پروفایل</Link>
        </li>
      </ul>
    </div>
  );
}

export default page;
