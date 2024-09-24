import Title from "@/src/components/modules/p-admin/Title";
import AddNewSession from "@/src/components/templates/p-admin/film/AddNewSession";
import { getAllSeries } from "@/src/libs/service/services";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "ایجاد قسمت جدید",
  description: "از این صفحه میتوان برای ایجاد قسمت جدید یک سریال استفاده کرد ",
};

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
