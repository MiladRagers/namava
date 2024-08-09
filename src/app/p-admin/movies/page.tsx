import Title from "@/components/modules/p-admin/Title";
import AddNewFilm from "@/components/templates/p-admin/film/AddNewFilm";
import FilmList from "@/components/templates/p-admin/film/FilmList";
import {
  getAllMovies,
  getAllSubcategories,
  getStars,
} from "@/src/libs/service/services";
import { TAdminPage } from "@/src/libs/types";
import React from "react";

async function MoviesPage({ searchParams }: TAdminPage) {
  const [allStarts, allSubCategories, movies]: any = await Promise.all([
    getStars(),
    getAllSubcategories(),
    getAllMovies(+searchParams.page, searchParams.q),
  ]);


  console.log(movies.allMovies);
  

  return (
    <div>
      <Title name="ایجاد فیلم و سریال" />
      <AddNewFilm
        subCategories={JSON.parse(JSON.stringify(allSubCategories))}
        stars={JSON.parse(JSON.stringify(allStarts))}
      />
      <Title name="لیست فیلم و سریال ها" />
      <FilmList movies={JSON.parse(JSON.stringify(movies.allMovies))} />
    </div>
  );
}

export default MoviesPage;
