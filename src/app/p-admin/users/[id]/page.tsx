import Title from "@/src/components/modules/p-admin/Title";
import AddUser from "@/src/components/templates/p-admin/users/AddUser";
import { TParams } from "@/src/libs/types";
import React from "react";

function page({ params }: TParams) {
  return (
    <>
      <Title name="ویرایش کاربر" />
      <AddUser status="update" />
    </>
  );
}

export default page;
