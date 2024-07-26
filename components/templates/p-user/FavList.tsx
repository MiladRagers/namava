
import Pagination from "@/components/modules/pagination/Pagination";
import Table from "@/components/modules/table/Table";
import Image from "next/image";
import React from "react";
import { FaEye, FaRegStar, FaStar, FaTrash } from "react-icons/fa6";

function FavList() {
  return (
    <div className="users-list  overflow-hidden bg-namavaBlack  rounded-md">
      <Table>
        <Table.Header>
          <th>شماره</th>
          <th>تصویر</th>
          <th>عنوان</th>
          <th>رده سنی</th>
          <th>مدت</th>
          <th>تاریخ</th>
          <th>امتیاز</th>
          <th>نوع</th>
          <th>دسته بندی</th>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <td>1</td>
            <td className="py-2 !px-0 md:!p-5">
              <Image
                src="/images/4f01db3a-f1de-4b11-9851-221f4d848d7b.jpg"
                className="w-24 object-cover h-[100px] md:h-36  rounded-md mx-auto"
                alt=""
                width={1920}
                height={1080}
              />
            </td>
            <td>کاپیتان آمریکا</td>
            <td>15 سال</td>
            <td>115 دقیقه</td>
            <td>1403/04/15</td>
            <td>
              <div className="flex items-center gap-x-0.5 justify-center">
                <FaStar className="text-amber-400" />
                <FaStar className="text-amber-400" />
                <FaStar className="text-amber-400" />
                <FaRegStar className="text-amber-400" />
                <FaRegStar className="text-amber-400" />
              </div>
            </td>
            <td>فیلم</td>
            <td>اکشن</td>
          </Table.Row>
        </Table.Body>
      </Table>
      <Pagination />
    </div>
  );
}

export default FavList;
