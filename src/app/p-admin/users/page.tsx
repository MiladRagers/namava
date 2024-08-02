import React from "react";
import Title from "@/components/modules/p-admin/Title";
import AddUser from "@/components/templates/p-admin/users/AddUser";
import UsersList from "@/components/templates/p-admin/users/UsersList";
import { getAllUsers } from "@/src/libs/service/services";
import Search from "@/icons/Search";

async function UsersPage({
  searchParams,
}: {
  searchParams: { page: string; q: string };
}) {
  const { users, counts }: any = await getAllUsers(
    +searchParams.page,
    searchParams.q
  );
  return (
    <>
      <Title name="ایجاد کاربر" />
      <AddUser />
      <div className="flex items-start md:items-center justify-between flex-col md:flex-row gap-y-3">
        <Title name="لیست کاربران" />
        <Search />
      </div>
      <UsersList counts={counts} users={JSON.parse(JSON.stringify(users))} />
    </>
  );
}

export default UsersPage;
