import Pagination from "@/components/modules/pagination/Pagination";
import Table from "@/components/modules/table/Table";
import React from "react";
import { FaCheck, FaEye, FaPencil, FaRegStar, FaStar, FaTrash, FaXmark } from "react-icons/fa6";

function CommentsList() {
  return (
    <div className="users-list mt-10 overflow-hidden bg-namavaBlack  rounded-md">
      <Table>
        <Table.Header>
          <th>شماره</th>
          <th>نام</th>
          <th>فیلم</th>
          <th>امتیاز</th>
          <th>وضعیت</th>
          <th>تاریخ</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <td className="bg-red-700 text-white">1</td>
            <td>میلاد سلامیان</td>
            <td>کاپیتان آمریکا</td>
            <td>
              <div className="flex items-center gap-x-0.5 justify-center">
                <FaStar className="text-amber-400" />
                <FaStar className="text-amber-400" />
                <FaStar className="text-amber-400" />
                <FaRegStar className="text-amber-400" />
                <FaRegStar className="text-amber-400" />
              </div>
            </td>
            <td>
                تایید نشده
            </td>
            <td>1403/04/05</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaTrash className="text-red-600 text-base md:text-lg" />
                <FaPencil className="text-sky-600 text-base md:text-lg" />
                <FaCheck className="text-green-500 text-base md:text-lg" />
                <FaEye className="text-amber-400 text-base md:text-lg" />
              </div>
            </td>
          </Table.Row>
          <Table.Row>
            <td className="bg-green-600 text-white">2</td>
            <td>میلاد سلامیان</td>
            <td>کاپیتان آمریکا</td>
            <td>
              <div className="flex items-center gap-x-0.5 justify-center">
                <FaStar className="text-amber-400" />
                <FaStar className="text-amber-400" />
                <FaStar className="text-amber-400" />
                <FaRegStar className="text-amber-400" />
                <FaRegStar className="text-amber-400" />
              </div>
            </td>
            <td>
                تایید شده
            </td>
            <td>1403/04/15</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaTrash className="text-red-600 text-base md:text-lg" />
                <FaPencil className="text-sky-600 text-base md:text-lg" />
                <FaXmark className="text-red-600 text-base md:text-lg" />
                <FaEye className="text-amber-400 text-base md:text-lg" />
              </div>
            </td>
          </Table.Row>
        </Table.Body>
      </Table>
      <Pagination />
    </div>
  );
}

export default CommentsList;
