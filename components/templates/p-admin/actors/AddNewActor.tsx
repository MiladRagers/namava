"use client";
import Button from "@/components/modules/auth/Button/Button";
import Input from "@/components/modules/p-admin/Input";
import Label from "@/components/modules/auth/Label/Label";
import { Actor, TActor } from "@/src/validators/frontend";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  FaImage,
  FaInstagram,
  FaLink,
  FaTag,
  FaTwitter,
  FaUser,
} from "react-icons/fa6";
import { RiArticleLine } from "react-icons/ri";

function AddNewActor() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TActor>({
    resolver: zodResolver(Actor),
  });

  const createNewActor = async (data: TActor) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(createNewActor)}
      className="bg-namavaBlack rounded-lg p-6 shadow my-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 md:gap-y-6"
    >
      <Input
        register={register}
        errors={errors}
        icon={<FaUser className={`text-xl`} />}
        name="name"
        title="نام و نام خانوادگی"
        type="text"
        placeholder="نام و نام خانوادگی بازیگر را بنویسید"
      />

      <Input
        register={register}
        errors={errors}
        icon={<RiArticleLine className={`text-xl`} />}
        name="bio"
        title="بیوگرافی"
        type="text"
        placeholder="درباره  این بازیگر بنویسید"
      />

      <Input
        register={register}
        errors={errors}
        icon={<RiArticleLine className={`text-xl`} />}
        name="link"
        title="لینک "
        type="text"
        placeholder="لینک بازیگر را وارد کنید"
      />

      <Input
        register={register}
        errors={errors}
        icon={<FaTwitter className={`text-xl`} />}
        name="twitter"
        title="توییتر"
        type="text"
        placeholder="توییتر بازیگر را وارد کنید"
      />

      <Input
        register={register}
        errors={errors}
        icon={<FaInstagram className={`text-xl`} />}
        name="instagram"
        title="اینستاگرام"
        type="text"
        placeholder="اینستاگرام بازیگر را وارد کنید"
      />

      <Input
        register={register}
        errors={errors}
        name="image"
        title="آپلودر عکس"
        type="file"
      />
      <div className="flex items-center gap-x-8 mt-5 text-white">
        <Button type="submit" className={`${isValid ? "" : "!bg-slate-600 "}`}>
          ایجاد دسته بندی
        </Button>
        <Button onClick={() => reset()} type="reset" className="bg-red-700">
          لغو
        </Button>
      </div>
    </form>
  );
}

export default AddNewActor;
