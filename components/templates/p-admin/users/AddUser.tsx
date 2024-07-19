"use client";
import Button from "@/components/modules/auth/Button/Button";
import Input from "@/components/modules/p-admin/Input";
import Label from "@/components/modules/auth/Label/Label";
import { TUser, User } from "@/src/validators/frontend";
import React from "react";
import { useForm } from "react-hook-form";
import { FaUserAstronaut } from "react-icons/fa";
import { FaEnvelope, FaInfo, FaLock, FaPhone, FaUser } from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod";

function AddUser() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TUser>({
    resolver: zodResolver(User),
  });

  const createNewUser = async (data: TUser) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(createNewUser)}
      className="bg-namavaBlack rounded-lg p-6 shadow my-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 md:gap-y-6"
    >
      <Input
        type="text"
        placeholder="نام و نام خانوادگی کاربر را وارد کنید"
        errors={errors}
        icon={<FaUser className={`text-xl`} />}
        register={register}
        name="name"
        title="نام"
      />

      <Input
        type="text"
        placeholder="نام کاربری کاربر را وارد کنید"
        errors={errors}
        register={register}
        icon={<FaUserAstronaut className={`text-xl`} />}
        name="username"
        title="نام کاربری"
      />

      <Input
        type="text"
        placeholder="شماره تلفن کاربر را وارد کنید"
        errors={errors}
        register={register}
        icon={<FaPhone className={`text-xl`} />}
        name="phone"
        title="شماره تلفن"
      />

      <Input
        type="email"
        placeholder="ایمیل کاربر را وارد کنید"
        errors={errors}
        register={register}
        icon={<FaEnvelope className={`text-xl`} />}
        name="email"
        title="ایمیل"
      />

      <Input
        type="password"
        placeholder="رمز عبور کاربر را وارد کنید"
        errors={errors}
        register={register}
        icon={<FaLock className={`text-xl`} />}
        name="password"
        title="رمز عبور"
      />

      <Input
        type="text"
        placeholder="درباره کاربر بنویسید "
        errors={errors}
        register={register}
        icon={<FaInfo className={`text-xl`} />}
        name="bio"
        title="بیوگرافی خلاصه"
      />

      <div className="flex items-center gap-x-8 mt-5 text-white">
        <Button type="submit" className={`${isValid ? "" :"!bg-slate-600 "}`}>ایجاد کاربر</Button>
        <Button className="bg-red-700" onClick={() => reset()}>
          لغو
        </Button>
      </div>
    </form>
  );
}

export default AddUser;
