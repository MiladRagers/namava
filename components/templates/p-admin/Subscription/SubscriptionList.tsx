import Pagination from "@/components/modules/pagination/Pagination";
import Table from "@/components/modules/table/Table";
import React from "react";
import { FaEye, FaPencil, FaTrash } from "react-icons/fa6";

function SubscriptionList() {
  return (
    <div className="users-list mt-10 overflow-hidden bg-namavaBlack  rounded-md">
      <Table>
        <Table.Header>
          <th>شماره</th>
          <th>نام</th>
          <th>نام کاربری</th>
          <th>وضعیت</th>
          <th>ایمیل</th>
          <th>نقش</th>
          <th>اشتراک</th>
          <th>عضویت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <td>1</td>
            <td>میلاد سلامیان</td>
            <td>Milad1385</td>
            <td>دارای اشتراک</td>
            <td>milad@gmail.com</td>
            <td>ادمین</td>
            <td>116 روز</td>
            <td>1403/04/15</td>
            <td className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
              <FaTrash className="text-red-600 text-base md:text-lg" />
              <FaEye className="text-yellow-500 text-base md:text-lg" />
            </td>
          </Table.Row>
          <Table.Row>
            <td>1</td>
            <td>میلاد سلامیان</td>
            <td>Milad1385</td>
            <td>دارای اشتراک</td>
            <td>milad@gmail.com</td>
            <td>ادمین</td>
            <td>116 روز</td>
            <td>1403/04/15</td>
            <td className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
              <FaTrash className="text-red-600 text-base md:text-lg" />
              <FaEye className="text-yellow-500 text-base md:text-lg" />
            </td>
          </Table.Row>
          <Table.Row>
            <td>1</td>
            <td>میلاد سلامیان</td>
            <td>Milad1385</td>
            <td>دارای اشتراک</td>
            <td>milad@gmail.com</td>
            <td>ادمین</td>
            <td>116 روز</td>
            <td>1403/04/15</td>
            <td className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
              <FaTrash className="text-red-600 text-base md:text-lg" />
              <FaEye className="text-yellow-500 text-base md:text-lg" />
            </td>
          </Table.Row>
          <Table.Row>
            <td>1</td>
            <td>میلاد سلامیان</td>
            <td>Milad1385</td>
            <td>دارای اشتراک</td>
            <td>milad@gmail.com</td>
            <td>ادمین</td>
            <td>116 روز</td>
            <td>1403/04/15</td>
            <td className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
              <FaTrash className="text-red-600 text-base md:text-lg" />
              <FaEye className="text-yellow-500 text-base md:text-lg" />
            </td>
          </Table.Row>
        </Table.Body>
      </Table>
      <Pagination />
    </div>
  );
}

export default SubscriptionList;
