"use client";
import { Article, TArticle } from "@/src/validators/frontend";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineProduct } from "react-icons/ai";
import Input from "@/components/modules/p-admin/Input";
import { FaLink, FaTag } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import SelectBox from "@/components/modules/p-admin/SelectBox";
import Button from "@/components/modules/auth/Button/Button";
import Label from "@/components/modules/auth/Label/Label";
import dynamic from "next/dynamic";
import { createNewArticle } from "@/src/libs/actions/article";
import toast from "react-hot-toast";

const Editor = dynamic(() => import("./Editor"), { ssr: false });

function AddNewArticle() {
  const [isLoading, setIsLoading] = useState(false);
  const [articleBody, setArticleBody] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TArticle>({
    resolver: zodResolver(Article),
  });

  const fakeShows = [
    { id: 1, value: "کاپیتان", label: "کاپیتان آمریکا" },
    { id: 2, value: "جومونگ", label: "جومونگ" },
  ];

  const createNewArticleHandeler = async (data: TArticle) => {
    console.log(data);
    const articleData = new FormData();
    articleData.append("title", data.title);
    articleData.append("link", data.link);
    articleData.append("readingTime", data.readingTime);
    articleData.append("tags", data.tags);
    articleData.append("movie", data.movie);
    articleData.append("image", data.image[0]);
    articleData.append("content", articleBody);

    const res = await createNewArticle(articleData);
    setIsLoading(true);

    if (res?.status === 201) {
      setIsLoading(false);
      reset();
      return toast.success(`${res?.message}`);
    }
    reset();
    setIsLoading(false);
    toast.error(`${res?.message}`);
  };

  return (
    <form
      className="bg-namavaBlack rounded-lg p-6 shadow my-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 md:gap-y-6"
      onSubmit={handleSubmit(createNewArticleHandeler)}
    >
      <Input
        register={register}
        errors={errors}
        icon={<AiOutlineProduct className={`text-2xl`} />}
        name="title"
        title="عنوان"
        type="text"
        placeholder="عنوان مقاله را وارد کنید"
      />

      <Input
        register={register}
        errors={errors}
        icon={<FaLink className={`text-2xl`} />}
        name="link"
        title="لینک "
        type="text"
        placeholder="لینک مقاله را وارد کنید"
      />

      <Input
        register={register}
        errors={errors}
        icon={<MdAccessTime className={`text-2xl`} />}
        name="readingTime"
        title="مدت زمان"
        type="text"
        placeholder="مدت زمان مورد نیاز برای مطالعه مقاله را وارد کنید"
      />

      <Input
        register={register}
        errors={errors}
        icon={<FaTag className={`text-2xl`} />}
        name="tags"
        title="تگ ها"
        type="text"
        placeholder="بطور مثال اکشن ، علمی و..."
      />

      <SelectBox
        register={register}
        errors={errors}
        name="movie"
        options={fakeShows}
        title="نام فیلم / سریال"
      />

      <Input
        register={register}
        errors={errors}
        name="image"
        title="آپلودر عکس"
        type="file"
      />

      <div className="md:col-span-2 space-y-3 text-white">
        <Label title={"محتوای مقاله"} className="!text-base md:!text-lg" />
        <Editor article={articleBody} onArticle={setArticleBody} />
      </div>

      <div className="flex items-center gap-x-4 mt-5 text-white">
        <Button className={`${isValid ? "" : "!bg-slate-600 "}`}>
          ایجاد مقاله
        </Button>
        <Button className={`${isValid ? "" : "!bg-slate-600 "}`}>
          پیش نویس
        </Button>
        <Button onClick={() => reset()} className="bg-red-700">
          لغو
        </Button>
      </div>
    </form>
  );
}

export default AddNewArticle;
