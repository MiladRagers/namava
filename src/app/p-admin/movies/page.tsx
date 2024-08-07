import Title from "@/components/modules/p-admin/Title";
import AddNewFilm from "@/components/templates/p-admin/film/AddNewFilm";
import FilmList from "@/components/templates/p-admin/film/FilmList";
import { getStars } from "@/src/libs/service/services";
import React from "react";

async function MoviesPage() {
  const allStarts = await getStars();
  return (
    <div>
      <Title name="ایجاد فیلم و سریال" />
      <AddNewFilm stars={JSON.parse(JSON.stringify(allStarts))} />
      <Title name="لیست فیلم و سریال ها" />
      <FilmList />
    </div>
  );
}

export default MoviesPage;
