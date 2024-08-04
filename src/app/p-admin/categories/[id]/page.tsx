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
      <Title name={`دسته بندی (${parrent.title})`} />
      <SubCategoriesList
        subCategories={JSON.parse(JSON.stringify(subCategories))}
        count={counts}
      />
    </>
  );
}

export default page;
