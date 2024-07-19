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

function AddCategories() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TCategory>({
    resolver: zodResolver(Category),
  });

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

      <div className="flex flex-col gap-y-3 text-white">
        <Label title="پرنت دسته بندی" className="!text-base md:!text-lg" />
        <div
          className={`bg-[#121212]  h-[52px] px-2.5 rounded-xl flex items-center justify-between gap-x-2`}
        >
          <select className="bg-[#121212] outline-none w-full">
            <option value="-1">پرنت دسته بندی را انتخاب کنید</option>
            <option value="1">اکشن</option>
            <option value="2">کمدی</option>
            <option value="3">علمی تخیلی</option>
          </select>
        </div>
      </div>

      <Input
        register={register}
        errors={errors}
        name="image"
        title="آپلودر عکس"
        type="file"
      />

      <div className="flex items-center gap-x-8 mt-5 text-white">
        <Button>ایجاد دسته بندی</Button>
        <Button className="bg-red-700">لغو</Button>
      </div>
    </form>
  );
}

export default AddCategories;
