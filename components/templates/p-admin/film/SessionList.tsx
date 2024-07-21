import Pagination from "@/components/modules/pagination/Pagination";
import Table from "@/components/modules/table/Table";
import Image from "next/image";
import React from "react";
import { FaPencil, FaRegStar, FaStar, FaTrash } from "react-icons/fa6";

function SessionList() {
  return (
    <div className="users-list mt-10 overflow-hidden bg-namavaBlack  rounded-md">
      <Table>
        <Table.Header>
          <th>شماره</th>
          <th>تصویر</th>
          <th>عنوان</th>
          <th>مدت</th>
          <th>تاریخ</th>
          <th>امتیاز</th>
          <th>فصل</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <td>1</td>
            <td className="py-2 !px-0 md:!p-5">
              <Image
                src="/images/session1.jpg"
                className="!w-[144px] object-cover h-[100px] md:h-[100px]  rounded-md mx-auto"
                alt=""
                width={1920}
                height={1080}
              />
            </td>
            <td>بن تن - تست</td>
            <td>20 دقیقه</td>
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
            <td>1</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaTrash className="text-red-600 text-base md:text-lg" />
                <FaPencil className="text-sky-600 text-base md:text-lg" />
              </div>
            </td>
          </Table.Row>
          <Table.Row>
            <td>1</td>
            <td className="py-2 !px-0 md:!p-5">
              <Image
                src="/images/session1.jpg"
                className="!w-[144px] object-cover h-[100px] md:h-[100px]  rounded-md mx-auto"
                alt=""
                width={1920}
                height={1080}
              />
            </td>
            <td>بن تن - تست</td>
            <td>20 دقیقه</td>
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
            <td>1</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaTrash className="text-red-600 text-base md:text-lg" />
                <FaPencil className="text-sky-600 text-base md:text-lg" />
              </div>
            </td>
          </Table.Row>
          <Table.Row>
            <td>1</td>
            <td className="py-2 !px-0 md:!p-5">
              <Image
                src="/images/session1.jpg"
                className="!w-[144px] object-cover h-[100px] md:h-[100px]  rounded-md mx-auto"
                alt=""
                width={1920}
                height={1080}
              />
            </td>
            <td>بن تن - تست</td>
            <td>20 دقیقه</td>
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
            <td>1</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaTrash className="text-red-600 text-base md:text-lg" />
                <FaPencil className="text-sky-600 text-base md:text-lg" />
              </div>
            </td>
          </Table.Row>
        </Table.Body>
      </Table>
      <Pagination />
    </div>
  );
}

export default SessionList;
