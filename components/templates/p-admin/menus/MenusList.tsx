"use client";
import EmptyBox from "@/components/modules/p-admin/EmptyBox";
import Pagination from "@/components/modules/pagination/Pagination";
import Table from "@/components/modules/table/Table";
import Image from "next/image";
import React, { useOptimistic } from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";

function MenusList({ menus, count }: { menus: any; count: number }) {
  const [optimisticMenus, deleteOptimistc] = useOptimistic(
    menus,
    (allMenus, id) => {
      return allMenus.filter((menu: any) => menu._id !== id);
    }
  );
  return (
    <div className="users-list mt-10 overflow-hidden bg-namavaBlack  rounded-md">
      <Table>
        <Table.Header>
          <th>شماره</th>
          <th>عنوان</th>
          <th>لینک</th>
          <th>پرنت</th>
          <th>تاریخ</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {optimisticMenus.map((menu: any, index: number) => (
            <Table.Row key={menu._id}>
              <td>{index + 1}</td>
              <td>{menu.title}</td>
              <td>{menu.link}</td>
              <td>{menu.parrent ? menu.parrent.title : "------"}</td>
              <td>{new Date(menu.createdAt).toLocaleDateString("fa-IR")}</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-lg" />
                  <FaPencil className="text-sky-600 text-base md:text-lg" />
                </div>
              </td>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {optimisticMenus.length > 0 ? (
        <Pagination count={count} />
      ) : (
        <EmptyBox title="اطلاعات مورد نظر یافت نشد" />
      )}
    </div>
  );
}

export default MenusList;
