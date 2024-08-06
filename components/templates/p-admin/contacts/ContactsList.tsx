"use client";
import ConfirmModal from "@/components/modules/modals/ConfirmModal";
import Modal from "@/components/modules/modals/Modal";
import EmptyBox from "@/components/modules/p-admin/EmptyBox";
import Pagination from "@/components/modules/pagination/Pagination";
import Table from "@/components/modules/table/Table";
import { deleteContact } from "@/src/libs/actions/contactUs";
import React, { useOptimistic } from "react";
import toast from "react-hot-toast";
import { FaEye, FaTrash } from "react-icons/fa6";
import { MdQuestionAnswer } from "react-icons/md";

function ContactsList({ contacts, count }: { contacts: any; count: number }) {
  const [optimisticContact, deleteOptimistc] = useOptimistic(
    contacts,
    (allContacts, id) => {
      return allContacts.filter((contact: any) => contact._id !== id);
    }
  );

  const deleteContactHnadler = async (id: string) => {
    deleteOptimistc(id);
    const res = await deleteContact(id);
    if (res?.status === 200) {
      return toast.success(`${res?.message}`);
    }

    toast.error(`${res?.message}`);
  };
  return (
    <div className="users-list mt-10 overflow-hidden bg-namavaBlack  rounded-md">
      <Table>
        <Table.Header>
          <th>شماره</th>
          <th>نام</th>
          <th>ایمیل</th>
          <th>وضعیت</th>
          <th>دپارتمان</th>
          <th>تاریخ</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {optimisticContact.map((contact: any, index: number) => (
            <Table.Row>
              <td
                className={`text-white ${
                  contact.isAnswer ? "bg-green-700" : "bg-red-600"
                }`}
              >
                {index + 1}
              </td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.isAnswer ? "پاسخ داده شده" : "بدون پاسخ"}</td>
              <td>{contact.department.title}</td>
              <td>{new Date(contact.createdAt).toLocaleDateString("fa-IR")}</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <Modal>
                    <Modal.Open name="delete">
                      <FaTrash className="text-red-600 text-base md:text-lg" />
                    </Modal.Open>
                    <Modal.Page name="delete">
                      <ConfirmModal
                        id={contact._id}
                        onAction={deleteContactHnadler}
                      />
                    </Modal.Page>
                  </Modal>

                  <MdQuestionAnswer className="text-green-600 text-base md:text-xl" />
                  <FaEye className="text-namava text-base md:text-lg" />
                </div>
              </td>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {optimisticContact.length > 0 ? (
        <Pagination count={count} />
      ) : (
        <EmptyBox title="اطلاعات مورد نظر یافت نشد" />
      )}
    </div>
  );
}

export default ContactsList;
