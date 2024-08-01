import Search from "@/components/modules/p-admin/Search";
import Title from "@/components/modules/p-admin/Title";
import AddCategories from "@/components/templates/p-admin/categories/AddCategory";
import CategoriesList from "@/components/templates/p-admin/categories/CategoriesList";
import { getAllCategories } from "@/src/libs/service/services";
import React from "react";

async function CategoriesPage({
  searchParams,
}: {
  searchParams: { page: string; q: string };
}) {
  const { categories, counts }: any = await getAllCategories(
    +searchParams.page,
    searchParams.q
  );
  return (
    <>
      <Title name="ایجاد دسته بندی" />
      <AddCategories />
      <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-y-3">
        <Title name="لیست دسته بندی ها" />
        <Search />
      </div>
      <CategoriesList categories={categories} counts={counts}/>
    </>
  );
}

export default CategoriesPage;
