import Title from "@/components/modules/p-admin/Title";
import AddNewMenu from "@/components/templates/p-admin/menus/AddNewMenu";
import MenusList from "@/components/templates/p-admin/menus/MenusList";
import React from "react";

function MenusPage() {
  return (
    <div>
      <Title name="ایجاد منو" />
      <AddNewMenu/>
      <Title name="لیست منو" />
      <MenusList/>
    </div>
  );
}

export default MenusPage;
