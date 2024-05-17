import Search from "@/icons/Search";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { BiSolidChevronDown } from "react-icons/bi";
import { FaTrash, FaXmark } from "react-icons/fa6";
import { useDebouncedCallback } from "use-debounce";

interface FilterItem {
  title: string;
  items: item[];
  slug: string;
  onOpen: React.Dispatch<React.SetStateAction<string | null>>;
  curOpen: string | null;
}

type item = {
  name: string;
  id: number;
};

function FilterItem({ title, items, slug, onOpen, curOpen }: FilterItem) {
  const isOpen = title === curOpen;
  const [search, setSearchValue] = useState("");
  const [searchedItems, setSearchedItems] = useState(items);
  const inputRef = useRef<HTMLInputElement>(null);

  const subMenuRef = useRef<any>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();

  const handleFilterChange = (item: string, e: any) => {
    if (e.target.checked) {
      params.append(slug, item);
    } else {
      params.delete(slug, item);
    }
    router.replace(`${pathname}?${params}`);
  };

  const deleteUserFilter = () => {
    params.delete(slug);
    router.replace(`${pathname}?${params}`);
  };

  const handleSearch = useDebouncedCallback((value) => {
    if (value.trim()) {
      const searchedResult = items.filter((item) => item.name.includes(value));
      setSearchedItems(searchedResult);
    } else {
      setSearchedItems(items);
    }
  }, 300);

  const handleToggle = () => {
    onOpen(isOpen ? null : title);
  };

  useEffect(() => {
    if (isOpen) {
      const height = subMenuRef.current.scrollHeight;
      subMenuRef.current.style.height = height + "px";
      console.log(subMenuRef.current);
    } else {
      subMenuRef.current.style.height = 0 + "px";
    }

    return () => {
      subMenuRef.current.style.height = 0 + "px";
    };
  }, [isOpen]);

  return (
    <div>
      <div
        className="flex items-center justify-between py-4 overflow-hidden"
        onClick={handleToggle}
      >
        <div className="flex items-center gap-x-2.5">
          <span>{title}</span>
          {searchParams.get(slug) && (
            <span className="bg-namava flex-center w-5 h-5 font-Dana text-xs rounded-md">
              <span className="mt-0.5">{searchParams.getAll(slug).length}</span>
            </span>
          )}
        </div>
        <span>
          <BiSolidChevronDown
            className={`text-xl font-bold transition-all ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </span>
      </div>
      <div className="submenu" ref={subMenuRef}>
        <div className="bg-[#121212] mb-2 w-full py-2 pl-3 pr-2  rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Search className="!w-[30px] !h-[30px]" />
            <input
              ref={inputRef}
              value={search}
              type="text"
              placeholder={`${title} را جستجو کنید`}
              onChange={(e) => {
                handleSearch(e.target.value);
                setSearchValue(e.target.value);
              }}
              className="bg-transparent placeholder:text-xs text-sm outline-none text-[#cccc] w-full"
            />
          </div>
          {inputRef.current?.value && (
            <FaXmark
              onClick={() => {
                setSearchValue("");
                inputRef.current?.value = "";
                onOpen(null);
                setSearchedItems(items);
              }}
            />
          )}
        </div>
        <div className="submenu-container max-h-[240px] overflow-y-auto">
          {searchParams.get(slug)?.length && (
            <>
              <div className="flex items-center justify-between pl-2">
                <span className="text-sm text-[#ccc]">انتخاب شما</span>
                <FaTrash className="text-namava" onClick={deleteUserFilter} />
              </div>
              <ul className="space-y-4 my-4">
                {searchParams.getAll(slug).map((item, index) => (
                  <li key={index}>
                    <div className="flex items-center gap-x-2">
                      <input
                        id={item}
                        checked={searchParams.getAll(slug).includes(item)}
                        type="checkbox"
                        className="film-checkbox"
                        onChange={(e) => handleFilterChange(item, e)}
                      />
                      <label className="text-sm" htmlFor={item}>
                        {item}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
          <span className="text-sm text-[#ccc]">همه {title} </span>
          <ul className="space-y-4 my-4">
            {searchedItems.map((item, index) => (
              <li key={index}>
                <div className="flex items-center gap-x-2">
                  <input
                    id={item.name}
                    checked={searchParams.getAll(slug).includes(item.name)}
                    type="checkbox"
                    className="film-checkbox"
                    onChange={(e) => handleFilterChange(item.name, e)}
                  />
                  <label className="text-sm" htmlFor={item.name}>
                    {item.name}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FilterItem;
