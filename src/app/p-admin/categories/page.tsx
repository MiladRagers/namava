import Title from "@/components/modules/p-admin/Title";
import AddCategories from "@/components/templates/p-admin/categories/AddCategory";
import React from "react";

function CategoriesPage() {
  return (
    <>
      <Title name="ایجاد دسته بندی" />
      <AddCategories />
      <Title name="لیست دسته بندی ها" />
    </>
  );
}

export default CategoriesPage;
