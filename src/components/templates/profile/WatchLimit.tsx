"use client";
import { useState } from "react";
import Button from "../../modules/auth/Button/Button";
import Ages from "./Ages";
import EditProfile from "./EditProfile";
import Lock from "./Lock";
import TimeLimit from "./TimeLimit";
import TitleLimit from "./TitleLimit";
import { updateProfile } from "@/src/libs/actions/profile";
import toast from "react-hot-toast";

function WatchLimit({ profile, movies }: any) {
  const [age, setAge] = useState(profile.ages);
  const [limites, setLimites] = useState<any[]>(profile.limitsMovies);
  const [tempImage, setTempImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [profileName, setProfileName] = useState(profile.name);
  const limitedMovies = profile.limitsMovies.map((movie: any) => ({
    title: movie.title,
    _id: movie._id,
  }));

  const updateProfileHandler = async () => {
    const data = {
      age,
      image: tempImage ? tempImage : profile.image,
      limitesMovies: limites,
      profileId: profile._id,
      profileName
    };
    setIsLoading(true);
    const res = await updateProfile(data);
    setIsLoading(false);
    if (res?.status === 200) {
      return toast.success(`${res?.message}`);
    }
    setIsLoading(false);

    return toast.error(`${res?.message}`);
  };

  return (
    <>
      <EditProfile
        tempImage={tempImage}
        setTempImage={setTempImage}
        profile={profile}
        profileName={profileName}
        setProfileName={setProfileName}
      />
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
        <Button disabled={isLoading} onClick={updateProfileHandler}>
          ذخیره
        </Button>
        <Button
          disabled={isLoading}
          className="!bg-gray-500/50 hover:!bg-white/40"
        >
          بازگشت
        </Button>
        <Button
          disabled={isLoading}
          className="border border-red-600 !bg-[#121212] text-red-600 hover:!bg-red-600 hover:!text-white"
        >
          حذف پروفایل
        </Button>
      </div>
    </>
  );
}

export default WatchLimit;
