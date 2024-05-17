import React from "react";

interface Overlay {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}
function Overlay({ isOpen, onClose , className }: Overlay) {
  return (
    <div
      className={`${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      } transition-all fixed inset-0 bg-black/80  z-20 ${className}`}
      onClick={() => onClose(false)}
    ></div>
  );
}

export default Overlay;
