import Title from "@/components/modules/p-admin/Title";
import AddNewArticle from "@/components/templates/p-admin/article/AddNewArticle";
import ArticleList from "@/components/templates/p-admin/article/ArticleList";
import { getAllMoviesWithOutPagination } from "@/src/libs/service/services";
import React from "react";

async function ArticlesPage() {
  const movies = await getAllMoviesWithOutPagination();
  return (
    <>
      <Title name="ایجاد مقاله جدید" />
      <AddNewArticle movies={JSON.parse(JSON.stringify(movies))} />
      <Title name="لیست مقاله ها" />
      <ArticleList />
    </>
  );
}

export default ArticlesPage;
