"use client";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type TAdminPanelProvider = {
  children: React.ReactNode;
};

type TAdminPanelContext = {
  toggleMenu: () => void;
  isShowMenu: boolean;
};

const AdminPanelContext = createContext({} as TAdminPanelContext);

function AdminPanelProvider({ children }: TAdminPanelProvider) {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsShowMenu((prev) => !prev);

  useEffect(() => {
    setIsShowMenu(false);
  }, [pathname]);
  return (
    <AdminPanelContext.Provider value={{ isShowMenu, toggleMenu }}>
      {children}
    </AdminPanelContext.Provider>
  );
}

export function useAdminPanel() {
  const context = useContext(AdminPanelContext);
  if (!context) throw new Error("context was used outside the provider");

  return context;
}

export default AdminPanelProvider;
