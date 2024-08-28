import Title from "@/components/modules/p-admin/Title";
import SessionList from "@/components/templates/p-admin/film/SessionList";
import { getAllEpisodes } from "@/src/libs/service/services";
import { TAdminPage } from "@/src/libs/types";
import React from "react";

async function page({ params, searchParams }: TAdminPage) {
  const { episodes, counts, name }: any = await getAllEpisodes(
    +searchParams.page,
    searchParams.q,
    params.id
  );
  return (
    <>
      <Title name={`سریال ${name}`} />;
      <SessionList episodes={JSON.parse(JSON.stringify(episodes))} />
    </>
  );
}

export default page;
