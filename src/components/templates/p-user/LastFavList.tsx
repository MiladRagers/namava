import { getLikesMovies } from "@/src/libs/service/services";
import { IWishList } from "@/src/libs/types";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import LastFavItem from "./LastFavItem";

async function LastFavList() {
  const { movies }: IWishList = await getLikesMovies();

  return (
    <div className="bg-namavaBlack rounded-md border border-gray-800 shadow py-4 md:pb-6 md:pt-5 px-3 md:px-6">
      <div className="text-white flex items-center justify-between border-b border-gray-600 pb-1">
        <span className="pb-2 font-IranMedium">مورد علاقه های اخیر</span>
        <Link
          href="/p-user/favlist"
          className="flex items-center gap-x-2 text-namava text-sm"
        >
          همه مورد علاقه ها
          <IoMdArrowRoundBack className="text-lg" />
        </Link>
      </div>
      <div className="overflow-hidden max-h-[225px] md:max-h-[365px] recent-box overflow-y-auto">
        <div className="my-4 space-y-4">
          {movies.map((movie) => (
            <LastFavItem key={movie._id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LastFavList;
