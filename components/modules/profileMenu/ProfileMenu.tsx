import React from "react";
import Button from "../auth/Button/Button";
import ProfileArrow from "@/icons/ProfileArrow";
import Image from "next/image";
import { LuSettings } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileBox from "./ProfileBox";
import { profileLinks } from "@/public/db";
import ProfileLink from "./ProfileLink";
import Logout from "./Logout";

type TProfileMenu = {
  isShow: boolean;
  onShow: React.Dispatch<React.SetStateAction<boolean>>;
  user: any;
};
function ProfileMenu({ isShow, onShow, user }: TProfileMenu) {
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
              <Link
                href={"/profile-list"}
                className="flex items-center justify-between hover:text-blue-600 group"
              >
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
              {user.profiles.slice(1, 4).map((profile: any) => (
                <ProfileBox {...profile} />
              ))}
            </div>
            <div className="space-y-4 mt-4 mb-2">
              {!url.includes("/kids") &&
                profileLinks.map((link) => (
                  <ProfileLink {...link} key={link.id} />
                ))}
              <Logout onShow={onShow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileMenu;
