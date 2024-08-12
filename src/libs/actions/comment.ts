"use server";

import connectToDB from "@/src/configs/db";
import CommentModel from "@/src/models/comments";
import { authUser } from "@/src/utils/serverHelper";

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
