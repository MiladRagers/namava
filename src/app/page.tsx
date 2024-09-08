import MovieSlider from "@/src/components/modules/main/MovieSlider/MovieSlider";
import HeaderSlider from "@/src/components/templates/index/Header/Slider";
import Slider from "@/src/components/templates/index/Slider/Slider";
import StarsSlider from "@/src/components/modules/main/StarsSlider/StarsSlider";
import Collections from "@/src/components/templates/index/Collections/Collections";
import {
  checkUserSubscription,
  getAllCollectionSlider,
  getAllSlidersMovies,
  getMovies,
  getStars,
  getUserBookmarks,
} from "../libs/service/services";
import { authUser } from "../utils/serverHelper";

export default async function Home() {
  const [
    slides,
    allStars,
    movies,
    collections,
    userBookmarks,
    subscription,
    userInfo,
  ]: any = await Promise.all([
    getAllSlidersMovies(),
    getStars(),
    getMovies(),
    getAllCollectionSlider(),
    getUserBookmarks(),
    checkUserSubscription(),
    authUser(),
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
      <Slider slides={JSON.parse(JSON.stringify(slides))} />
      <div className="text-white">
        {Object.keys(movies).map(async (category, index) => {
          return (
            <div key={category}>
              <MovieSlider
                movies={JSON.parse(JSON.stringify(movies[category]))}
                userBookmarks={JSON.parse(JSON.stringify(userMoviesBookmark))}
                title={`${category}`}
                user={JSON.parse(JSON.stringify(userInfo))}
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
