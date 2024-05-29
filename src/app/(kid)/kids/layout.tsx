import React from "react";

function KidLayout({ children }: { children: React.ReactNode }) {
  return <div className="!bg-white min-h-screen">{children}</div>;
}

export default KidLayout;
