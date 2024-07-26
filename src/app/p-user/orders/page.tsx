import Table from "@/components/modules/table/Table";
import React from "react";
import { FaEye, FaPencil, FaRegCircleXmark, FaTrash } from "react-icons/fa6";
import Pagination from "@/components/modules/pagination/Pagination";
import { MdCheckCircleOutline } from "react-icons/md";
import Link from "next/link";

function page() {
  return (
    <div className="text-white">
      <div className="flex items-center justify-between gap-x-2 font-Dana bg-namavaBlack p-1 child:transition-all child:cursor-pointer text-xs md:text-sm rounded-md w-[250px]">
        <div className="hover:bg-namava hover:text-white py-1 px-1 rounded-md">
          همه
        </div>
        <div className="hover:bg-namava hover:text-white py-1 px-1 rounded-md">
          موفق
        </div>
        <div className="hover:bg-namava hover:text-white py-1 px-1 rounded-md">
          ناموفق
        </div>
        <div className="hover:bg-namava hover:text-white py-1 px-1 rounded-md">
          پرداخت شده
        </div>
      </div>

      <div className="users-list mt-5 overflow-hidden bg-namavaBlack  rounded-md">
        <Table>
          <Table.Header>
            <th>ردیف</th>
            <th>زمان سفارش</th>
            <th>نوع سفارش</th>
            <th>شماره سفارش</th>
            <th>مبلغ پرداختی</th>
            <th>وضعیت پرداخت</th>
            <th></th>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <td>1</td>
              <td>۰۳/۰۵/۰۴ - ۰۷:۰۳</td>
              <td>یک ماهه</td>
              <td>۱۴۰۳۰۵۰۴-۱۷۳۳-۲۹۳۷</td>
              <td>۱۲۳,۲۰۰ تومان</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 text-red-700">
                  <FaRegCircleXmark className="text-xl" />
                  <span>ناموفق</span>
                </div>
              </td>
              <td>
                <Link href={"/p-user/orders/1"}><FaEye className="text-xl text-namava"/></Link>
              </td>
            </Table.Row>
            <Table.Row>
              <td>2</td>
              <td>۰۳/۰۵/۰۴ - ۰۷:۰۳</td>
              <td>یک ماهه</td>
              <td>۱۴۰۳۰۵۰۴-۱۷۳۳-۲۹۳۷</td>
              <td>۱۲۳,۲۰۰ تومان</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 text-green-700">
                  <MdCheckCircleOutline className="text-2xl" />
                  <span>موفق</span>
                </div>
              </td>
              <td>
                <Link href={"/p-user/orders/1"}><FaEye className="text-xl text-namava"/></Link>
              </td>
            </Table.Row>
            <Table.Row>
              <td>1</td>
              <td>۰۳/۰۵/۰۴ - ۰۷:۰۳</td>
              <td>یک ماهه</td>
              <td>۱۴۰۳۰۵۰۴-۱۷۳۳-۲۹۳۷</td>
              <td>۱۲۳,۲۰۰ تومان</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 text-red-700">
                  <FaRegCircleXmark className="text-xl" />
                  <span>ناموفق</span>
                </div>
              </td>
              <td>
                <Link href={"/p-user/orders/1"}><FaEye className="text-xl text-namava"/></Link>
              </td>
            </Table.Row>
            <Table.Row>
              <td>2</td>
              <td>۰۳/۰۵/۰۴ - ۰۷:۰۳</td>
              <td>یک ماهه</td>
              <td>۱۴۰۳۰۵۰۴-۱۷۳۳-۲۹۳۷</td>
              <td>۱۲۳,۲۰۰ تومان</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 text-green-700">
                  <MdCheckCircleOutline className="text-2xl" />
                  <span>موفق</span>
                </div>
              </td>
              <td>
                <Link href={"/p-user/orders/1"}><FaEye className="text-xl text-namava"/></Link>
              </td>
            </Table.Row>
            <Table.Row>
              <td>1</td>
              <td>۰۳/۰۵/۰۴ - ۰۷:۰۳</td>
              <td>یک ماهه</td>
              <td>۱۴۰۳۰۵۰۴-۱۷۳۳-۲۹۳۷</td>
              <td>۱۲۳,۲۰۰ تومان</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 text-red-700">
                  <FaRegCircleXmark className="text-xl" />
                  <span>ناموفق</span>
                </div>
              </td>
              <td>
                <Link href={"/p-user/orders/1"}><FaEye className="text-xl text-namava"/></Link>
              </td>
            </Table.Row>
            <Table.Row>
              <td>1</td>
              <td>۰۳/۰۵/۰۴ - ۰۷:۰۳</td>
              <td>یک ماهه</td>
              <td>۱۴۰۳۰۵۰۴-۱۷۳۳-۲۹۳۷</td>
              <td>۱۲۳,۲۰۰ تومان</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 text-red-700">
                  <FaRegCircleXmark className="text-xl" />
                  <span>ناموفق</span>
                </div>
              </td>
              <td>
                <Link href={"/p-user/orders/1"}><FaEye className="text-xl text-namava"/></Link>
              </td>
            </Table.Row>
          </Table.Body>
        </Table>
        <Pagination />
      </div>
    </div>
  );
}

export default page;
