"use client";
import Button from "@/components/modules/auth/Button/Button";
import Message from "@/icons/Message";
import Send from "@/icons/Send";
import Image from "next/image";
import React, { useState } from "react";
import Comment from "./Comment";
import LoginModal from "@/components/modules/modals/LoginModal";
import { useRouter } from "next/navigation";
import { sendNewComment } from "@/src/libs/actions/comment";
import toast from "react-hot-toast";

type TComments = {
  isKid?: boolean;
  user: string;
  movieId: string;
};
function Comments({ isKid, user, movieId }: TComments) {
  const router = useRouter();
  const [isShowLoginModal, setIsShowLoginModal] = useState(false);

  return (
    <>
      <div
        className={`w-full px-6 py-10 xl:max-w-[1000px] ${
          isKid ? "bg-[#f2f2f2] text-black" : "bg-namavaBlack text-white"
        } rounded-lg mx-auto`}
      >
        <h3
          className={`text-center text-xl ${
            isKid ? "text-black" : "text-white "
          } font-IranMedium`}
        >
          نظرات کاربران
        </h3>
        {!user ? (
          <div
            className={`flex flex-col md:flex-row items-center gap-y-4 gap-x-9 rounded-lg mx-auto mt-10 w-full  md:w-[484px] ${
              isKid ? "bg-white text-black" : "bg-[#37383e] text-white"
            } p-4`}
          >
            <div className="flex items-center">
              <Message />
              <p className="text-xs">برای ثبت نظر ابتدا وارد شوید.</p>
            </div>
            <div className="flex items-center gap-x-4">
              <Button
                className={`!m-0 bg-white !w-[108px] text-xs ${
                  isKid
                    ? "!bg-namava hover:!bg-sky-600 text-white"
                    : "text-zinc-700"
                }`}
                onClick={() => router.push("/register")}
              >
                ثبت نام
              </Button>
              <Button
                className={`!m-0 !w-[108px] text-xs ${
                  isKid
                    ? "bg-zinc-600 hover:bg-zinc-400"
                    : "!bg-gray-500/50 hover:bg-white/40"
                } text-white`}
                onClick={() => router.push("/login")}
              >
                ورود
              </Button>
            </div>
          </div>
        ) : (
          <form
            action={async (formData: FormData) => {
              const res = await sendNewComment(formData, movieId);
              if (res?.status === 201) {
                router.refresh();
                return toast.success(`${res?.message}`);
              }
              return toast.error(`${res?.message}`);
            }}
          >
            <div className="w-full flex items-center gap-x-3 mt-10">
              <Image
                src="/images/user.png"
                width={400}
                height={400}
                className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-full"
                alt="user.png"
              />
              <input
                placeholder="نظرتان درباره این فیلم چیست ؟"
                name="content"
                className="w-full h-[52px] text-black  outline-none placeholder:text-namavaBlack text-xs md:text-sm px-6 py-3 rounded-xl"
              />
              <button type="submit">
                <Send />
              </button>
            </div>
            <div className="pt-5 pr-14">
              <div className="flex items-center gap-x-2">
                <input
                  id="spoil"
                  name="isSpoiled"
                  type="checkbox"
                  className={`film-checkbox ${isKid ? "!border-black" : ""}`}
                />
                <label className="text-xs" htmlFor="spoil">
                  این نظر حاوی اسپویلر است و داستان فیلم را لو می‌دهد.
                </label>
              </div>
            </div>
          </form>
        )}

        <div className="divide-y divide-gray-700">
          <Comment onShow={setIsShowLoginModal} />
          <Comment onShow={setIsShowLoginModal} />
          <Comment onShow={setIsShowLoginModal} />
        </div>
      </div>
      {isShowLoginModal && (
        <LoginModal isShow={isShowLoginModal} onClose={setIsShowLoginModal} />
      )}
    </>
  );
}

export default Comments;
