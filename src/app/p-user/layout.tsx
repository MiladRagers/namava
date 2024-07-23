import Sidebar from "@/components/templates/p-user/Sidebar";
import React from "react";

function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex  gap-x-5 container my-28">
      <Sidebar />
      <div className="w-full rounded-md">{children}</div>
    </div>
  );
}

export default UserLayout;
