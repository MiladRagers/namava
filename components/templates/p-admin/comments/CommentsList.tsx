"use client";
import DetailModal from "@/components/modules/modals/DetailModal";
import Modal from "@/components/modules/modals/Modal";
import Pagination from "@/components/modules/pagination/Pagination";
import Table from "@/components/modules/table/Table";
import React, { useOptimistic } from "react";
import {
  FaCheck,
  FaEye,
  FaPencil,
  FaRegStar,
  FaStar,
  FaTrash,
} from "react-icons/fa6";

function CommentsList({ comments, counts }: any) {
  const [optimisticComments, deleteOptimistc] = useOptimistic(
    comments,
    (allComments, id) => {
      return allComments.filter((comment: any) => comment._id !== id);
    }
  );

  return (
    <div className="users-list mt-10 overflow-hidden bg-namavaBlack  rounded-md">
      <Table>
        <Table.Header>
          <th>شماره</th>
          <th>نام</th>
          <th>فیلم</th>
          <th>امتیاز</th>
          <th>وضعیت</th>
          <th>تاریخ</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {optimisticComments.map((comment: any, index: number) => (
            <Table.Row>
              <td
                className={`text-white ${
                  comment.isAccept ? "bg-green-700" : "bg-red-700"
                }`}
              >
                {index + 1}
              </td>
              <td>{comment.user.name}</td>
              <td>{comment.movie.title}</td>
              <td>
                <div className="flex items-center gap-x-0.5 justify-center">
                  {Array(comment.score)
                    .fill(0)
                    .map((star, index) => (
                      <FaStar className="text-amber-400" key={index} />
                    ))}

                  {Array(5 - comment.score)
                    .fill(0)
                    .map((star, index) => (
                      <FaRegStar className="text-amber-400" key={index} />
                    ))}
                </div>
              </td>
              <td>{comment.isAccept ? "تایید شده" : "تایید نشده"}</td>
              <td>{new Date(comment.createdAt).toLocaleDateString("fa-IR")}</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <Modal>
                    <FaTrash className="text-red-600 text-base md:text-lg" />
                    <FaPencil className="text-sky-600 text-base md:text-lg" />
                    <FaCheck className="text-green-500 text-base md:text-lg" />
                    <Modal.Open name="detail">
                      <FaEye className="text-amber-400 text-base md:text-lg" />
                    </Modal.Open>
                    <Modal.Page name="detail">
                      <DetailModal msg={comment.content} />
                    </Modal.Page>
                  </Modal>
                </div>
              </td>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Pagination />
    </div>
  );
}

export default CommentsList;
