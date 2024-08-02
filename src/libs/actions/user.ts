"use server";
import UserModel from "@/src/models/user";
import ProfileModel from "@/src/models/profile";
import connectToDB from "@/src/configs/db";
import { revalidatePath } from "next/cache";
import { isValidObjectId } from "mongoose";

export const deleteUser = async (userId: string) => {
  try {
    connectToDB();

    if (!isValidObjectId) {
      return {
        message: "ایدی مد نظر معتبر نمی باشد",
        status: 422,
      };
    }

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
      status: 200,
    };
  } catch (error) {
    return {
      message: "اتصال اینترنت خود را بررسی کنید",
      status: 500,
    };
  }
};

export const createNewUser = async () => {
  try {
    connectToDB();
  } catch (error) {
    return {
      message: "اتصال اینترنت خود را بررسی کنید",
      status: 500,
    };
  }
};
