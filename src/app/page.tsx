import MovieSlider from "@/components/modules/main/MovieSlider/MovieSlider";
import HeaderSlider from "@/components/templates/index/Header/Slider";
import Slider from "@/components/templates/index/Slider/Slider";
import StarsSlider from "@/components/modules/main/StarsSlider/StarsSlider";
import Collections from "@/components/templates/index/Collections/Collections";
import {
  checkUserSubscription,
  getAllCollectionSlider,
  getAllSlidersMovies,
  getMovies,
  getStars,
  getUserBookmarks,
} from "../libs/service/services";

export default async function Home() {
  const [
    slides,
    allStars,
    movies,
    collections,
    userBookmarks,
    subscription,
  ]: any = await Promise.all([
    getAllSlidersMovies(),
    getStars(),
    getMovies(),
    getAllCollectionSlider(),
    getUserBookmarks(),
    checkUserSubscription(),
  ]);

  const userMoviesBookmark = userBookmarks.map(
    (bookmark: any) => bookmark.movie._id
  );


  

  return (
    <>
      <HeaderSlider
        subscription={JSON.parse(JSON.stringify(subscription))}
        slides={JSON.parse(JSON.stringify(slides))}
      />
      <Slider />
      <div className="text-white">
        {Object.keys(movies).map(async (category, index) => {
          return (
            <div key={category}>
              <MovieSlider
                movies={JSON.parse(JSON.stringify(movies[category]))}
                userBookmarks={JSON.parse(JSON.stringify(userMoviesBookmark))}
                title={`${category}`}
              />
            </div>
          );
        })}
        <StarsSlider allStars={allStars} title="ستارگان" />
        <Collections
          collections={JSON.parse(JSON.stringify(collections))}
          title="مجموعه فیلم ها"
        />
      </div>
    </>
  );
}
