"use server";
import connectToDB from "@/src/configs/db";
import ContactModel from "@/src/models/contactus";
import { ContactUs, TContactUs } from "@/src/validators/frontend";
import { revalidatePath } from "next/cache";

export const sendNewContact = async (body: TContactUs) => {
  try {
    connectToDB();
    const { name, phone, content, department, email } = body;

    const validateFields = ContactUs.safeParse(body);
    if (!validateFields.success) {
      return {
        message: "تمام فیلد های خواسته شده را وارد کنید",
        status: 422,
      };
    }

    await ContactModel.create({
      name,
      phone,
      content,
      department,
      email,
    });

    revalidatePath("/p-admin/contactus");

    return {
      message: "پیغام شما با موفقیت ارسال شد",
      status: 201,
    };
  } catch (error) {
    console.log(error);
    
    return {
      message: "لطفا اتصال اینترنت خود را بررسی کنید",
      status: 500,
    };
  }
};
