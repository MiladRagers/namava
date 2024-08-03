import Pagination from "@/components/modules/pagination/Pagination";
import Table from "@/components/modules/table/Table";
import Image from "next/image";
import React from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";

function ActorsList() {
  return (
    <div className="users-list mt-10 overflow-hidden bg-namavaBlack  rounded-md">
      <Table>
        <Table.Header>
          <th>شماره</th>
          <th>عکس</th>
          <th>نام</th>
          <th>لینک</th>
          <th>اینستاگرام</th>
          <th>توییتر</th>

          <th>تاریخ</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <td>1</td>
            <td className="!p-0 md:!p-5">
              <Image
                src="/images/actors/ac14.jpg"
                className="md:w-14 w-12 h-12 md:h-14 object-cover  rounded-full mx-auto"
                alt=""
                width={1920}
                height={1080}
              />
            </td>
            <td>کریس ایوانز</td>
            <td>CrisAvans</td>
            <td>Cris-Avans</td>
            <td>Cris-Avans</td>
            <td>1403/04/15</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaTrash className="text-red-600 text-base md:text-lg" />
                <FaPencil className="text-sky-600 text-base md:text-lg" />
              </div>
            </td>
          </Table.Row>
          <Table.Row>
            <td>1</td>
            <td className="!p-0 md:!p-5">
              <Image
                src="/images/actors/a6.jpg"
                className="md:w-14 w-12 h-12 md:h-14 object-cover  rounded-full mx-auto"
                alt=""
                width={1920}
                height={1080}
              />
            </td>
            <td>کریس ایوانز</td>
            <td>CrisAvans</td>
            <td>Cris-Avans</td>
            <td>Cris-Avans</td>
            <td>1403/04/15</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaTrash className="text-red-600 text-base md:text-lg" />
                <FaPencil className="text-sky-600 text-base md:text-lg" />
              </div>
            </td>
          </Table.Row>
          <Table.Row>
            <td>1</td>
            <td className="!p-0 md:!p-5">
              <Image
                src="/images/actors/ac13.jpg"
                className="md:w-14 w-12 h-12 md:h-14 object-cover  rounded-full mx-auto"
                alt=""
                width={1920}
                height={1080}
              />
            </td>
            <td>کریس ایوانز</td>
            <td>CrisAvans</td>
            <td>Cris-Avans</td>
            <td>Cris-Avans</td>
            <td>1403/04/15</td>
            <td>
              <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaTrash className="text-red-600 text-base md:text-lg" />
                <FaPencil className="text-sky-600 text-base md:text-lg" />
              </div>
            </td>
          </Table.Row>
          <Table.Row>
            <td>1</td>
            <td className="!p-0 md:!p-5">
              <Image
                src="/images/actors/ac12.jpg"
                className="md:w-14 w-12 h-12 md:h-14 object-cover  rounded-full mx-auto"
                alt=""
                width={1920}
                height={1080}
              />
            </td>
            <td>کریس ایوانز</td>
            <td>CrisAvans</td>
            <td>Cris-Avans</td>
            <td>Cris-Avans</td>
            <td>1403/04/15</td>
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

export default ActorsList;
