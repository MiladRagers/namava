"use server";
import connectToDB from "@/src/configs/db";
import CategoryModel from "@/src/models/category";
import { writeFileSync } from "fs";
import path from "path";
import { revalidatePath } from "next/cache";

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
    console.log(error);

    return {
      message: "اتصال خود را به اینترنت چک کنید",
    };
  }
};

export const deleteCategory = async (formData: FormData) => {
  const categoryId = formData.get("id");
};
