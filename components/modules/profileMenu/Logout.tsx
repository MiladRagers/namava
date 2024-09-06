import Power from "@/icons/Power";
import { logout } from "@/src/libs/actions/auth";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

function Logout({ onShow }: any) {
  const router = useRouter();
  return (
    <div
      className="flex items-center gap-x-2 my-2 cursor-pointer"
      onClick={async () => {
        await logout();
        toast.success("شما با موفقیت خارج شدید");
        onShow(false);
        router.push("/");
      }}
    >
      <Power />
      <span>خروج</span>
    </div>
  );
}

export default Logout;
