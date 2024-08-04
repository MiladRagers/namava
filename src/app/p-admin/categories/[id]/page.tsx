import Search from "@/components/modules/p-admin/Search";
import Title from "@/components/modules/p-admin/Title";
import SubCategoriesList from "@/components/templates/p-admin/categories/SubCategoriesList";
import { getSubCategory } from "@/src/libs/service/services";
import React from "react";

async function page({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const { subCategories, counts, parrent }: any = await getSubCategory(
    params.id as string,
    +searchParams.page || 1,
    searchParams.q || ""
  );

  return (
    <>
      <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-y-3">
        <Title name={`دسته بندی (${parrent.title})`} />
        <Search />
      </div>
      <SubCategoriesList
        subCategories={JSON.parse(JSON.stringify(subCategories))}
        count={counts}
      />
    </>
  );
}

export default page;
