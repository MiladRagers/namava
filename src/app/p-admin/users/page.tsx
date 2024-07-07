import React from "react";
import Title from "@/components/modules/p-admin/Title";
import AddUser from "@/components/templates/p-admin/users/AddUser";
import UsersList from "@/components/templates/p-admin/users/UsersList";

function UsersPage() {
  return (
    <>
      <Title name="ایجاد کاربر" />
      <AddUser />
      <Title name="لیست کاربران" />
      <UsersList />
    </>
  );
}

export default UsersPage;
