"use server"
import connectToDB from "@/src/configs/db";
import StarModel from "@/src/models/stars";
import { writeFileSync } from "fs";
import { revalidatePath } from "next/cache";
import path from "path";

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


export const deleteActor = async (id : string) =>{

}