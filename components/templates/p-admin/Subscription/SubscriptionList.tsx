import EmptyBox from "@/components/modules/p-admin/EmptyBox";
import Pagination from "@/components/modules/pagination/Pagination";
import Table from "@/components/modules/table/Table";
import React from "react";
import { FaEye, FaPencil, FaTrash } from "react-icons/fa6";

function SubscriptionList({ subscriptions, counts }: any) {
  return (
    <div className="users-list mt-10 overflow-hidden bg-namavaBlack  rounded-md">
      <Table>
        <Table.Header>
          <th>شماره</th>
          <th>عنوان</th>
          <th>اعتبار</th>
          <th>قیمت</th>
          <th>تخفیف</th>
          <th>سازنده</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {subscriptions.map((subscription: any, index: number) => (
            <Table.Row>
              <td>{index + 1}</td>
              <td>{subscription.title}</td>
              <td>{subscription.time} روز</td>
              <td>{subscription.price.toLocaleString("fa-IR")} تومان</td>
              <td>
                {subscription.discount ? `${subscription.discount} %` : "ندارد"}
              </td>
              <td>{subscription.creator.name}</td>
              <td className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                <FaTrash className="text-red-600 text-base md:text-lg" />
              </td>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {subscriptions.length ? (
        <Pagination count={counts} />
      ) : (
        <EmptyBox title="اطلاعات مورد نظر یافت نشد" />
      )}
    </div>
  );
}

export default SubscriptionList;
