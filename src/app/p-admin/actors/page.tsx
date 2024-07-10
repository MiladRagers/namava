import Title from "@/components/modules/p-admin/Title";
import ActorsList from "@/components/templates/p-admin/actors/ActorsList";
import AddNewActor from "@/components/templates/p-admin/actors/AddNewActor";
import React from "react";

function ActorsPage() {
  return (
    <div>
      <Title name="ایجاد بازیگر" />
      <AddNewActor/>
      <Title name="لیست بازیگران و ستارگان" />
      <ActorsList/>
    </div>
  );
}

export default ActorsPage;
