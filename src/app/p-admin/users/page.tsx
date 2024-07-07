import Title from "@/components/modules/p-admin/Title";
import UsersList from "@/components/templates/p-admin/users/UsersList";
import React from "react";

function UsersPage() {
  return (
    <>
      <Title name="لیست کاربران" />
      <UsersList />
    </>
  );
}

export default UsersPage;
