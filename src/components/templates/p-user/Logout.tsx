"use client";
import { logout } from "@/src/libs/actions/auth";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FiLogOut } from "react-icons/fi";

function Logout() {
  const router = useRouter();
  return (
    <div
      className="mt-2 cursor-pointer"
      onClick={async () => {
        await logout();
        toast.success("شما با موفقیت خارج شدید");
        router.push("/");
      }}
    >
      <button
        type="submit"
        className="flex  gap-x-4 font-DanaMedium p-2 rounded-md"
      >
        <FiLogOut className="text-[22px]" />
        خروج
      </button>
    </div>
  );
}

export default Logout;
