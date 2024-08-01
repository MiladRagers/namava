"use client";
import ConfirmModal from "@/components/modules/modals/ConfirmModal";
import Modal from "@/components/modules/modals/Modal";
import EmptyBox from "@/components/modules/p-admin/EmptyBox";
import Pagination from "@/components/modules/pagination/Pagination";
import Table from "@/components/modules/table/Table";
import { deleteUser } from "@/src/libs/actions/user";
import React, { useOptimistic } from "react";
import toast from "react-hot-toast";
import { FaPencil, FaTrash } from "react-icons/fa6";

type TUser = {
  users: any;
  counts: number;
};

function UsersList({ users, counts }: TUser) {
  const [optimisticUser, deleteOptimisticUser] = useOptimistic(
    users,
    (state, id) => {
      return state.filter((user: any) => user._id !== id);
    }
  );

  const deleteUserHandler = async (id: string) => {
    deleteOptimisticUser(id);
    const res = await deleteUser(id);
    if (res?.status === 200) {
      return toast.success(`${res.message}`);
    }
    toast.error(`${res?.message}`);
  };
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
          {optimisticUser.map((user: any, index: number) => (
            <Table.Row key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.role === "ADMIN" ? "ادمین" : "کاربر عادی"}</td>
              <td>116 روز</td>
              <td> {new Date(user.createdAt).toLocaleDateString("fa-IR")}</td>
              <td className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <Modal>
                  <Modal.Open name="delete">
                    <FaTrash className="text-red-600 text-base md:text-lg" />
                  </Modal.Open>
                  <Modal.Page name="delete">
                    <ConfirmModal id={user._id} onAction={deleteUserHandler} />
                  </Modal.Page>
                </Modal>
                <FaPencil className="text-sky-600 text-base md:text-lg" />
              </td>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {optimisticUser.length > 0 ? (
        <Pagination count={counts} />
      ) : (
        <EmptyBox title="موردی که جستجو کردید یافت نشد" />
      )}
    </div>
  );
}

export default UsersList;
