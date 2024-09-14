import FavList from "@/src/components/templates/p-user/FavList";
import { getLikesMovies } from "@/src/libs/service/services";
import { IWishList, TSearchParams, TWish } from "@/src/libs/types";

async function page({ searchParams }: TSearchParams) {
  const { movies, count }: IWishList = await getLikesMovies(
    +searchParams?.page
  );
  return (
    <>
      <FavList movies={JSON.parse(JSON.stringify(movies))} count={count} />
    </>
  );
}

export default page;
