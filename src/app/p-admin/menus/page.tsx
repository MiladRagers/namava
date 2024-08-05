import Title from "@/components/modules/p-admin/Title";
import AddNewMenu from "@/components/templates/p-admin/menus/AddNewMenu";
import MenusList from "@/components/templates/p-admin/menus/MenusList";
import { getAllMenus } from "@/src/libs/service/services";
import { TAdminPage } from "@/src/libs/types";
import React from "react";

async function MenusPage({ searchParams }: TAdminPage) {
  const { allMenus, counts }: any = await getAllMenus(
    +searchParams.page,
    searchParams.q
  );
  return (
    <div>
      <Title name="ایجاد منو" />
      <AddNewMenu />
      <Title name="لیست منو" />
      <MenusList menus={JSON.parse(JSON.stringify(allMenus))} count={counts} />
    </div>
  );
}

export default MenusPage;
