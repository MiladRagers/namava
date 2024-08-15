"use client";
import Button from "@/components/modules/auth/Button/Button";
import Input from "@/components/modules/p-admin/Input";
import SelectBox from "@/components/modules/p-admin/SelectBox";
import Spinner from "@/components/modules/spinner/Spinner";
import { createNewEpisode } from "@/src/libs/actions/episode";
import { Session, TSession } from "@/src/validators/frontend";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaLink } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { FiVideo } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";

function AddNewSession({ series }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TSession>({
    resolver: zodResolver(Session),
  });

  const seriesOptions = series.map((movie: any) => ({
    id: movie._id,
    value: movie._id,
    label: movie.title,
  }));

  const fakeSeason = [
    { id: 1, value: "1", label: "فصل 1" },
    { id: 2, value: "2", label: "فصل 2" },
    { id: 3, value: "3", label: "فصل 3" },
    { id: 4, value: "4", label: "فصل 4" },
    { id: 5, value: "5", label: "فصل 5" },
    { id: 6, value: "6", label: "فصل 6" },
  ];

  const createNewSession = async (data: TSession) => {
    const episodeData = new FormData();
    episodeData.append("title", data.title);
    episodeData.append("image", data.banner[0]);
    episodeData.append("video", data.video[0]);
    episodeData.append("description", data.desc);
    episodeData.append("time", data.time);
    episodeData.append("link", data.link);
    episodeData.append("series", data.serial);
    episodeData.append("season", data.season);
    setIsLoading(true);
    const res = await createNewEpisode(episodeData);
    if (res?.status === 201) {
      setIsLoading(false);
      return toast.success(`${res?.message}`);
    }
    setIsLoading(false);
    toast.error(`${res?.message}`);
  };
  return (
    <form
      onSubmit={handleSubmit(createNewSession)}
      className="bg-namavaBlack rounded-lg p-6 shadow my-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 md:gap-y-6"
    >
      <Input
        register={register}
        errors={errors}
        icon={<RiMovie2Line className={`text-2xl`} />}
        name="title"
        title="نام قسمت"
        type="text"
        placeholder="نام قسمت را وارد کنید"
        disable={isLoading}
      />

      <Input
        register={register}
        errors={errors}
        icon={<MdAccessTime className={`text-2xl`} />}
        name="time"
        title="زمان"
        type="text"
        placeholder="مدت زمان قسمت را وارد کنید"
        disable={isLoading}
      />

      <Input
        register={register}
        errors={errors}
        icon={<FaLink className={`text-2xl`} />}
        name="link"
        title="لینک "
        type="text"
        placeholder="لینک قسمت را وارد کنید"
        disable={isLoading}
      />

      <Input
        register={register}
        errors={errors}
        icon={<FaLink className={`text-2xl`} />}
        name="desc"
        title="درباره قسمت (خلاصه)"
        type="text"
        placeholder="در مورد قسمت به شکل خلاصه توضیح دهید"
        disable={isLoading}
      />

      <Input
        register={register}
        errors={errors}
        name="banner"
        title="بنر"
        type="file"
        icon={<FaImage className={`text-2xl`} />}
        disable={isLoading}
      />

      <Input
        register={register}
        errors={errors}
        name="video"
        title="ویدیو"
        type="file"
        icon={<FiVideo className={`text-2xl`} />}
        disable={isLoading}
      />

      <SelectBox
        register={register}
        errors={errors}
        name="serial"
        options={seriesOptions}
        title="نام سریال"
        disable={isLoading}
      />
      <SelectBox
        register={register}
        errors={errors}
        name="season"
        options={fakeSeason}
        title="فصل"
        disable={isLoading}
      />

      <div className="flex items-center gap-x-8 mt-5 text-white">
        <Button
          disabled={isLoading}
          className={`${isValid ? "" : "!bg-slate-600 "} h-[44px]`}
        >
          {isLoading ? <Spinner /> : "ایجاد اثر"}
        </Button>
        <Button onClick={() => reset()} className="bg-red-700">
          لغو
        </Button>
      </div>
    </form>
  );
}

export default AddNewSession;
