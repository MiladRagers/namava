import Title from "@/components/modules/p-admin/Title";
import SubCategoriesList from "@/components/templates/p-admin/categories/SubCategoriesList";
import { getSubCategory } from "@/src/libs/service/services";
import { TParams } from "@/src/libs/types";
import React from "react";

async function page({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const { subCategories, counts }: any = await getSubCategory(
    params.href as string,
    +searchParams.page,
    searchParams.q
  );
  console.log(subCategories);
  
  return (
    <>
      {/* <Title name="لیست زیر دسته بندی ها" />
      <SubCategoriesList
        subCategories={JSON.parse(JSON.stringify(subCategories))}
        count={counts}
      /> */}
    </>
  );
}

export default page;
