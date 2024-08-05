import Title from "@/components/modules/p-admin/Title";
import AddNewMenu from "@/components/templates/p-admin/menus/AddNewMenu";
import MenusList from "@/components/templates/p-admin/menus/MenusList";
import { TAdminPage } from "@/src/libs/types";
import React from "react";

function MenusPage({ searchParams }: TAdminPage) {
  return (
    <div>
      <Title name="ایجاد منو" />
      <AddNewMenu />
      <Title name="لیست منو" />
      <MenusList />
    </div>
  );
}

export default MenusPage;
