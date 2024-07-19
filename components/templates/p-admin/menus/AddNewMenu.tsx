"use client";
import Button from "@/components/modules/auth/Button/Button";
import { Menu, TMenu } from "@/src/validators/frontend";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineProduct } from "react-icons/ai";
import Input from "@/components/modules/p-admin/Input";
import { FaLink } from "react-icons/fa6";
import SelectBox from "@/components/modules/p-admin/SelectBox";

function AddNewMenu() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TMenu>({
    resolver: zodResolver(Menu),
  });

  const fakeOptions = [
    { id: 1, label: "اکشن", value: "Action" },
    { id: 2, label: "کمدی", value: "Comedy" },
    { id: 3, label: "علمی تخیلی", value: "non-fiction" },
  ];

  const createNewMenu = async (data: TMenu) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(createNewMenu)}
      className="bg-namavaBlack rounded-lg p-6 shadow my-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 md:gap-y-6"
    >
      <Input
        register={register}
        errors={errors}
        icon={<AiOutlineProduct className={`text-xl`} />}
        name="title"
        title="عنوان"
        type="text"
        placeholder="عنوان منو را وارد کنید"
      />

      <Input
        register={register}
        errors={errors}
        icon={<FaLink className={`text-xl`} />}
        name="link"
        title="لینک"
        type="text"
        placeholder="لینک منو را وارد کنید"
      />

      <SelectBox
        register={register}
        errors={errors}
        name="parent"
        options={fakeOptions}
        title="پرنت منو"
      />

      <div className="hidden md:block"></div>

      <div className="flex items-center gap-x-3 md:gap-x-8 mt-5 text-white">
        <Button className={`${isValid ? "" : "!bg-slate-600 "}`}>
          ایجاد منو
        </Button>
        <Button onClick={() => reset()} type="reset" className="bg-red-700">
          لغو
        </Button>
      </div>
    </form>
  );
}

export default AddNewMenu;
