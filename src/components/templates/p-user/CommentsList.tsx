import Pagination from "@/src/components/modules/pagination/Pagination";
import Table from "@/src/components/modules/table/Table";
import React from "react";
import { FaEye, FaPencil, FaRegStar, FaStar, FaTrash } from "react-icons/fa6";

function CommentsList() {
  return (
    <div className="users-list mt-5 overflow-hidden bg-namavaBlack  rounded-md">
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
            <td>تایید نشده</td>
            <td>1403/04/05</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaEye className="text-namava text-base md:text-lg" />
              </div>
            </td>
          </Table.Row>
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
            <td>تایید نشده</td>
            <td>1403/04/05</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaEye className="text-namava text-base md:text-lg" />
              </div>
            </td>
          </Table.Row>
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
            <td>تایید نشده</td>
            <td>1403/04/05</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaEye className="text-namava text-base md:text-lg" />
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
