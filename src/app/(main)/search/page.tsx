import Movie from "@/components/modules/main/Movie/Movie";
import Filter from "@/components/templates/search/Filter";
import SearchBox from "@/components/templates/search/Search";
import SearchMovie from "@/icons/SearchMovie";
import { getAllSubcategories, searchMovies } from "@/src/libs/service/services";
import { TSearchParams } from "@/src/libs/types";

async function SearchPage({ searchParams }: TSearchParams) {
  const [movies, categories]: any = await Promise.all([
    searchMovies(
      searchParams?.q ?? "",
      searchParams?.type,
      searchParams?.genre,
      searchParams?.voice,
      searchParams?.country
    ),
    getAllSubcategories(),
  ]);

  const formatedCategories = categories.map((category: any) => ({
    id: String(category._id),
    name: category.title,
  }));

  return (
    <div className="flex container pt-24 pb-20 gap-x-8 min-h-screen text-white">
      <Filter
        categories={JSON.parse(JSON.stringify(formatedCategories))}
        className="hidden md:block"
      />
      <div className="w-full  md:mr-[350px]">
        <SearchBox
          categories={JSON.parse(JSON.stringify(formatedCategories))}
          search={searchParams?.q}
          movies={JSON.parse(JSON.stringify(movies))}
          q={searchParams?.q}
        />

        {movies.length > 0 ? (
          <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-16 pt-10">
            {movies.map((movie: any) => (
              <Movie
                key={movie._id}
                image={movie.mainImage}
                link={movie.link}
                title={movie.title}
                type={movie.type}
                showTime={movie.showTime}
                isLink
              />
            ))}
          </div>
        ) : (
          <div className="flex-center flex-col gap-y-4 mt-10">
            <SearchMovie />
            <p className="text-[#bab8b8] max-w-[400px] text-sm/6 text-center px-[18px]">
              عنوان فیلم، سریال یا بازیگر مورد نظر خود را جستجو کنید و یا از
              طریق فیلتر‌های موجود، فیلم و سریال مورد علاقه خود را پیدا کنید.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: "جستجو",
  };
}

export default SearchPage;
