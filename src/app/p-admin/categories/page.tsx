import Search from "@/components/modules/p-admin/Search";
import Title from "@/components/modules/p-admin/Title";
import AddCategories from "@/components/templates/p-admin/categories/AddCategory";
import CategoriesList from "@/components/templates/p-admin/categories/CategoriesList";
import SubCategoriesList from "@/components/templates/p-admin/categories/SubCategoriesList";
import { getAllCategories } from "@/src/libs/service/services";
import { TAdminPage } from "@/src/libs/types";
import React from "react";

async function CategoriesPage({ searchParams }: TAdminPage) {
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
      <CategoriesList
        categories={JSON.parse(JSON.stringify(categories))}
        counts={counts}
      />
    </>
  );
}

export default CategoriesPage;
