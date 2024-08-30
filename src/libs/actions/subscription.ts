"use server";
import connectToDB from "@/src/configs/db";
import SubscriptionModel from "@/src/models/subscription";
import UserModel from "@/src/models/user";
import { authUser, checkIsAdmin } from "@/src/utils/serverHelper";
import { Subscription, TSubscription } from "@/src/validators/frontend";
import { isValidObjectId } from "mongoose";
import { revalidatePath } from "next/cache";

export const createNewSubscription = async (data: TSubscription) => {
  try {
    connectToDB();
    const { price, time, title, discount } = data;
    const user = await authUser();

    const validateFields = Subscription.safeParse(data);

    if (!validateFields.success) {
      return {
        message: validateFields.error.flatten().fieldErrors,
        status: 422,
      };
    }

    if (!checkIsAdmin()) {
      return {
        message: "این روت فقط برای کاربران ادمین است",
        status: 403,
      };
    }

    if (!user) {
      return {
        message: "کاربر گرامی لطفا در ابتدا لاگین کنید",
        status: 401,
      };
    }

    await SubscriptionModel.create({
      price,
      time,
      title,
      discount,
      creator: user._id,
    });

    revalidatePath("/p-admin/subscription");

    return {
      message: "اشتراک با موفقیت ساخته شد",
      status: 201,
    };
  } catch (error) {
    return {
      message: "اتصال خود را به اینترنت چک کنید",
      status: 500,
    };
  }
};

export const deleteSubscription = async (id: string) => {
  try {
    connectToDB();
    if (!isValidObjectId(id)) {
      return {
        message: "ایدی مورد نظر معتبر نمیباشد",
        status: 422,
      };
    }

    if (!checkIsAdmin()) {
      return {
        message: "این روت فقط برای ادمین است",
        status: 403,
      };
    }

    const subscription = await SubscriptionModel.findOne({ _id: id });
    if (!subscription) {
      return {
        message: "اشتراک مورد نظر یافت نشد",
        status: 404,
      };
    }

    await SubscriptionModel.findByIdAndDelete(`${id}`);

    revalidatePath(`/p-admin/subscription`);

    return {
      message: "اشتراک با موفقیت حذف شد",
      status: 200,
    };
  } catch (error) {
    return error;
  }
};

export const addSubscription = async (
  userId: string,
  durationInDay: number
) => {
  try {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + durationInDay);

    await UserModel.findByIdAndUpdate(`${userId}`, {
      $set: {
        subscriptionEnd: endDate,
      },
    });
  } catch (error) {
    return error;
  }
};
