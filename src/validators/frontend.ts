import * as z from "zod";

export const User = z.object({
  name: z
    .string({required_error :"نام کاربری را وارد کنید"})
    .min(3, { message: "نام حداقل باید 3 کارکتر باشد" })
    .max(30, { message: "نام باید 30 کاراکتر داشته باشد" }),
  username: z
    .string()
    .min(3, { message: "نام کاربری باید حداقل 3 کاراکتر داشته باشد " })
    .max(30, {
      message: "نام کاربری باید حداکثر 30 کاراکتر داشته باشد",
    }),
  phone: z
    .string()
    .min(11, { message: "شماره تلفن باید حداقل 11 کاراکتر داشته باشد " })
    .max(11, {
      message: "شماره تلفن باید حداکثر 11 کاراکتر داشته باشد",
    }),
  email: z
    .string()
    .email({ message: "فرمت ایمیل را صحیح وارد کنید" })
    .max(100, { message: "ایمیل حداکثر باید 100 کارکتر داشته باشد" }),
  password: z
    .string()
    .min(8, { message: "رمز عبور باید حداقل 8 کاراکتر داشته باشد " })
    .max(30, {
      message: " رمز عبور باید حداکثر 30 کاراکتر داشته باشد",
    }),

  bio: z
    .string()
    .min(8, { message: "بیوگرافی حداقل باید 8 کارکتر داشته باشد" })
    .max(1000, {
      message: "بیوگرافی حداکثر باید 1000 کارکتر داشته باشد",
    }),
});

export type TUser = z.infer<typeof User>;
