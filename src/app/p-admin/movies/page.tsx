import Title from "@/components/modules/p-admin/Title";
import AddNewFilm from "@/components/templates/p-admin/film/AddNewFilm";
import FilmList from "@/components/templates/p-admin/film/FilmList";
import { getAllSubcategories, getStars } from "@/src/libs/service/services";
import React from "react";

async function MoviesPage() {
  const [allStarts, allSubCategories] = await Promise.all([
    getStars(),
    getAllSubcategories(),
  ]);

  return (
    <div>
      <Title name="ایجاد فیلم و سریال" />
      <AddNewFilm
        subCategories={JSON.parse(JSON.stringify(allSubCategories))}
        stars={JSON.parse(JSON.stringify(allStarts))}
      />
      <Title name="لیست فیلم و سریال ها" />
      <FilmList />
    </div>
  );
}

export default MoviesPage;
