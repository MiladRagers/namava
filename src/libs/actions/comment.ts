"use server";

import connectToDB from "@/src/configs/db";
import CommentModel from "@/src/models/comments";
import { authUser, checkIsAdmin } from "@/src/utils/serverHelper";
import { isValidObjectId } from "mongoose";
import { revalidatePath } from "next/cache";

export const sendNewComment = async (formData: FormData, movie: string) => {
  console.log(movie);

  try {
    connectToDB();
    const user = await authUser();
    if (!user) {
      return {
        message: "لطفا برای ارسال کامنت لاگین کنید",
        status: 401,
      };
    }

    const { content, isSpoiled } = Object.fromEntries(formData);

    if (!movie || !content) {
      return {
        message: "لطفا تمام فیلد ها را وارد کنید",
        status: 422,
      };
    }

    await CommentModel.create({
      user: user._id,
      movie,
      content,
      isSpoiled: isSpoiled === "on" ? true : false,
    });

    return {
      message: "کامنت با موفقیت ارسال شد",
      status: 201,
    };
  } catch (error) {
    return {
      message: "اتصال خود را به اینترنت چک کنید",
      status: 500,
    };
  }
};

export const acceptAndRejectComment = async (status: boolean, id: string) => {
  try {
    connectToDB();

    if (!checkIsAdmin()) {
      return {
        message: "شما به این روت دسترسی ندارید",
        status: 401,
      };
    }

    await CommentModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          isAccept: status ? false : true,
        },
      }
    );

    revalidatePath("/p-admin/comments");

    return {
      message: `کامنت با موفقیت ${status ? "رد" : "تایید"} شد`,
      status: 200,
    };
  } catch (error) {
    console.log(error);

    return {
      message: "لطفا اتصال خود را به اینترنت چک کنید",
      status: 500,
    };
  }
};

export const deleteComment = async (id: string) => {
  try {
    connectToDB();
    if (!isValidObjectId(id)) {
      return {
        message: "ایدی مورد نظر معتبر نمیباشد",
        status: 422,
      };
    }

    await CommentModel.findByIdAndDelete(`${id}`);

    revalidatePath("/p-admin/comments");

    return {
      message: "کامنت با موفقیت حذف شد",
      status: 200,
    };
  } catch (error) {
    return {
      message: "لطفا اتصال خود را به اینترنت چک کنید",
      status: 500,
    };
  }
};
