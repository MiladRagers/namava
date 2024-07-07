import Sidebar from "@/components/modules/p-admin/Sidebar";
import TopBar from "@/components/modules/p-admin/Topbar";
import AdminPanelProvider from "@/src/context/AdminPanelProvider";
import React from "react";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminPanelProvider>
      <div className="flex min-h-screen font-Poppins">
        <Sidebar />
        <div className="w-full">
          <TopBar />
          <div className="px-[1.2rem] md:px-[2.5rem] py-[2rem]">{children}</div>
          <div className="text-white flex flex-col gap-y-4 md:hidden items-center justify-center h-24 bg-namavaBlack">
            <p>داشبورد مدیریت سایت نماوا</p>
            <p className="text-gray-300 text-sm">توسعه داده شده با ❤️ توسط میلاد سلامیان</p>
          </div>
        </div>
      </div>
    </AdminPanelProvider>
  );
}

export default AdminLayout;
