"use server";
import connectToDB from "@/src/configs/db";
import MenuModel from "@/src/models/menu";
import { Menu, TMenu } from "@/src/validators/frontend";
import { revalidatePath } from "next/cache";

export const createNewMenu = async (data: TMenu) => {
  try {
    connectToDB();
    const { title, link, parrent } = data;

    const validateFields = Menu.safeParse(data);
    if (!validateFields.success) {
      return {
        message: validateFields.error.flatten().fieldErrors,
        status: 422,
      };
    }
    await MenuModel.create({
      title,
      link,
      parrent: parrent || null,
    });

    revalidatePath("/p-admin/menus");

    return {
      message: "منو با موفقیت ساخته شد",
      status: 201,
    };
  } catch (error) {
    return { message: "اتصال اینترنت خود را چک کنید", status: 500 };
  }
};

export const deleteMenu = async () => {};
