import Title from "@/components/modules/p-admin/Title";
import AddNewFilm from "@/components/templates/p-admin/film/AddNewFilm";
import FilmList from "@/components/templates/p-admin/film/FilmList";
import React from "react";

function MoviesPage() {
  return (
    <div>
      <Title name="ایجاد فیلم و سریال" />
      <AddNewFilm/>
      <Title name="لیست فیلم و سریال ها" />
      <FilmList/>
    </div>
  );
}

export default MoviesPage;
