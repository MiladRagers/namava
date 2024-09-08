"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { baseURL, UserAuthContextType } from "../libs/types";

const UserAuthContext = createContext({} as UserAuthContextType);

type TAuthContextProvider = {
  children: React.ReactNode;
};

function AuthContextProvider({ children }: TAuthContextProvider) {
  const [userInfo, setUserInfo] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await fetch(`${baseURL}/api/auth/me`);

      if (res.status === 200) {
        const userData = await res.json();
        setUserInfo(userData);
        setIsLogin(true);
      } else {
        setUserInfo(null);
        setIsLogin(false);
      }
    };

    getUserInfo();
  }, []);

  return (
    <UserAuthContext.Provider value={{ userInfo, isLogin }}>
      {children}
    </UserAuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(UserAuthContext);
  if (!context) {
    throw new Error("the context was used outside a provider");
  }
  return context;
}

export default AuthContextProvider;
