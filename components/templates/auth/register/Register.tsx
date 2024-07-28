import Button from "@/components/modules/auth/Button/Button";
import Input from "@/components/modules/p-admin/Input";
import OtpIcon from "@/icons/OtpIcon";
import { TUser, User } from "@/src/validators/frontend";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaGlobe, FaPhone, FaUser } from "react-icons/fa6";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Register() {
  const [isPassword, setIsPassword] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TUser>({ resolver: zodResolver(User) });

  const regsiterWithPhone = async (data: TUser) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(regsiterWithPhone)}>
      <div className="flex items-center gap-x-4 mt-5">
        <OtpIcon />
        <span className="text-white text-sm md:text-base">
          ثبت نام از طریق شماره تلفن همراه
        </span>
      </div>
      <p className="text-[#ccc] text-xs md:text-sm my-6">
        کاربر گرامی ، لطفا اطلاعات خود را با دقت وارد نمایید
      </p>
      <div className="space-y-[24px]">
        <Input
          register={register}
          errors={errors}
          name="name"
          title="نام "
          type="text"
          icon={<FaUser className="text-lg md:text-2xl" />}
          placeholder="لطفا نام و نام خانوادگی خود را وارد کنید"
          labelClassName="!text-[17px]"
        />
        <Input
          register={register}
          errors={errors}
          name="username"
          title="نام کاربری"
          type="text"
          icon={<FaGlobe className="text-lg md:text-2xl" />}
          placeholder="لطفا نام کاربری خود را وارد کنید"
          labelClassName="!text-[17px]"
        />

        <Input
          register={register}
          errors={errors}
          name="phone"
          title="شماره تلفن"
          type="text"
          icon={<FaPhone className="text-lg md:text-2xl" />}
          placeholder="لطفا شماره تلفن خود را وارد کنید"
          labelClassName="!text-[17px]"
        />

        <Input
          register={register}
          errors={errors}
          name="email"
          title="ایمیل"
          type="email"
          icon={<FaEnvelope className="text-lg md:text-2xl" />}
          placeholder="لطفا ایمیل خود را وارد کنید"
          labelClassName="!text-[17px]"
        />

        <Input
          register={register}
          errors={errors}
          name="password"
          title="رمز عبور"
          type={isPassword ? "password" : "text"}
          icon={
            isPassword ? (
              <FiEyeOff
                onClick={() => setIsPassword(false)}
                className="text-lg md:text-xl"
              />
            ) : (
              <FiEye
                onClick={() => setIsPassword(true)}
                className="text-lg md:text-xl"
              />
            )
          }
          placeholder="لطفا رمز عبور خود را وارد کنید"
          labelClassName="!text-[17px]"
        />

        <div className="text-xs md:text-base">
          <p>رمز عبور باید دارای شرایط زیر باشد</p>
          <ul className="list-disc pr-5 pt-4 text-xs md:text-sm space-y-2 text-gray-300">
            <li>رمز باید 8 کاراکتر یا بیشتر باشد</li>
            <li>رمز باید ترکیبی از حروف و اعداد باشد</li>
          </ul>
        </div>

        <Button type="submit" className={isValid ?"bg-namava" :"bg-slate-500"}>ثبت نام</Button>
      </div>
    </form>
  );
}

export default Register;
