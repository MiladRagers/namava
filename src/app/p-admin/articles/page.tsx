import Title from "@/components/modules/p-admin/Title";
import AddNewArticle from "@/components/templates/p-admin/article/AddNewArticle";
import ArticleList from "@/components/templates/p-admin/article/ArticleList";
import React from "react";

function ArticlesPage() {
  return (
    <>
      <Title name="ایجاد مقاله جدید" />
      <AddNewArticle />
      <Title name="لیست مقاله ها" />
      <ArticleList />
    </>
  );
}

export default ArticlesPage;
