"use server";
import connectToDB from "@/src/configs/db";
import StarModel from "@/src/models/stars";
import { unlink, writeFileSync } from "fs";
import { isValidObjectId } from "mongoose";
import { revalidatePath } from "next/cache";
import path from "path";
import { TResponse } from "../types";
import { checkIsAdmin } from "@/src/utils/serverHelper";

export const createNewActor = async (body: FormData) => {
  try {
    connectToDB();

    const { name, bio, link, twitter, instagram, image }: any =
      Object.fromEntries(body);

    if (!name || !bio || !link || !image) {
      return {
        message: "لطفا همه فیلد ها را وارد کنید",
        status: 422,
      };
    }

    const fileName = Date.now() + image.name;
    let imageName = `/uploads/${fileName}`;
    const imagePath = path.join(process.cwd(), "public/uploads/" + fileName);
    const buffer = Buffer.from(await image.arrayBuffer());
    writeFileSync(imagePath, buffer);

    await StarModel.create({
      name,
      bio,
      link,
      twitter,
      instagram,
      image: imageName,
    });

    revalidatePath("/p-admin/actors");

    return {
      message: "بازیگر با موفقیت ساخته شد",
      status: 201,
    };
  } catch (error) {
    return {
      message: "لطفا اتصال خود را به اینترنت چک کنید",
      status: 500,
    };
  }
};

export const updateActor = async (
  id: string,
  body: FormData
): Promise<TResponse> => {
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
        message: "این مسیر فقط برای کاربران ادمین اجازه داده میشود",
        status: 403,
      };
    }

    const actorInfo = await StarModel.findOne({ _id: id });

    let imageName = actorInfo.image;
    const { name, bio, link, twitter, instagram, image }: any =
      Object.fromEntries(body);

    if (image !== "/") {
      const fileName = Date.now() + image.name;
      imageName = `/uploads/${fileName}`;
      const imagePath = path.join(process.cwd(), "public/uploads/" + fileName);
      const buffer = Buffer.from(await image.arrayBuffer());
      writeFileSync(imagePath, buffer);
    }

    const actor = await StarModel.findOneAndUpdate(
      { _id: id },
      {
        $set: { name, bio, link, twitter, instagram, image: imageName },
      }
    );

    if (!actor) {
      return {
        message: "بازیگر مورد نظر شما پیدا نشد",
        status: 404,
      };
    }

    revalidatePath("/p-admin/actors");

    return {
      message: "بازیگر مورد نظر با موفقیت آپدیت شد",
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

export const deleteActor = async (id: string) => {
  try {
    connectToDB();
    if (!isValidObjectId(id)) {
      return {
        message: "ایدی مورد نظر معتبر نمیباشد",
        status: 422,
      };
    }

    const actor = await StarModel.findOne({ _id: id });

    if (!actor) {
      return {
        status: 404,
        message: "بازیگر مورد نظر یافت نشد",
      };
    }

    unlink(path.join(process.cwd(), "public/" + actor.image), (err) => {
      if (err) {
        console.log(err);
      }
    });

    await StarModel.findByIdAndDelete(`${id}`);

    revalidatePath("/p-admin/actors");
    return {
      message: "بازیگر با موفقیت حذف شد",
      status: 200,
    };
  } catch (error) {
    return {
      message: "لطفا اتصال خود را به اینترنت چک کنید",
      status: 500,
    };
  }
};
