import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import useOutSideClose from "@/hooks/useOutSideClick";

type TModalContext = {
  name: string;
  close: any;
  open: any;
  setIsShowSuccessModal: any;
  isShowSuccessModal: boolean;
};

const ModalContext = createContext({} as TModalContext);

function Modal({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState("");
  const close = () => setName("");
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false);
  const open = setName;

  return (
    <ModalContext.Provider
      value={{ name, close, open, setIsShowSuccessModal, isShowSuccessModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, name }: { children: React.ReactNode; name: string }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children as any, { onClick: () => open(name) });
}

function Page({
  children,
  name: windowName,
  title,
}: {
  children: React.ReactNode;
  name: string;
  title: string;
}) {
  const { close, name } = useContext(ModalContext);
  const ref: any = useOutSideClose(close, true);
  if (name !== windowName) return null;

  return (
    <>
      <div
        id="delete-modal"
        className="bg-black/50 fixed inset-0  flex items-center justify-center  z-50"
      >
        <div ref={ref}>{cloneElement(children as any, { onClose: close })}</div>
      </div>
    </>
  );
}

Modal.Open = Open;
Modal.Page = Page;

export default Modal;
