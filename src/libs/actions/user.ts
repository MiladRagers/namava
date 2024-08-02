"use server";
import UserModel from "@/src/models/user";
import ProfileModel from "@/src/models/profile";
import connectToDB from "@/src/configs/db";
import { revalidatePath } from "next/cache";
import { isValidObjectId } from "mongoose";
import { TUser, User } from "@/src/validators/frontend";
import { hashPassword } from "@/src/utils/auth";

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

export const createNewUser = async (body: TUser) => {
  try {
    connectToDB();
    const { name, username, phone, email, password, bio } = body;

    const validateFields = User.safeParse(body);

    if (!validateFields.success) {
      return {
        message: validateFields.error.flatten().fieldErrors,
        status: 422,
      };
    }

    const isUserExist = await UserModel.findOne({
      $or: [{ email }, { phone }, { username }],
    });

    if (isUserExist) {
      return {
        message: "کاربری با این مشخصات وجود دارد",
        status: 419,
      };
    }

    const hashedPassword = await hashPassword(password);

    let user = new UserModel({
      name,
      username,
      email,
      password: hashedPassword,
      phone,
      biography: bio,
    });

    const profiles = [
      {
        name: "بزرگسال",
        ages: 18,
        user: user._id,
      },
      {
        name: "کودک",
        ages: 7,
        user: user._id,
        image: `/uploads/kidProfile.png`,
        type: "kid",
      },
    ];

    const profileList = await ProfileModel.insertMany(profiles);

    profileList.forEach((profile) => {
      user.profiles.push(profile._id);
    });

    await user.save();

    revalidatePath("/p-admin/user");

    return {
      message: "کاربر با موفقیت ثبت نام شد",
      status: 201,
    };
  } catch (error) {
    return {
      message: "اتصال اینترنت خود را بررسی کنید",
      status: 500,
    };
  }
};
