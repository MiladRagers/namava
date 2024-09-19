"use client";
import { useState } from "react";
import Button from "../../modules/auth/Button/Button";
import Ages from "./Ages";
import EditProfile from "./EditProfile";
import Lock from "./Lock";
import TimeLimit from "./TimeLimit";
import TitleLimit from "./TitleLimit";

function WatchLimit({ profile, movies }: any) {
  const [age, setAge] = useState(profile.ages);
  const [limites, setLimites] = useState<any[]>([]);
  const limitedMovies = profile.limitsMovies.map((movie: any) => ({
    title: movie.title,
    _id: movie._id,
  }));

  return (
    <>
      <EditProfile profile={profile} />
      <Ages setAge={setAge} age={age} />
      <Lock profile={profile} />
      {age < 12 && <TimeLimit />}
      <TitleLimit
        limites={limites}
        setLimites={setLimites}
        movies={movies}
        limitedMovie={limitedMovies}
      />
      <div className="max-w-[700px] mx-auto flex items-center text-white gap-x-5 pb-20 ">
        <Button>ذخیره</Button>
        <Button className="!bg-gray-500/50 hover:!bg-white/40">بازگشت</Button>
        <Button className="border border-red-600 !bg-[#121212] text-red-600 hover:!bg-red-600 hover:!text-white">
          حذف پروفایل
        </Button>
      </div>
    </>
  );
}

export default WatchLimit;
