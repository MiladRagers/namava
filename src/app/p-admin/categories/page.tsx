import Title from "@/components/modules/p-admin/Title";
import AddCategories from "@/components/templates/p-admin/categories/AddCategory";
import CategoriesList from "@/components/templates/p-admin/categories/CategoriesList";
import React from "react";

function CategoriesPage({ searchParams }: { searchParams: { page: string } }) {
  return (
    <>
      <Title name="ایجاد دسته بندی" />
      <AddCategories />
      <Title name="لیست دسته بندی ها" />
      <CategoriesList page={searchParams.page} />
    </>
  );
}

export default CategoriesPage;
