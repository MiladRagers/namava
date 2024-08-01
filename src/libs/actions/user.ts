"use server";
import UserModel from "@/src/models/user";
import ProfileModel from "@/src/models/profile";
import connectToDB from "@/src/configs/db";
import { revalidatePath } from "next/cache";

export const deleteUser = async (formData: FormData) => {
  const userId = formData.get("id");

  try {
    connectToDB();
    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      return {
        message: "کاربری با این ایدی یافت نشد",
        status: 404,
      };
    }

    await UserModel.findByIdAndDelete(`${userId}`);
    await ProfileModel.deleteMany({ user: userId });

    revalidatePath("/p-admin/users");
    return {
      message: "کاربر با موفقیت حذف شد",
      status: 201,
    };
  } catch (error) {
    return {
      message: "اتصال اینترنت خود را بررسی کنید",
      status: 500,
    };
  }
};
