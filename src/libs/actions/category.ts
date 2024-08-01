"use server";
import connectToDB from "@/src/configs/db";
import CategoryModel from "@/src/models/category";
import { writeFileSync, unlink } from "fs";
import path from "path";
import { revalidatePath } from "next/cache";
import { isValidObjectId } from "mongoose";

export const addNewCategory = async (body: FormData) => {
  try {
    connectToDB();
    const { title, tags, link, parent, image, desc }: any =
      Object.fromEntries(body);

    if (!title || !tags || !link || !desc || !image) {
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

    await CategoryModel.create({
      title,
      tags: tags.split("،"),
      link,
      parent,
      description: desc,
      image: imageName,
    });

    revalidatePath("/p-admin/categories");

    return {
      message: "دسته بندی با موفقیت ساخته شد",
      status: 201,
    };
  } catch (error) {
    return {
      message: "اتصال خود را به اینترنت چک کنید",
    };
  }
};

export const deleteCategory = async (formData: FormData) => {
  const categoryId = formData.get("id");
  try {
    if (isValidObjectId(categoryId)) {
      const category = await CategoryModel.findOne({ _id: categoryId });
      if (!category) {
        return {
          message: "این کتگوری وجود ندارد",
          status: 404,
        };
      }

      unlink(
        path.join(process.cwd(), "public/" + category.image),
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );

      await CategoryModel.findByIdAndDelete(`${categoryId}`);

      revalidatePath("/p-admin/categories");
      return {
        message: "دسته بندی با موفقیت حذف شد",
        status: 200,
      };
    } else {
      return {
        message: "ایدی مورد نظر معتبر نمیباشد",
        status: 422,
      };
    }
  } catch (error) {
    return {
      message: "اتصال خود را به اینترنت چک کنید",
    };
  }
};
