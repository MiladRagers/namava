import Sidebar from "@/components/modules/p-user/Sidebar";
import React from "react";
import { authUser } from "@/src/utils/serverHelper";
import { redirect } from "next/navigation";
async function UserLayout({ children }: { children: React.ReactNode }) {
  const auth = await authUser();
  if (!auth) {
    redirect("/");
  }
  return (
    <div className="flex  gap-x-5 container my-28">
      <Sidebar />
      <div className="w-full rounded-md">{children}</div>
    </div>
  );
}

export default UserLayout;
