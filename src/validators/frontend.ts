import * as z from "zod";

export const User = z.object({
  name: z
    .string({ required_error: "نام کاربری را وارد کنید" })
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

// categories schema

export const Category = z.object({
  title: z
    .string({ required_error: "عنوان دسته بندی را وارد کنید" })
    .min(3, { message: "عنوان دسته بندی حداقل باید 3 کارکتر باشد" })
    .max(30, { message: "عنوان دسته بندی باید 30 کاراکتر داشته باشد" }),
  link: z
    .string({ required_error: "لینک دسته بندی را وارد کنید" })
    .min(3, { message: "لینک دسته بندی  حداقل باید 3 کارکتر باشد" })
    .max(30, { message: "لینک دسته بندی  باید 30 کاراکتر داشته باشد" }),
  desc: z
    .string({ required_error: "توضیحات دسته بندی را وارد کنید" })
    .min(3, { message: "توضیحات دسته بندی  حداقل باید 3 کارکتر باشد" })
    .max(1000, { message: "توضیحات دسته بندی  باید 1000 کاراکتر داشته باشد" }),
  parent: z.string().optional(),
  image: z.any({ required_error: "عکس را آپلود کنید" }),
  tags: z
    .string({ required_error: "تگ های دسته بندی را بنویسید" })
    .min(3, { message: "تگ باید حداقل 3 کارکتر باشد" })
    .max(150, { message: "تگ باید حداکثر 150 کارکتر باشد" }),
});

export type TCategory = z.infer<typeof Category>;

// menus schema

export const Menu = z.object({
  title: z
    .string()
    .min(3, { message: "عنوان منو حداقل باید 3 کارکتر باشد" })
    .max(30, { message: "عنوان منو باید 30 کاراکتر داشته باشد" }),
  link: z
    .string({ required_error: "لینک منو را وارد کنید" })
    .min(3, { message: "لینک منو  حداقل باید 3 کارکتر باشد" })
    .max(30, { message: "لینک منو  باید 30 کاراکتر داشته باشد" }),
  parent: z.string().optional(),
});

export type TMenu = z.infer<typeof Menu>;

// actor schema

export const Actor = z.object({
  name: z
    .string({ required_error: "نام ستاره را وارد کنید" })
    .min(3, { message: "نام حداقل باید 3 کارکتر باشد" })
    .max(30, { message: "نام باید 30 کاراکتر داشته باشد" }),
  bio: z
    .string()
    .min(8, { message: "بیوگرافی حداقل باید 8 کارکتر داشته باشد" })
    .max(3000, {
      message: "بیوگرافی حداکثر باید 3000 کارکتر داشته باشد",
    }),

  link: z
    .string({ required_error: "لینک را وارد کنید" })
    .min(3, { message: "لینک  حداقل باید 3 کارکتر باشد" })
    .max(30, { message: "لینک  باید 30 کاراکتر داشته باشد" }),
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  image: z.any({ required_error: "عکس را آپلود کنید" }),
});

export type TActor = z.infer<typeof Actor>;
