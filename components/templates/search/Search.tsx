"use client";
import Search from "@/icons/Search";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import Filter from "./Filter";
import Button from "@/components/modules/auth/Button/Button";

function SearchBox({ search }: { search: string }) {
  const [isShow, setIsShow] = useState(false);
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
    <div className="flex items-center gap-x-2">
      <div
        onClick={() => setIsShow(true)}
        className="relative block md:hidden bg-white text-sm text-namavaBlack py-3 rounded-xl px-5"
      >
        فیلتر
        <span className="absolute -top-2 text-sm -left-2 rounded-md font-Dana bg-namava text-white w-[21px] h-[19.41px] flex-center">
          {searchParams.size}
        </span>
      </div>
      <div className="bg-[#37383e] text-[13px] md:text-base w-full py-2 px-3 md:py-4 md:px-6 rounded-xl flex items-center gap-x-2">
        <Search className="!w-[30px] !h-[30px] !fill-white " />
        <input
          type="text"
          placeholder="فیلم ، سریال ، بازیگر و ژانر"
          className="bg-transparent outline-none text-[#cccc] w-full"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div
        className={`fixed md:opacity-0 md:invisible inset-0 ${
          isShow ? "opacity-100 visible" : "opacity-0 invisible"
        }  z-50 text-white`}
      >
        <Filter className="w-full h-full !rounded-none" onShow={setIsShow} />
        <div
          className="absolute bottom-10 flex-center w-full"
          onClick={() => setIsShow(false)}
        >
          <Button className="!w-[300px]">اعمال فیلتر</Button>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
