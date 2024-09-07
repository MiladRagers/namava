import ActiveLike from "@/icons/ActiveLike";
import Dislike from "@/icons/Dislike";
import IMBD from "@/icons/IMBD";
import Like from "@/icons/Like";
import Plus from "@/icons/Plus";
import { THeaderDetails } from "@/src/libs/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { GrCircleInformation } from "react-icons/gr";

function HeaderDetail({ isKid, info, subscription, user }: THeaderDetails) {
  const pathname = usePathname();
  const [liked, setLiked] = useState(info.liked.includes(user));
  const [disliked, setDisliked] = useState(info.disliked.includes(user));
  const isSinglePage =
    pathname.includes("/movie") || pathname.includes("/series");
  const age = Number(info?.ageRange);

  return (
    <>
      {isKid ? (
        <div className="max-w-[90%] mx-auto md:mx-0 md:max-w-[590px] space-y-4 md:h-[461px] p-4  rounded-md kid-title top-64 md:top-44 md:right-10 relative z-20">
          <Image
            src={"/images/tomTitle.png"}
            width={450}
            height={450}
            alt="oka"
            className="w-[125px] md:w-[300px]  mx-auto "
          />
          <h2 className="text-center font-IranMedium text-lg md:text-xl">
            تام و جری
          </h2>
          <p className="text-center text-xs md:text-[15px]/[26px]">
            جری برای پیدا کردن محل زندگی مورد نظرش به یکی از هتل های بزرگ
            نیویورک که قرار است یک عروسی مجلل در آن برگزار شود می رود. اما از
            آنجا که تام همیشه به دنبال جری است، هرج و مرج و خرابی های بسیاری به
            بار می آورد و...
          </p>

          <div className="flex-center flex-col">
            <div className="flex items-center flex-col md:flex-row gap-y-5 justify-center md:justify-start gap-x-4 mt-4">
              <button className="bg-white hover:bg-namava hover:text-white flex items-center gap-x-2 justify-between text-xs py-3 px-5 rounded-xl">
                <FaPlay />
                خرید اشتراک
              </button>
              <div className="flex items-center gap-x-4">
                <button className="action-btn !bg-white">
                  <Plus className="!fill-zinc-700" />
                </button>
                <button className="action-btn !bg-white">
                  <Like fill="black" />
                </button>
                <button className="action-btn !bg-white">
                  <Dislike fill="black" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-x-2 mt-5">
              <div className="w-[20px] h-[20px]  rounded-md flex-center font-bold text-sm seven font-Dana">
                7+
              </div>
              <p className="text-xs">مناسب برای سنین بالای ۷ سال</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-[43px] top-40 md:top-28  absolute z-20">
          <img
            src={info?.logo}
            className="max-w-[140px] md:max-w-[200px]  max-h-[160px] mx-auto md:mx-0 "
          />
          <div className="py-6">
            <span className="block text-white text-center md:text-right text-base md:text-[22px]">
              {info.title}
            </span>
            <div className="hidden md:flex items-center gap-x-5 font-Dana text-white text-sm mt-5">
              <span
                className={`${
                  age === 3
                    ? "three"
                    : age === 7
                    ? "seven"
                    : age === 12
                    ? "twelve"
                    : age === 15
                    ? "fifteen"
                    : "eighteen"
                } flex-center text-sm rounded-full text-black font-bold px-1.5`}
              >
                {info.ageRange}+
              </span>
              <span>{info.showTime}</span>
              <span>{info.time} دقیقه</span>
              <div className="flex items-center gap-x-1">
                <IMBD />
                <span className="mt-0.5">{info.IMDB}</span>
              </div>
            </div>
            <p className="line-clamp-2 text-xs/[24px] md:text-sm/[28px] text-center md:text-right  md:line-clamp-6  max-w-[544px] text-white mt-5">
              {info.shortDesc}
            </p>

            <div className="flex items-center justify-center md:justify-start gap-x-4 mt-4">
              <Link
                href={
                  subscription?.hasSubscription
                    ? `/${info.type === "film" ? "movie" : "series"}/${
                        info.link
                      }`
                    : "/plans"
                }
                className="bg-white hover:bg-namava hover:text-white flex items-center gap-x-2 justify-between text-xs py-3 px-5 rounded-xl"
              >
                <FaPlay />
                {subscription?.hasSubscription ? "تماشای فیلم" : "خرید اشتراک"}
              </Link>
              <button className=" py-3 px-5 bg-gray-500/35 hover:bg-white/40 text-white rounded-xl text-[13px]">
                پیش نمایش
              </button>

              {isSinglePage && user ? (
                <>
                  <button className="flex-center py-3 px-3  bg-gray-500/35  rounded-full text-[13px]">
                    <Plus />
                  </button>
                  {liked ? (
                    <button className="flex-center w-[49px] h-[49px]  bg-gray-500/35  rounded-full text-[13px]">
                      <ActiveLike className="fill-white stroke-white" />
                    </button>
                  ) : (
                    <button className="flex-center w-[49px] h-[49px]  bg-gray-500/35  rounded-full text-[13px]">
                      <Like className="fill-white stroke-white" />
                    </button>
                  )}
                  {disliked ? (
                    <button className="flex-center w-[49px] h-[49px]  bg-gray-500/35  rounded-full text-[13px]">
                      <ActiveLike
                        isDislike
                        className="fill-white stroke-white"
                      />
                    </button>
                  ) : (
                    <button className="flex-center w-[49px] h-[49px]  bg-gray-500/35  rounded-full text-[13px]">
                      <Dislike className=" fill-white stroke-white" />
                    </button>
                  )}
                </>
              ) : (
                <Link
                  href={`/movie/${info.link}`}
                  className="hidden md:flex items-center  text-sm gap-x-2 text-white hover:text-namava"
                >
                  <GrCircleInformation className="text-3xl" />
                  اطلاعات بیشتر
                </Link>
              )}
            </div>
            <p className="text-xs hidden md:flex text-gray-50 mt-5 items-center gap-x-3">
              ستارگان:
              {info.actors.slice(0, 4).map((actor: any) => (
                <Link
                  key={actor._id}
                  href={`/biography/${actor.link}`}
                  className="ml-1"
                >
                  {actor.name}
                </Link>
              ))}
            </p>
            <p className="text-xs hidden md:flex text-gray-50 mt-2 items-center gap-x-3">
              کارگردان: {info.director}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderDetail;
