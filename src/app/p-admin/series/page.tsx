import Title from "@/src/components/modules/p-admin/Title";
import AddNewSession from "@/src/components/templates/p-admin/film/AddNewSession";
import { getAllSeries } from "@/src/libs/service/services";
import React from "react";

async function SeriesPage() {
  const allSeries = await getAllSeries();
  return (
    <>
      <Title name="ایجاد قسمت سریال" />
      <AddNewSession series={JSON.parse(JSON.stringify(allSeries))} />
    </>
  );
}

export default SeriesPage;
