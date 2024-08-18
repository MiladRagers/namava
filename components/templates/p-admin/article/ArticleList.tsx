"use client";
import EmptyBox from "@/components/modules/p-admin/EmptyBox";
import Pagination from "@/components/modules/pagination/Pagination";
import Table from "@/components/modules/table/Table";
import Image from "next/image";
import React, { useOptimistic } from "react";
import { FaCheck, FaPencil, FaTrash, FaXmark } from "react-icons/fa6";

function ArticleList({ articles, counts }: any) {
  const [optimisticArticles, deleteOptimistc] = useOptimistic(
    articles,
    (allArticles, id) => {
      return allArticles.filter((article: any) => article._id !== id);
    }
  );
  return (
    <div className="users-list mt-10 overflow-hidden bg-namavaBlack  rounded-md">
      <Table>
        <Table.Header>
          <th>شماره</th>
          <th>عکس</th>
          <th>عنوان</th>
          <th>لینک</th>
          <th>نویسنده</th>
          <th>وضعیت</th>
          <th>تاریخ</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {articles.map((article: any, index: number) => (
            <Table.Row>
              <td>{index + 1}</td>
              <td className="!p-0 md:!p-5">
                <Image
                  src={article.image}
                  className="w-32 object-cover h-10 md:h-14 rounded-md mx-auto"
                  alt={article.title}
                  width={1920}
                  height={1080}
                />
              </td>
              <td>{article.title.slice(0, 26) + " ... "}</td>
              <td>{article.link}</td>
              <td>{article.creator.name}</td>
              <td>{article.isAccept ? "منتشر شده" : "پیش نویس"}</td>
              <td>{new Date(article.createdAt).toLocaleDateString("fa-IR")}</td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaTrash className="text-red-600 text-base md:text-lg" />
                  <FaPencil className="text-sky-600 text-base md:text-lg" />
                  <FaCheck className="text-green-500 text-base md:text-lg" />
                  <FaXmark className="text-amber-500 text-base md:text-lg" />
                </div>
              </td>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {optimisticArticles.length > 0 ? (
        <Pagination count={counts} />
      ) : (
        <EmptyBox title="اطلاعات مورد نظر یافت نشد" />
      )}
    </div>
  );
}

export default ArticleList;
