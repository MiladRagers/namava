import CategoryCard from "@/src/components/templates/category/CategoryCard";
import { getAllCategories, getCategories } from "@/src/libs/service/services";
import React from "react";

async function Categories() {
  const categories : any = await getCategories();

  return (
    <div className="text-white container pt-20 pb-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {categories.map((category: any) => (
          <CategoryCard
            image={category.image}
            title={category.title}
            link={`/category/${category._id}`}
          />
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: "دسته بندی ها",
  };
}

export default Categories;
