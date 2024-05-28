import { useEffect, useRef } from "react";

function useCloseOutSideClick(handler: any, isCapturing: any) {
  const ref = useRef<any>(null);
  useEffect(() => {
    const handleClick = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("click", handleClick, isCapturing);
    return () =>
      document.removeEventListener("click", handleClick, isCapturing);
  }, [handler, isCapturing]);

  return { ref };
}

export default useCloseOutSideClick;
