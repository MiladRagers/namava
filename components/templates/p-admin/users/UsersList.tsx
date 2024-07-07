import Table from "@/components/modules/table/Table";
import React from "react";
import { FaEye, FaPencil, FaTrash } from "react-icons/fa6";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function UsersList() {
  return (
    <div className="users-list mt-10 overflow-hidden bg-namavaBlack  rounded-md">
      <Table>
        <Table.Header>
          <th>شماره</th>
          <th>نام</th>
          <th>نام کاربری</th>
          <th>شماره تلفن</th>
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
            <td>09336084013</td>
            <td>milad@gmail.com</td>
            <td>ادمین</td>
            <td>116 روز</td>
            <td>1403/04/15</td>
            <td className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
              <FaTrash className="text-red-600 text-base md:text-lg" />
              <FaPencil className="text-sky-600 text-base md:text-lg" />
              <FaEye className="text-yellow-500 text-base md:text-lg" />
            </td>
          </Table.Row>
          <Table.Row>
            <td>1</td>
            <td>میلاد سلامیان</td>
            <td>Milad1385</td>
            <td>09336084013</td>
            <td>milad@gmail.com</td>
            <td>ادمین</td>
            <td>116 روز</td>
            <td>1403/04/15</td>
            <td className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
              <FaTrash className="text-red-600 text-base md:text-lg" />
              <FaPencil className="text-sky-600 text-base md:text-lg" />
              <FaEye className="text-yellow-500 text-base md:text-lg" />
            </td>
          </Table.Row>
          <Table.Row>
            <td>1</td>
            <td>میلاد سلامیان</td>
            <td>Milad1385</td>
            <td>09336084013</td>
            <td>milad@gmail.com</td>
            <td>ادمین</td>
            <td>116 روز</td>
            <td>1403/04/15</td>
            <td className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
              <FaTrash className="text-red-600 text-base md:text-lg" />
              <FaPencil className="text-sky-600 text-base md:text-lg" />
              <FaEye className="text-yellow-500 text-base md:text-lg" />
            </td>
          </Table.Row>
          <Table.Row>
            <td>1</td>
            <td>میلاد سلامیان</td>
            <td>Milad1385</td>
            <td>09336084013</td>
            <td>milad@gmail.com</td>
            <td>ادمین</td>
            <td>116 روز</td>
            <td>1403/04/15</td>
            <td className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
              <FaTrash className="text-red-600 text-base md:text-lg" />
              <FaPencil className="text-sky-600 text-base md:text-lg" />
              <FaEye className="text-yellow-500 text-base md:text-lg" />
            </td>
          </Table.Row>
          <Table.Row>
            <td>1</td>
            <td>میلاد سلامیان</td>
            <td>Milad1385</td>
            <td>09336084013</td>
            <td>milad@gmail.com</td>
            <td>ادمین</td>
            <td>116 روز</td>
            <td>1403/04/15</td>
            <td className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
              <FaTrash className="text-red-600 text-base md:text-lg" />
              <FaPencil className="text-sky-600 text-base md:text-lg" />
              <FaEye className="text-yellow-500 text-base md:text-lg" />
            </td>
          </Table.Row>
          <Table.Row>
            <td>1</td>
            <td>میلاد سلامیان</td>
            <td>Milad1385</td>
            <td>09336084013</td>
            <td>milad@gmail.com</td>
            <td>ادمین</td>
            <td>116 روز</td>
            <td>1403/04/15</td>
            <td className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
              <FaTrash className="text-red-600 text-base md:text-lg" />
              <FaPencil className="text-sky-600 text-base md:text-lg" />
              <FaEye className="text-yellow-500 text-base md:text-lg" />
            </td>
          </Table.Row>
        </Table.Body>
      </Table>
      <div className="flex items-center justify-between text-white rounded-b-md bg-[#363636] px-10 py-4 border-t border-zinc-400">
        <p className="font-Dana">
          <span className="font-bold">1</span> تا <span className="font-bold">2</span> - از <span className="font-bold">20</span> تا
        </p>
        <div className="flex items-center gap-x-2">
          <button className="flex-center font-IranMedium w-[80px] hover:bg-namava transition-all gap-x-2 py-1 rounded-md flex items-center">
            <HiChevronRight />
            بعدی
          </button>
          <button className="flex-center font-IranMedium w-[80px] hover:bg-namava transition-all gap-x-2 py-1 rounded-md flex items-center">
            قبلی
            <HiChevronLeft />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UsersList;
