import React from "react";
type TContainer = {
  children: React.ReactNode;
  isShow?: boolean;
};
function ModalContainer({ children, isShow }: TContainer) {
  return (
    <div
      className={`bg-black/50 fixed inset-0 flex-center z-50 transition-all ${
        isShow ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

export default ModalContainer;
