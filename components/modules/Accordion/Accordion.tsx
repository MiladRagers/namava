"use client";
import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

type AccordionTitle = {
  title: string;
  children: React.ReactNode;
};
function Accordion({ title, children }: AccordionTitle) {
  const subMenuRef = useRef<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      const height = subMenuRef.current.scrollHeight;
      subMenuRef.current.style.height = height + "px";
    } else {
      subMenuRef.current.style.height = 0 + "px";
    }
  }, [isOpen]);

  return (
    <div className="text-white bg-[#222327] px-3 py-5  md:p-6 md:rounded-xl">
      <div
        onClick={handleToggle}
        className={`md:cursor-pointer flex items-center justify-between ${isOpen ?"pb-2 border-b border-b-gray-500" :""} `}
      >
        <p className="text-xs/[25px] md:text-base max-w-[260px] md:max-w-[600px]">{title}</p>
        <BiChevronDown
          className={`text-2xl ${isOpen ? "rotate-180" : ""} transition-all`}
        />
      </div>
      <div className={`submenu`} ref={subMenuRef}>
        <p className="pt-3 text-xs/[25px] md:text-sm/[25px] text-gray-300">{children}</p>
      </div>
    </div>
  );
}

export default Accordion;
