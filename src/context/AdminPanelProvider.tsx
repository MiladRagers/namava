"use client";
import { createContext, useContext, useState } from "react";

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

  const toggleMenu = () => setIsShowMenu((prev) => !prev);
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
