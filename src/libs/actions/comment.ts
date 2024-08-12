"use server";

import connectToDB from "@/src/configs/db";
import CommentModel from "@/src/models/comments";
import { authUser } from "@/src/utils/serverHelper";

export const sendNewComment = async (data: any) => {
  try {
    connectToDB();
    const user = await authUser();

    if (!user) {
      return {
        message: "لطفا برای ارسال کامنت لاگین کنید",
        status: 401,
      };
    }

    const { movie, content, isSpoiled } = data;

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
      isSpoiled,
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
