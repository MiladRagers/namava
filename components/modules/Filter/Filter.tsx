"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

type Option = {
  label: string;
  slug: string;
};

type TFilter = {
  filterField: string;
  options: Option[];
};

function Filter({ filterField, options }: TFilter) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const handleFilterParm = (slug: string) => {
    params.set(filterField, slug);
    router.replace(`${pathname}?${params}`);
  };
  return (
    <div className="inline-flex items-center gap-x-2 font-Dana bg-namavaBlack p-1 child:transition-all child:cursor-pointer text-xs md:text-sm rounded-md">
      {options.map((option, index) => (
        <div
          key={index}
          className={`text-white hover:bg-namava ${
            option.slug === searchParams.get(filterField)
              ? "bg-namava"
              : ""
          } hover:text-white py-1 px-1 rounded-md`}
          onClick={() => handleFilterParm(option.slug)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
}

export default Filter;
