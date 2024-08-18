import Title from "@/components/modules/p-admin/Title";
import AddNewArticle from "@/components/templates/p-admin/article/AddNewArticle";
import ArticleList from "@/components/templates/p-admin/article/ArticleList";
import {
  getAllArticles,
  getAllMoviesWithOutPagination,
} from "@/src/libs/service/services";
import { TAdminPage } from "@/src/libs/types";
import React from "react";

async function ArticlesPage({ searchParams }: TAdminPage) {
  const [movies, data]: any = await Promise.all([
    getAllMoviesWithOutPagination(),
    getAllArticles(+searchParams.page, searchParams.q),
  ]);
  return (
    <>
      <Title name="ایجاد مقاله جدید" />
      <AddNewArticle movies={JSON.parse(JSON.stringify(movies))} />
      <Title name="لیست مقاله ها" />
      <ArticleList
        articles={JSON.parse(JSON.stringify(data.articles))}
        counts={data.counts}
      />
    </>
  );
}

export default ArticlesPage;
