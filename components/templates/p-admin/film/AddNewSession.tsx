"use client";
import Button from "@/components/modules/auth/Button/Button";
import Input from "@/components/modules/p-admin/Input";
import SelectBox from "@/components/modules/p-admin/SelectBox";
import { Session, TSession } from "@/src/validators/frontend";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { FaLink } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { FiVideo } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";

function AddNewSession() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TSession>({
    resolver: zodResolver(Session),
  });

  const fakeSeries = [
    { id: 1, value: "کاپیتان", label: "کاپیتان آمریکا" },
    { id: 2, value: "جومونگ", label: "جومونگ" },
  ];

  const fakeSeason = [
    { id: 1, value: "1", label: "فصل 1" },
    { id: 1, value: "2", label: "فصل 2" },
    { id: 1, value: "3", label: "فصل 3" },
  ];

  const createNewSession = async (data: TSession) => {
    console.log(data);
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
      />

      <Input
        register={register}
        errors={errors}
        icon={<MdAccessTime className={`text-2xl`} />}
        name="time"
        title="زمان"
        type="text"
        placeholder="مدت زمان قسمت را وارد کنید"
      />

      <Input
        register={register}
        errors={errors}
        icon={<FaLink className={`text-2xl`} />}
        name="link"
        title="لینک "
        type="text"
        placeholder="لینک قسمت را وارد کنید"
      />

      <Input
        register={register}
        errors={errors}
        icon={<FaLink className={`text-2xl`} />}
        name="desc"
        title="درباره قسمت (خلاصه)"
        type="text"
        placeholder="در مورد قسمت به شکل خلاصه توضیح دهید"
      />

      <Input
        register={register}
        errors={errors}
        name="banner"
        title="بنر"
        type="file"
        icon={<FaImage className={`text-2xl`} />}
      />

      <Input
        register={register}
        errors={errors}
        name="video"
        title="ویدیو"
        type="file"
        icon={<FiVideo className={`text-2xl`} />}
      />

      <SelectBox
        register={register}
        errors={errors}
        name="serial"
        options={fakeSeries}
        title="نام سریال"
      />
      <SelectBox
        register={register}
        errors={errors}
        name="season"
        options={fakeSeason}
        title="فصل"
      />

      <div className="flex items-center gap-x-8 mt-5 text-white">
        <Button className={`${isValid ? "" : "!bg-slate-600 "}`}>
          ایجاد اثر
        </Button>
        <Button onClick={() => reset()} className="bg-red-700">
          لغو
        </Button>
      </div>
    </form>
  );
}

export default AddNewSession;
