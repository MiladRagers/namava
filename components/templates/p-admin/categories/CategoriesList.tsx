"use client";
import ConfirmModal from "@/components/modules/modals/ConfirmModal";
import Modal from "@/components/modules/modals/Modal";
import EmptyBox from "@/components/modules/p-admin/EmptyBox";
import Pagination from "@/components/modules/pagination/Pagination";
import Table from "@/components/modules/table/Table";
import { deleteCategory } from "@/src/libs/actions/category";
import Image from "next/image";
import React from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";

type TList = {
  categories: any;
  counts: number;
};

function CategoriesList({ categories, counts }: TList) {
  return (
    <div className="users-list mt-10 overflow-hidden bg-namavaBlack  rounded-md">
      <Table>
        <Table.Header>
          <th>شماره</th>
          <th>عکس</th>
          <th>عنوان</th>
          <th>لینک</th>
          <th>پرنت</th>
          <th>تگ ها</th>
          <th>تاریخ</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {categories.map((category: any, index: number) => (
            <Table.Row key={category._id}>
              <td>{index + 1}</td>
              <td className="!p-0 md:!p-5">
                <Image
                  src={category.image}
                  className="w-32 object-cover h-10 md:h-14 rounded-md mx-auto"
                  alt=""
                  width={1920}
                  height={1080}
                />
              </td>
              <td>{category.title}</td>
              <td>{category.link}</td>
              <td>{category.parrent ? category.parrent.title : "------"}</td>
              <td>{category.tags.join(" ، ")}</td>
              <td>
                {new Date(category.createdAt).toLocaleDateString("fa-IR")}
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <Modal>
                    <Modal.Open name="delete">
                      <FaTrash className="text-red-600 text-base md:text-lg" />
                    </Modal.Open>
                    <Modal.Page name="delete">
                      <ConfirmModal action={deleteCategory} id={category._id} />
                    </Modal.Page>
                  </Modal>

                  <FaPencil className="text-sky-600 text-base md:text-lg" />
                </div>
              </td>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {categories.length > 0 ? (
        <Pagination count={counts} />
      ) : (
        <EmptyBox title="موردی که جستجو کردید یافت نشد" />
      )}
    </div>
  );
}

export default CategoriesList;
