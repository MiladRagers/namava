"use server";

import connectToDB from "@/src/configs/db";
import CommentModel from "@/src/models/comments";
import { authUser, checkIsAdmin } from "@/src/utils/serverHelper";
import { isValidObjectId } from "mongoose";
import { revalidatePath } from "next/cache";
import { TResponse } from "../types";

export const sendNewComment = async (formData: FormData, movie: string) => {
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

export const likeComment = async (
  commentId: string,
  userId: string
): Promise<TResponse> => {
  try {
    connectToDB();

    if (!userId) {
      return {
        message: "ابتدا لاگین کنید",
        status: 401,
      };
    }

    if (!isValidObjectId(commentId)) {
      return {
        message: "ایدی مورد نظر معتبر نمیباشد",
        status: 422,
      };
    }

    const isLiked = await CommentModel.findOne({
      _id: commentId,
      liked: { $in: userId },
    });

    const isDisLiked = await CommentModel.findOne({
      _id: commentId,
      disliked: { $in: userId },
    });

    if (isDisLiked || isLiked) {
      await CommentModel.findOneAndUpdate(
        { _id: commentId },
        {
          $pull: {
            liked: userId,
            disliked: userId,
          },
        }
      );
    } else {
      await CommentModel.findOneAndUpdate(
        { _id: commentId },
        {
          $push: {
            liked: userId,
          },
        }
      );
    }

    return {
      message: "با موفقیت کامنت لایک شد",
      status: 200,
    };
  } catch (error) {
    return {
      message: "اتصال خود را به اینترنت چک کنید",
      status: 500,
    };
  }
};

export const dislikeComment = async (
  commentId: string,
  userId: string
): Promise<TResponse> => {
  try {
    connectToDB();

    if (!userId) {
      return {
        message: "ابتدا لاگین کنید",
        status: 401,
      };
    }

    if (!isValidObjectId(commentId)) {
      return {
        message: "ایدی مورد نظر معتبر نمیباشد",
        status: 422,
      };
    }

    const isLiked = await CommentModel.findOne({
      _id: commentId,
      liked: { $in: userId },
    });

    const isDisLiked = await CommentModel.findOne({
      _id: commentId,
      disliked: { $in: userId },
    });

    if (isDisLiked) {
      await CommentModel.findOneAndUpdate(
        { _id: commentId },
        {
          $pull: {
            disliked: userId,
          },
        }
      );
    } else if (isLiked) {
      await CommentModel.findOneAndUpdate(
        { _id: commentId },
        {
          $pull: {
            liked: userId,
          },
        }
      );

      await CommentModel.findOneAndUpdate(
        { _id: commentId },
        {
          $push: {
            disliked: userId,
          },
        }
      );
    } else {
      await CommentModel.findOneAndUpdate(
        { _id: commentId },
        {
          $push: {
            disliked: userId,
          },
        }
      );
    }

    return {
      message: "با موفقیت کامنت دیس لایک شد",
      status: 200,
    };
  } catch (error) {
    return {
      message: "اتصال خود را به اینترنت چک کنید",
      status: 500,
    };
  }
};
