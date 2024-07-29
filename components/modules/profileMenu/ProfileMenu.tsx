import React from "react";
import Button from "../auth/Button/Button";
import ProfileArrow from "@/icons/ProfileArrow";
import Image from "next/image";
import { LuSettings } from "react-icons/lu";
import { BiLock } from "react-icons/bi";
import Link from "next/link";
import Folder2 from "@/icons/Folder2";
import Star from "@/icons/Star";
import Gift from "@/icons/gift";
import User from "@/icons/User";
import Phone from "@/icons/Phone";
import Power from "@/icons/Power";
import { usePathname } from "next/navigation";
import { logout } from "@/src/libs/actions/auth";
import toast from "react-hot-toast";

type TProfileMenu = {
  isShow: boolean;
  onShow: React.Dispatch<React.SetStateAction<boolean>>;
};
function ProfileMenu({ isShow, onShow }: TProfileMenu) {
  const url = usePathname();

  return (
    <div
      className={`absolute profile-container rounded-[12px] ${
        isShow ? "opacity-100 visible" : "opacity-0 invisible"
      } w-[272px] -left-4 top-14 hidden md:block`}
      onMouseLeave={() => onShow(false)}
    >
      <div className="relative">
        <ProfileArrow />
      </div>
      <div>
        <div className="rounded-[12px] overflow-hidden">
          {/* profile header */}
          <div className="bg-[#D95C5C] p-4">
            <h1 className="text-center !text-white">اشتراک فعال ندارید</h1>
            <Link href={"/plans"}>
              <Button className="h-[32px] !text-xs text-black shadow-xl !font-Iran bg-white  hover:bg-namava hover:text-white mt-2">
                خرید اشتراک
              </Button>
            </Link>
          </div>
          {/* profile body */}
          <div className="px-4 py-3 child:text-xs bg-white text-black">
            <div className="border-b border-b-gray-300 pb-2">
              <Link href={"/profile-list"} className="flex items-center justify-between hover:text-blue-600 group">
                <div className="flex items-center gap-x-2">
                  <Image
                    src="/images/user.png"
                    alt="user"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <span>بزرگسال</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <LuSettings className="text-lg text-gray-600 group-hover:text-blue-600" />
                  <span>تنظیمات</span>
                </div>
              </Link>
            </div>
            <div className="mt-2 space-y-3 border-b border-b-gray-300 pb-2">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/images/user.png"
                      alt="user"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <span>بزرگسال</span>
                  </div>
                  <BiLock className="text-base text-gray-600" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-2">
                    <Image
                      src="/images/customProfile.jpg"
                      alt="user"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <span>بزرگسال</span>
                  </div>
                  <BiLock className="text-base text-gray-600" />
                </div>
              </div>
            </div>
            <div className="space-y-4 mt-4 mb-2">
              {!url.includes("/kids") && (
                <>
                  <div className="flex items-center gap-x-2 my-2">
                    <Folder2 />
                    <Link href={"/bookmarks"}>لیست من</Link>
                  </div>
                  <div className="flex items-center gap-x-2 my-2">
                    <Star />
                    <Link href={"/plans"}>خرید اشتراک</Link>
                  </div>
                  <div className="flex items-center gap-x-2 my-2">
                    <Gift />
                    <Link href={"/"}>کارت هدیه</Link>
                  </div>
                  <div className="flex items-center gap-x-2 my-2">
                    <User />
                    <Link href={"/p-user"}>حساب کاربری</Link>
                  </div>
                  <div className="flex items-center gap-x-2 my-2">
                    <Phone />
                    <Link href={"/contact-us"}>تماس با ما</Link>
                  </div>
                </>
              )}
              <div
                className="flex items-center gap-x-2 my-2 cursor-pointer"
                onClick={async () => {
                  await logout();
                  toast.success("شما با موفقیت خارج شدید");
                  onShow(false);
                }}
              >
                <Power />
                <span>خروج</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileMenu;
