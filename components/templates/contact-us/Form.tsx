"use client";
import Button from "@/components/modules/auth/Button/Button";
import Input from "@/components/modules/p-admin/Input";
import SelectBox from "@/components/modules/p-admin/SelectBox";
import { ContactUs, TContactUs } from "@/src/validators/frontend";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaUser } from "react-icons/fa6";

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TContactUs>({
    resolver: zodResolver(ContactUs),
  });

  const fakeOptions = [
    { id: 1, label: "مدیریت مالی", value: "Action" },
    { id: 2, label: "منابع انسانی", value: "Comedy" },
    { id: 3, label: "واحد تولید", value: "non-fiction" },
  ];

  return (
    <form className="bg-namavaBlack text-white p-[15px] md:p-[22px] rounded-xl max-w-[700px] mx-auto space-y-6 mt-10">
      <p className="text-sm/[26px]">
        کاربر گرامی، برای پیگیری خرید اشتراک، موارد محتوایی و یا ارسال پیشنهادات
        و انتقادات می توانید از فرم زیر نیز استفاده نمایید.
      </p>

      <Input
        register={register}
        errors={errors}
        name="name"
        title="نام و نام خانوادگی"
        type="text"
        placeholder="نام و نام خانوادگی خودتان را وارد کنید"
        icon={<FaUser className="text-xl md:text-2xl" />}
      />

      <Input
        type="email"
        placeholder="ایمیل خودتان را وارد کنید"
        errors={errors}
        register={register}
        icon={<FaEnvelope className={`text-xl md:text-2xl`} />}
        name="email"
        title="ایمیل"
      />

      <SelectBox
        register={register}
        errors={errors}
        name="parent"
        options={fakeOptions}
        title="دپارتمان"
      />

      <Input
        register={register}
        errors={errors}
        name="content"
        title="متن پیغام"
        type="textarea"
        placeholder="متن پیغام خود را وارد کنید"
      />

      <Button type="submit">ارسال پیغام</Button>
    </form>
  );
}

export default Form;
