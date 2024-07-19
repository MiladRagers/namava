"use client";
import Button from "@/components/modules/auth/Button/Button";
import Input from "@/components/modules/p-admin/Input";
import Label from "@/components/modules/auth/Label/Label";
import { Category, TCategory } from "@/src/validators/frontend";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { FaImage, FaLink, FaTag, FaVuejs } from "react-icons/fa6";
import { RiArticleLine } from "react-icons/ri";
import SelectBox from "@/components/modules/p-admin/SelectBox";

function AddCategories() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TCategory>({
    resolver: zodResolver(Category),
  });

  console.log(errors);

  const fakeOptions = [
    { id: 1, label: "اکشن", value: "Action" },
    { id: 2, label: "کمدی", value: "Comedy" },
    { id: 3, label: "علمی تخیلی", value: "non-fiction" },
  ];

  const createNewCtegory = async (data: TCategory) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(createNewCtegory)}
      className="bg-namavaBlack rounded-lg p-6 shadow my-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 md:gap-y-6"
    >
      <Input
        register={register}
        errors={errors}
        icon={<FaVuejs className={`text-xl`} />}
        name="title"
        title="عنوان"
        type="text"
        placeholder="عنوان دسته بندی را وارد کنید"
      />

      <Input
        register={register}
        errors={errors}
        icon={<FaLink className={`text-2xl`} />}
        name="link"
        title="لینک "
        type="text"
        placeholder="لینک دسته بندی را وارد کنید"
      />

      <Input
        register={register}
        errors={errors}
        icon={<RiArticleLine className={`text-2xl`} />}
        name="desc"
        title="توضیحات "
        type="text"
        placeholder="درباره دسته بندی بنویسید"
      />

      <Input
        register={register}
        errors={errors}
        icon={<FaTag className={`text-2xl`} />}
        name="tags"
        title="تگ ها"
        type="text"
        placeholder="تگ های دسته بندی را بنویسید"
      />

      <SelectBox
        register={register}
        errors={errors}
        name="parent"
        options={fakeOptions}
        title="پرنت دسته بندی"
      />

      <Input
        register={register}
        errors={errors}
        name="image"
        title="آپلودر عکس"
        type="file"
      />

      <div className="flex items-center gap-x-8 mt-5 text-white">
        <Button className={`${isValid ? "" : "!bg-slate-600 "}`}>
          ایجاد دسته بندی
        </Button>
        <Button onClick={() => reset()} className="bg-red-700">
          لغو
        </Button>
      </div>
    </form>
  );
}

export default AddCategories;
