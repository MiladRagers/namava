import Table from "@/src/components/modules/table/Table";
import React from "react";
import { FaEye, FaPencil, FaRegCircleXmark, FaTrash } from "react-icons/fa6";
import Pagination from "@/src/components/modules/pagination/Pagination";
import { MdCheckCircleOutline } from "react-icons/md";
import Link from "next/link";
import Filter from "@/src/components/modules/Filter/Filter";

function page() {
  return (
    <div className="text-white">
      <Filter
        filterField="status"
        options={[
          { label: "همه", slug: "all" },
          { label: "موفق", slug: "success" },
          { label: "ناموفق", slug: "unsuccess" },
          { label: "پرداخت", slug: "paid" },
        ]}
      />
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
                <Link href={"/p-user/orders/1"}>
                  <FaEye className="text-xl text-namava" />
                </Link>
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
                <Link href={"/p-user/orders/1"}>
                  <FaEye className="text-xl text-namava" />
                </Link>
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
                <Link href={"/p-user/orders/1"}>
                  <FaEye className="text-xl text-namava" />
                </Link>
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
                <Link href={"/p-user/orders/1"}>
                  <FaEye className="text-xl text-namava" />
                </Link>
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
                <Link href={"/p-user/orders/1"}>
                  <FaEye className="text-xl text-namava" />
                </Link>
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
                <Link href={"/p-user/orders/1"}>
                  <FaEye className="text-xl text-namava" />
                </Link>
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
