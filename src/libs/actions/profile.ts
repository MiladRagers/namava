"use server";
import path from "path";
import { authUser } from "@/src/utils/serverHelper";
import ProfileModel from "@/src/models/profile";
import UserModel from "@/src/models/user";
import { writeFileSync } from "fs";
import connectToDB from "@/src/configs/db";
import { revalidatePath } from "next/cache";
export const addNewProfile = async (formData: FormData) => {
  try {
    connectToDB();
    const user = await authUser();

    if (!user) {
      return {
        message: "لطفا لاگین کنید",
        status: 401,
      };
    }

    if (user.profileLimitCount === 0) {
      return {
        message: "شما تعداد مجاز پروفایل ساخته اید",
        status: 403,
      };
    }

    const name = formData.get("name") as string;
    const image = formData.get("image") as any;
    const isKid = formData.get("isKid") as string;

    if (!name || !image) {
      return {
        message: "تمام فیلد ها را وارد کنید",
        status: 422,
      };
    }

    const fileName = Date.now() + image.name;
    let imageText = `/uploads/${fileName}`;
    const imagePath = path.join(process.cwd(), "public/uploads/" + fileName);
    const buffer = Buffer.from(await image.arrayBuffer());
    writeFileSync(imagePath, buffer);

    const profile = await ProfileModel.create({
      name,
      image: imageText,
      user: user._id,
      ages: isKid ? 7 : 18,
      type: isKid ? "kid" : "adult",
    });

    await UserModel.findOneAndUpdate(
      { _id: user._id },
      {
        $push: {
          profiles: profile._id,
        },
        profileLimitCount: user.profileLimitCount - 1,
      }
    );

    revalidatePath("/profile-list");

    return {
      message: "پروفایل با موفقیت ساخته شد",
      status: 201,
    };
  } catch (error) {
    return {
      message: "اتصال خودتان را به اینترنت چک کنید",
      status: 500,
    };
  }
};
