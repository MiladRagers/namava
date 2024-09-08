"use client";
import { useAdminPanel } from "@/src/context/AdminPanelProvider";
import React from "react";
import { HiMenu } from "react-icons/hi";

function HambergerMenu() {
  const { toggleMenu } = useAdminPanel();
  return (
    <div className="block md:hidden" onClick={() => toggleMenu()}>
      <HiMenu className="text-white text-3xl" />
    </div>
  );
}

export default HambergerMenu;
