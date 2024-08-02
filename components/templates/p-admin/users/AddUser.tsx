"use client";
import Button from "@/components/modules/auth/Button/Button";
import Input from "@/components/modules/p-admin/Input";
import { TUser, User } from "@/src/validators/frontend";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserAstronaut } from "react-icons/fa";
import { FaEnvelope, FaInfo, FaLock, FaPhone, FaUser } from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod";
import { createNewUser } from "@/src/libs/actions/user";
import toast from "react-hot-toast";
import Spinner from "@/components/modules/spinner/Spinner";

function AddUser() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TUser>({
    resolver: zodResolver(User),
  });

  const createNewUserHandler = async (data: TUser) => {
    const res = await createNewUser(data);
    if (res?.status === 201) {
      setIsLoading(false);
      reset();
      return toast.success(`${res?.message}`);
    }
    toast.error(`${res?.message}`);
    reset();
    setIsLoading(false);
  };
  return (
    <form
      onSubmit={handleSubmit(createNewUserHandler)}
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
        disable={isLoading}
      />

      <Input
        type="text"
        placeholder="نام کاربری کاربر را وارد کنید"
        errors={errors}
        register={register}
        icon={<FaUserAstronaut className={`text-xl`} />}
        name="username"
        title="نام کاربری"
        disable={isLoading}
      />

      <Input
        type="text"
        placeholder="شماره تلفن کاربر را وارد کنید"
        errors={errors}
        register={register}
        icon={<FaPhone className={`text-xl`} />}
        name="phone"
        title="شماره تلفن"
        disable={isLoading}
      />

      <Input
        type="email"
        placeholder="ایمیل کاربر را وارد کنید"
        errors={errors}
        register={register}
        icon={<FaEnvelope className={`text-xl`} />}
        name="email"
        title="ایمیل"
        disable={isLoading}
      />

      <Input
        type="password"
        placeholder="رمز عبور کاربر را وارد کنید"
        errors={errors}
        register={register}
        icon={<FaLock className={`text-xl`} />}
        name="password"
        title="رمز عبور"
        disable={isLoading}
      />

      <Input
        type="text"
        placeholder="درباره کاربر بنویسید "
        errors={errors}
        register={register}
        icon={<FaInfo className={`text-xl`} />}
        name="bio"
        title="بیوگرافی خلاصه"
        disable={isLoading}
      />

      <div className="flex items-center gap-x-8 mt-5 text-white">
        <Button
          type="submit"
          disabled={isLoading}
          className={`${isValid ? "" : "!bg-slate-600 "} h-[44px]`}
        >
          {isLoading ? <Spinner /> : "ایجاد کاربر"}
        </Button>
        <Button className="bg-red-700" onClick={() => reset()}>
          لغو
        </Button>
      </div>
    </form>
  );
}

export default AddUser;
