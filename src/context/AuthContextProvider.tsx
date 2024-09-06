"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { baseURL } from "../libs/types";

const UserAuthContext = createContext({});

type TAuthContextProvider = {
  children: React.ReactNode;
};

function AuthContextProvider({ children }: TAuthContextProvider) {
  const [userInfo, setUserInfo] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await fetch(`${baseURL}/auth/me`);
      if (res.status === 200) {
        const userData = await res.json();
        setUserInfo(userData);
        setIsLogin(true);
      } else {
        setUserInfo({});
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
