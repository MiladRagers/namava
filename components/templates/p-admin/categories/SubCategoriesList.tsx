"use client";
import ConfirmModal from "@/components/modules/modals/ConfirmModal";
import Modal from "@/components/modules/modals/Modal";
import EmptyBox from "@/components/modules/p-admin/EmptyBox";
import Pagination from "@/components/modules/pagination/Pagination";
import Table from "@/components/modules/table/Table";
import Image from "next/image";
import React, { useOptimistic } from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";

function SubCategoriesList({
  subCategories,
  count,
}: {
  subCategories: any;
  count: number;
}) {
  const [optimisticSubs, deleteOptimistc] = useOptimistic(
    subCategories,
    (allSubs, id) => {
      return allSubs.filter((cat: any) => cat._id !== id);
    }
  );

  const deleteSubCategoryHandler = async (id: string) => {
    deleteOptimistc(id);
  };

  return (
    <div className="users-list mt-10 overflow-hidden bg-namavaBlack  rounded-md">
      <Table>
        <Table.Header>
          <th>شماره</th>
          <th>عنوان</th>
          <th>لینک</th>
          <th>پرنت</th>
          <th>تگ ها</th>
          <th>تاریخ</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {optimisticSubs.map((sub: any, index: number) => (
            <Table.Row key={sub._id}>
              <td>{index + 1}</td>
              <td>{sub.title}</td>
              <td>{sub.link}</td>
              <td>{sub.parrent ? sub.parrent.title : "------"}</td>
              <td>{sub.tags.join(" ، ")}</td>
              <td>{new Date(sub.createdAt).toLocaleDateString("fa-IR")}</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <Modal>
                    <Modal.Open name="delete">
                      <FaTrash className="text-red-600 text-base md:text-lg" />
                    </Modal.Open>
                    <Modal.Page name="delete">
                      <ConfirmModal
                        onAction={deleteSubCategoryHandler}
                        id={sub._id}
                      />
                    </Modal.Page>
                  </Modal>

                  <FaPencil className="text-sky-600 text-base md:text-lg" />
                </div>
              </td>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {optimisticSubs.length > 0 ? (
        <Pagination count={count} />
      ) : (
        <EmptyBox title="اطلاعات مورد نظر شما یافت نشد" />
      )}
    </div>
  );
}

export default SubCategoriesList;
