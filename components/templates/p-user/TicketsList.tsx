import Pagination from "@/components/modules/pagination/Pagination";
import Table from "@/components/modules/table/Table";
import Link from "next/link";
import React from "react";
import { FaEye } from "react-icons/fa6";

function TicketsList() {
  return (
    <div className="users-list mt-5 overflow-hidden bg-namavaBlack  rounded-md">
      <Table>
        <Table.Header>
          <th>شماره</th>
          <th>نام</th>
          <th>دپارتمان</th>
          <th>زیر مجموعه</th>
          <th>اولویت</th>
          <th>تاریخ</th>
          <th>وضعیت</th>
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
              <div className="bg-green-600 py-2 rounded-md font-IranMedium">
                پاسخ داده شده
              </div>
            </td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <Link href={"/p-user/tickets/1"}>
                  <FaEye className="text-namava text-base md:text-lg" />
                </Link>
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
              <div className="bg-red-700 py-2 rounded-md font-IranMedium">
                پاسخ نداده شده
              </div>
            </td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <Link href={"/p-user/tickets/1"}>
                  <FaEye className="text-namava text-base md:text-lg" />
                </Link>
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
              <div className="bg-gray-700 py-2 rounded-md font-IranMedium">
                بسته شده
              </div>
            </td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <Link href={"/p-user/tickets/1"}>
                  <FaEye className="text-namava text-base md:text-lg" />
                </Link>
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
