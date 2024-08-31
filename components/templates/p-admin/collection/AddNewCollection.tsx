"use client";
import Button from "@/components/modules/auth/Button/Button";
import Input from "@/components/modules/p-admin/Input";
import SelectBox from "@/components/modules/p-admin/SelectBox";
import Spinner from "@/components/modules/spinner/Spinner";
import { createCollection } from "@/src/libs/actions/collection";
import { Collcetion, TCollection } from "@/src/validators/frontend";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiOutlineProduct } from "react-icons/ai";
import { FaArtstation, FaLink, FaRegFileImage } from "react-icons/fa6";
import { RiImageAddFill } from "react-icons/ri";

function AddNewCollection({ movies }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TCollection>({
    resolver: zodResolver(Collcetion),
  });

  const createNewCollection = async (data: TCollection) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("link", data.link);
    formData.append("mainImage", data.mainImage[0]);
    formData.append("deskBanner", data.deskBanner[0]);
    formData.append("mobileBanner", data.mobileBanner[0]);
    setIsLoading(true);
    const res = await createCollection(formData, selectedOption);
    if (res.status === 201) {
      setIsLoading(false);
      reset();
      return toast.success(`${res.message}`);
    }

    setIsLoading(false);
    return toast.error(`${res.message}`);
  };

  const moviesOption = movies.map((movies: any) => ({
    label: movies.title,
    value: movies._id,
  }));

  return (
    <form
      onSubmit={handleSubmit(createNewCollection)}
      className="bg-namavaBlack rounded-lg p-6 shadow my-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 md:gap-y-6"
    >
      <Input
        register={register}
        disable={isLoading}
        errors={errors}
        icon={<AiOutlineProduct className={`text-xl md:text-2xl`} />}
        name="title"
        title="عنوان"
        type="text"
        placeholder="عنوان مجموعه را وارد کنید"
      />

      <Input
        register={register}
        errors={errors}
        icon={<FaLink className={`text-xl md:text-2xl`} />}
        name="link"
        title="لینک "
        type="text"
        placeholder="لینک مجموعه  را وارد کنید"
        disable={isLoading}
      />

      <Input
        register={register}
        disable={isLoading}
        errors={errors}
        icon={<FaArtstation className={`text-xl md:text-2xl`} />}
        name="title"
        title="توضیحات"
        type="text"
        placeholder="توضیحات این مجموعه را بنویسید"
      />

      <SelectBox
        register={register}
        errors={errors}
        name="movies"
        options={moviesOption}
        title="فیلم / سریال"
        multiple
        selected={selectedOption}
        onSelected={setSelectedOption}
        disable={isLoading}
      />

      <Input
        register={register}
        errors={errors}
        name="mainImage"
        title="تصویر اصلی"
        type="file"
        disable={isLoading}
      />

      <Input
        register={register}
        errors={errors}
        name="deskBanner"
        title="بنر دسکتاپ"
        type="file"
        icon={<RiImageAddFill className={`text-xl md:text-2xl`} />}
        disable={isLoading}
      />

      <Input
        register={register}
        errors={errors}
        name="mobileBanner"
        title="بنر موبایل"
        type="file"
        icon={<FaRegFileImage className={`text-xl md:text-2xl`} />}
        disable={isLoading}
      />

      <div className="hidden md:block"></div>

      <div className="flex items-center gap-x-3 md:gap-x-8 mt-5 text-white">
        <Button
          disabled={isLoading}
          className={`${isValid ? "" : "!bg-slate-600 "} h-[44px]`}
        >
          {isLoading ? <Spinner /> : "ساخت مجموعه"}
        </Button>
        <Button onClick={() => reset()} type="reset" className="bg-red-700">
          لغو
        </Button>
      </div>
    </form>
  );
}

export default AddNewCollection;
