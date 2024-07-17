import Pagination from "@/components/modules/pagination/Pagination";
import Table from "@/components/modules/table/Table";
import Link from "next/link";
import React from "react";
import { FaCheck, FaEye, FaTrash } from "react-icons/fa6";

function TicketsList() {
  return (
    <div className="users-list mt-10 overflow-hidden bg-namavaBlack  rounded-md">
      <Table>
        <Table.Header>
          <th>شماره</th>
          <th>نام</th>
          <th>دپارتمان</th>
          <th>زیر مجموعه</th>
          <th>اولویت</th>
          <th>تاریخ</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <td>1</td>
            <td>میلاد سلامیان</td>
            <td>مشاوره</td>
            <td>مدیریت مالی</td>

            <td>زیاد</td>
            <td>1403/04/05</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaTrash className="text-red-600 text-base md:text-lg" />
                <FaCheck className="text-green-500 text-base md:text-lg" />
                <Link href={"/p-admin/tickets/njbsnbxsb"}><FaEye className="text-amber-400 text-base md:text-lg" /></Link>
              </div>
            </td>
          </Table.Row>
          <Table.Row>
            <td>1</td>
            <td>میلاد سلامیان</td>
            <td>مشاوره</td>
            <td>مدیریت مالی</td>

            <td>زیاد</td>
            <td>1403/04/05</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaTrash className="text-red-600 text-base md:text-lg" />
                <FaCheck className="text-green-500 text-base md:text-lg" />
                <Link href={"/p-admin/tickets/njbsnbxsb"}><FaEye className="text-amber-400 text-base md:text-lg" /></Link>
              </div>
            </td>
          </Table.Row>
          <Table.Row>
            <td>1</td>
            <td>میلاد سلامیان</td>
            <td>مشاوره</td>
            <td>مدیریت مالی</td>

            <td>زیاد</td>
            <td>1403/04/05</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaTrash className="text-red-600 text-base md:text-lg" />
                <FaCheck className="text-green-500 text-base md:text-lg" />
                <Link href={"/p-admin/tickets/njbsnbxsb"}><FaEye className="text-amber-400 text-base md:text-lg" /></Link>
              </div>
            </td>
          </Table.Row>
          <Table.Row>
            <td>1</td>
            <td>میلاد سلامیان</td>
            <td>مشاوره</td>
            <td>مدیریت مالی</td>

            <td>زیاد</td>
            <td>1403/04/05</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaTrash className="text-red-600 text-base md:text-lg" />
                <FaCheck className="text-green-500 text-base md:text-lg" />
                <Link href={"/p-admin/tickets/njbsnbxsb"}><FaEye className="text-amber-400 text-base md:text-lg" /></Link>
              </div>
            </td>
          </Table.Row>
        </Table.Body>
      </Table>
      <Pagination />
    </div>
  );
}

export default TicketsList;
