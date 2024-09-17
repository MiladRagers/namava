import EmptyBox from "@/src/components/modules/p-admin/EmptyBox";
import Pagination from "@/src/components/modules/pagination/Pagination";
import Table from "@/src/components/modules/table/Table";
import { formatDate } from "@/src/utils/funcs";
import Link from "next/link";
import React from "react";
import { FaCheck, FaEye, FaTrash, FaXmark } from "react-icons/fa6";

function TicketsList({ tickets, count }: any) {
  return (
    <div className="users-list mt-10 overflow-hidden bg-namavaBlack  rounded-md">
      <Table>
        <Table.Header>
          <th>شماره</th>
          <th>نام</th>
          <th>دپارتمان</th>
          <th>زیر مجموعه</th>
          <th>اولویت</th>
          <th>تاریخ</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {tickets.map((ticket: any, index: number) => (
            <Table.Row>
              <td
                className={
                  ticket.status === "answered" ? "bg-green-600" : "bg-red-600"
                }
              >
                {index + 1}
              </td>
              <td>{ticket.user.name}</td>
              <td>{ticket.department.title}</td>
              <td>{ticket.subDepartment.title}</td>

              <td>
                {ticket.priority === 1 && "زیاد"}
                {ticket.priority === 2 && "متوسط"}
                {ticket.priority === 3 && "کم"}
              </td>
              <td>{formatDate(ticket.createdAt)}</td>
              <td>
                <div
                  className={`${
                    ticket.status === "answered" ? "bg-green-600" : "bg-red-600"
                  } py-2 rounded-md font-IranMedium`}
                >
                  {ticket.status === "answered" && "پاسخ داده شده"}
                  {ticket.status === "pending" && "در انتظار پاسخ"}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-lg" />
                  {ticket.isOpen ? (
                    <FaXmark className="text-red-500 text-base md:text-lg" />
                  ) : (
                    <FaCheck className="text-green-500 text-base md:text-lg" />
                  )}
                  <Link href={"/p-admin/tickets/njbsnbxsb"}>
                    <FaEye className="text-namava text-base md:text-lg" />
                  </Link>
                </div>
              </td>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {tickets.length > 0 ? (
        <Pagination count={count} />
      ) : (
        <EmptyBox title="اطلاعات مورد نظر یافت نشد" />
      )}
    </div>
  );
}

export default TicketsList;
