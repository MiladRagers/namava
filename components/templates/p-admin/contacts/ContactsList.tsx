import Pagination from "@/components/modules/pagination/Pagination";
import Table from "@/components/modules/table/Table";
import React from "react";
import { FaCheck, FaEye, FaPencil, FaRegStar, FaStar, FaTrash, FaXmark } from "react-icons/fa6";
import { MdQuestionAnswer } from "react-icons/md";

function ContactsList() {
  return (
    <div className="users-list mt-10 overflow-hidden bg-namavaBlack  rounded-md">
      <Table>
        <Table.Header>
          <th>شماره</th>
          <th>نام</th>
          <th>ایمیل</th>
          <th>وضعیت</th>
          <th>تاریخ</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <td className="bg-red-700 text-white">1</td>
            <td>میلاد سلامیان</td>
            <td>milad@gmail.com</td>
            <td>
                پاسخ داده شده
            </td>
            <td>1403/04/05</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaTrash className="text-red-600 text-base md:text-lg" />
                
                <MdQuestionAnswer className="text-green-600 text-base md:text-xl" />
                <FaEye className="text-namava text-base md:text-lg" />
              </div>
            </td>
          </Table.Row>
          <Table.Row>
            <td className="bg-green-700 text-white">1</td>
            <td>میلاد سلامیان</td>
            <td>milad@gmail.com</td>
            <td>
                پاسخ داده شده
            </td>
            <td>1403/04/05</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaTrash className="text-red-600 text-base md:text-lg" />
                
                <MdQuestionAnswer className="text-green-600 text-base md:text-xl" />
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

export default ContactsList;
