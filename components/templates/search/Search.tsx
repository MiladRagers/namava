"use client";
import Search from "@/icons/Search";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";

function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const handleSearch = useDebouncedCallback((value: string) => {
    if (value.trim()) {
      params.set("q", value.trim());
    } else {
      params.delete("q");
    }
    router.replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className="bg-[#37383e] w-full py-4 px-6 rounded-xl flex items-center gap-x-2">
      <Search className="!w-[30px] !h-[30px]" />
      <input
        type="text"
        placeholder="فیلم ، سریال ، بازیگر و ژانر"
        className="bg-transparent outline-none text-[#cccc] w-full"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
