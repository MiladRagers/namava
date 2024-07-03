import Sidebar from "@/components/modules/p-admin/Sidebar";
import TopBar from "@/components/modules/p-admin/Topbar";
import AdminPanelProvider from "@/src/context/AdminPanelProvider";
import React from "react";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminPanelProvider>
      <div className="flex min-h-screen font-Poppins">
        <Sidebar />
        <div className="flex-1">
          <TopBar />
          <div className="h-full px-[1.2rem] md:px-[2.5rem] py-[2rem]">
            {children}
          </div>
        </div>
      </div>
    </AdminPanelProvider>
  );
}

export default AdminLayout;
